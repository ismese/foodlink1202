import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './Chat.Styles';

const ChatList = ({ chatList, setCurrentRoomId }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => setCurrentRoomId({ id: item.id, name: item.name })}
          >
            <View style={styles.chatContent}>
              {/* 채팅방 사진 */}
              <Image
                source={require('../../../start-expo/assets/avatar.png')} 
                style={styles.chatImage}
              />
              <View style={styles.chatDetails}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>{item.name || 'Chat Room'}</Text>
                  <Text style={styles.chatLastMessageTime}>
                    {item.lastMessageTime || 'No time available'}
                  </Text>
                </View>
                <Text style={styles.chatLastMessage}>
                  {item.lastMessage || 'No messages yet'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.chatList}
      />
    </View>
  );
};

export default ChatList;
