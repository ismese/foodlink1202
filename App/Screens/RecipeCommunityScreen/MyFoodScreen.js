import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { styles } from "../RecipeCommunityScreen/MyFoodScreen.style";
import NavigateBefore from "../../components/NavigateBefore";
import { MaterialIcons } from "@expo/vector-icons";

const MyFoodScreen = () => {
  const navigation = useNavigation(); 
  const [rating, setRating] = useState(4); 

  const posts = Array(12).fill("게시물");

  const handleCameraPress = () => {
    Alert.alert("카메라 버튼 클릭", "카메라 기능 호출 예정");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <NavigateBefore onPress={() => navigation.goBack()} /> 
          <Text style={styles.title}>내 레시피</Text>
          <View style={styles.emptySpace} />
        </View>

        <View style={styles.separator} />
        <View style={styles.profileCard}>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={handleCameraPress}
          >
            <MaterialIcons name="camera-alt" size={40} color="#2D754E" />
          </TouchableOpacity>
          <Text style={styles.profileText}>
            <Text style={styles.highlightText}>동길님</Text>
            <Text> 냉장고에{"\n"} 식자재를 추가해보세요.</Text>
          </Text>
        </View>

        <ScrollView contentContainerStyle={styles.gridContainer}>
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

export default MyFoodScreen;
