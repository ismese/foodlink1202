import React, { useEffect } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, Button, SafeAreaView } from 'react-native';
import styles from './Chat.Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ChatRoom = ({ messages, input, setInput, handleSendMessage, currentRoom, setCurrentRoomId, userId }) => {
  const navigation = useNavigation();

  useEffect(() => {
    // 채팅룸에 진입할 때 탭과 헤더 숨기기
    navigation.setOptions({
      headerShown: false,
      tabBarStyle: { display: 'none' },
    });

    return () => {
      // 채팅룸에서 나갈 때 탭과 헤더 복원
      navigation.setOptions({
        headerShown: true,
        tabBarStyle: undefined,
      });
    };
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setCurrentRoomId(null)}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{currentRoom?.name || 'Chat Room'}</Text>
      </View>

      {/* 메시지 리스트 */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.sender === userId ? styles.selfMessage : styles.otherMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.messageList}
      />

      {/* 입력창 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </SafeAreaView>
  );
};

export default ChatRoom;
