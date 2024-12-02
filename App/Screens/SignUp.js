import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styles } from "../styles/SignUp.style";
import NavigateBefore from "../components/NavigateBefore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState(""); // 닉네임
  const [password, setPassword] = useState(""); // 비밀번호
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인
  const [email, setEmail] = useState(""); // 이메일
  const [phone, setPhone] = useState(""); // 휴대폰
  const [birthYear, setBirthYear] = useState(""); // 생년월일 - 년도
  const [birthMonth, setBirthMonth] = useState(""); // 생년월일 - 월
  const [birthDay, setBirthDay] = useState(""); // 생년월일 - 일

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      return Alert.alert("비밀번호 불일치", "비밀번호가 일치하지 않습니다.");
    }

    try {
      // Firebase Authentication으로 사용자 생성
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firestore에 사용자 정보 저장
      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        phone,
        birthDate: `${birthYear}-${birthMonth}-${birthDay}`, // 생년월일을 "YYYY-MM-DD" 형식으로 저장
      });

      Alert.alert("회원가입 성공", "회원가입이 완료되었습니다.");
      navigation.navigate("LocationScreen"); // 회원가입 후 LocationScreen으로 이동
    } catch (error) {
      Alert.alert("회원가입 실패", error.message); // 오류 발생 시 메시지 출력
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 20,
            left: 25,
            zIndex: 10,
          }}
        >
          <NavigateBefore />
        </TouchableOpacity>
        <Text style={styles.headerText}>회원가입</Text>
        <View style={styles.rectangle} />
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={styles.form}
        enableOnAndroid={true}
        resetScrollToCoords={{ x: 0, y: 0 }}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>아이디*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
          placeholderTextColor="#c6c6c6"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>비밀번호*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="8자 이상의 영문 혹은 영문과 숫자를 조합"
          placeholderTextColor="#c6c6c6"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>비밀번호 확인*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="비밀번호를 한 번 더 입력해주세요"
          placeholderTextColor="#c6c6c6"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Text style={styles.label}>닉네임*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="2자 이상의 한글 혹은 한글과 숫자를 조합"
          placeholderTextColor="#c6c6c6"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>이메일*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="예) sunmoon123@sunmoon.kr"
          placeholderTextColor="#c6c6c6"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>휴대폰*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="숫자만 입력해주세요"
          placeholderTextColor="#c6c6c6"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.label}>생년월일</Text>
        <View style={styles.dropdownContainer}>
          <TextInput
            style={styles.dropdownItem}
            placeholder="년도"
            value={birthYear}
            onChangeText={(text) => setBirthYear(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.dropdownItem}
            placeholder="월"
            value={birthMonth}
            onChangeText={(text) => setBirthMonth(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.dropdownItem}
            placeholder="일"
            value={birthDay}
            onChangeText={(text) => setBirthDay(text)}
            keyboardType="numeric"
          />
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonContainer} onPress={handleSignUp}>
          <Text style={styles.buttonText}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
