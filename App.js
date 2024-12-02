import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./App/components/TabNavigator";
import CategoryScreen from "./App/Screens/HeaderScreen/Category/CategoryScreen";
import HeartScreen from "./App/Screens/HeaderScreen/Heart/HeartScreen";
import IfmScreen from "./App/Screens/HeaderScreen/Ifm/IfmScreen";
import LoginScreen from "./App/Screens/LoginScreen";
import SignUp from "./App/Screens/SignUp";
import LocationScreen from "./App/Screens/LocationScreen";
import HomeScreen from "./App/Screens/HomeScreen";
import CustomHeader from "./App/components/CustomHeader";
import NewHomeScreen from "./App/Screens/NewHomeScreen";
import SignUpmodify from "./App/Screens/Modify/SignUpmodify";
import Locationmodify from "./App/Screens/Modify/Locationmodify";
import AlarmScreen from "./App/Screens/HeaderScreen/Alarm/AlarmScreen";
import MyPostWrite from "./App/Screens/Myscreen/MyPostWrite";
import Post from "./App/Screens/Myscreen/post/Post";
import { PostProvider } from "./App/Screens/Myscreen/context/PostContext"; // PostProvider 추가

const Stack = createStackNavigator();

export default function App() {
  return (
    // PostProvider로 전체 컴포넌트를 감쌈
    <PostProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen" // 초기 화면 설정
          screenOptions={{ headerShown: false }} // 모든 헤더 숨김
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
          <Stack.Screen name="HeartScreen" component={HeartScreen} />
          <Stack.Screen name="IfmScreen" component={IfmScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="LocationScreen" component={LocationScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CustomHeader" component={CustomHeader} />
          <Stack.Screen name="NewHomeScreen" component={NewHomeScreen} />
          <Stack.Screen name="SignUpmodify" component={SignUpmodify} />
          <Stack.Screen name="Locationmodify" component={Locationmodify} />
          <Stack.Screen name="AlarmScreen" component={AlarmScreen} />
          <Stack.Screen name="MyPostWrite" component={MyPostWrite} />
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    </PostProvider>
  );
}
