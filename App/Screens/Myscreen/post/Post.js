import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./Post.style";
import PostList from "./PostList.style";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PostList />
    </SafeAreaView>
  );
};


const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <View style={styles.imagePlaceholder} />
      </View>

      {/* Text Content */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <View style={styles.statusIndicator} />
          <Text style={styles.title}>불닭소스 필요하신 분?</Text>
        </View>

        {/* Info Section */}
        <View style={styles.infoContainer}>
          <MaterialIcons name="location-on" size={12} color="#8C8C8C" />
          <Text style={styles.infoText}>12km</Text>
          <Text style={styles.infoSeparator}>·</Text>
          <Text style={styles.infoText}>3일 전</Text>
        </View>

        {/* Price */}
        <Text style={styles.price}>2,000원</Text>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          {/* Comment Section */}
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="chat-bubble-outline" size={16} color="#8C8C8C" />
            <Text style={styles.actionText}>3</Text>
          </TouchableOpacity>

          {/* Like Section */}
          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="favorite-border" size={16} color="#8C8C8C" />
            <Text style={styles.actionText}>11</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;
