import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,  // For better spacing at the top
  },

  // Back button styles (positioned to the top-left and made smaller)
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 5,
    backgroundColor: '#2D754E',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Chat list styles
  chatList: {
    padding: 10,
  },
  chatItem: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 10,
   
    elevation: 4, // For Android shadow effect
    flexDirection: 'row', // Aligning image and text horizontally
    alignItems: 'center', // Ensuring all items are aligned properly
  },
  chatContent: {
    flexDirection: 'row', // Ensures image and text are displayed next to each other
    alignItems: 'center',
  },

  // 채팅방 사진 스타일
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular image for the chat avatar
    marginRight: 15, // Spacing between image and text
  },

  chatDetails: {
    flexDirection: 'column',
    flex: 1, // Makes sure the text content takes up remaining space
  },

  chatHeader: {
    flexDirection: 'row', // Align name and time horizontally
    justifyContent: 'space-between', // Name and time should be on opposite sides
    alignItems: 'center',
  },

  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D754E',
  },
  chatLastMessage: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  chatLastMessageTime: {
    fontSize: 12,
    color: '#aaa', // Lighter color for the time
  },

  // Messages container styles
  messageList: {
    padding: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%',
  },
  selfMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#2D754E',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F2F3F7',
  },
  messageText: {
    color: 'white',
  },

  // Input container styles
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#2D754E',
    borderRadius: 20,
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D754E',
    padding: 10,
  },
  chatTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    marginRight: 10,
  },
  
});

export default styles;
