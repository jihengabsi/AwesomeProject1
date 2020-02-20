import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TextInput,
  Dimensions,
  Alert,
  TouchableOpacity
} from "react-native";

import logo from "../images/logo.png";
import bg from "../images/background.jpg";
const { width: WIDTH } = Dimensions.get("window");

export default function App({ navigation }) {
  return (
    <ImageBackground source={bg} style={styles.backgroundContainer}>
      <View>
        <Image style={styles.logo} source={logo} />
        <TouchableOpacity style={styles.btnIN}  onPress={() => navigation.navigate('Signin')} >
          <Text style={styles.Text}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnUP}>
          <Text style={styles.Text}>Créer un compte </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: "center",
    justifyContent: "center"
  },
  Text: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    textAlign: "center"
  },
  button: {
    padding: 16,
    width: 200,
    borderRadius: 36,
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 120,
    top: -180
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25
  },
  btnIN: {
    width: WIDTH - 55,
    height: 55,
    borderRadius: 25,
    backgroundColor: "#41909D",
    justifyContent: "center",
    top: 120,
    opacity: 0.8
  },
  btnUP: {
    width: WIDTH - 55,
    height: 55,
    borderRadius: 25,
    backgroundColor: "#41909D",
    justifyContent: "center",
    top: 150,
    opacity: 0.8
  }
});
