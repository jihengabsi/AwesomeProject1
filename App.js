import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from "./screens/home";
import signinScreen from "./screens/signin";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signin" component={signinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 