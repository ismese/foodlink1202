import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import { styles } from "../../styles/MyScreen.style";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // 네비게이션 훅 가져오기

const MyScreen = () => {
  const [rating, setRating] = useState(4); // 초기 별점 설정
  const navigation = useNavigation(); // 네비게이션 객체 가져오기

  // 별점 업데이트 함수
  const handleRating = (value) => {
    setRating(value);
  };

  // 수정 버튼 클릭
  const handleEdit = () => {
    navigation.navigate("MyPostWrite"); // MyPostWrite 화면으로 이동
  };

  // 삭제 버튼 클릭
  const handleDelete = () => {
    Alert.alert("삭제 버튼 클릭", "삭제 기능 구현 예정");
  };

  // 게시물 데이터 (건들지 않음)
  const posts = Array(12).fill("게시물");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileCard}>
          {/* 사용자 프로필 이미지 */}
          <Image
            source={require("../../../start-expo/assets/avatar.png")}
            style={styles.profileImage}
          />
          {/* 배출 절감 메시지 */}
          <Text style={styles.profileText}>
            <Text style={styles.highlightText}>동길님</Text>
            <Text>의 나눔으로{"\n"} 500g의 CO</Text>
            <Text style={styles.smallText}>2</Text>
            <Text> 배출을 절감했습니다.</Text>
          </Text>
          {/* 별점 및 버튼 섹션 */}
          <View style={styles.actionRow}>
            {/* 수정 버튼 */}
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleEdit} // 네비게이션 호출
            >
              <MaterialIcons
                name="edit"
                style={styles.actionButtonIcon}
              />
            </TouchableOpacity>

            {/* 별점 */}
            <View style={styles.stars}>
              {[1, 2, 3, 4, 5].map((value) => (
                <TouchableOpacity
                  key={value}
                  onPress={() => handleRating(value)}
                >
                  <MaterialIcons
                    name={value <= rating ? "star" : "star-border"}
                    size={30}
                    color="#FFD700" // 금색
                  />
                </TouchableOpacity>
              ))}
            </View>

            {/* 삭제 버튼 */}
            <TouchableOpacity
              style={styles.actionButton}
              onPress={handleDelete}
            >
              <MaterialIcons
                name="delete"
                style={styles.actionButtonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* 게시물 그리드 (건들지 않음) */}
        <ScrollView
          contentContainerStyle={styles.gridContainer}
        >
          {posts.map((post, index) => (
            <TouchableOpacity key={index} style={styles.gridItem}>
              <Text style={styles.gridText}>
                {post} {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyScreen;
