// app/signup.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import {
  useFonts,
  RadioCanada_600SemiBold,
} from "@expo-google-fonts/radio-canada";
import Animated from "react-native-reanimated";
import {
  FadeIn,
  FadeInUp,
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";
export default function SignupScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    router.replace("/main");
  };

  return (
    <View>
      <View style={styles.title}>
        <Animated.Text>Dobro Došli!</Animated.Text>
        <Animated.Text>Login:</Animated.Text>
      </View>
      <View style={styles.logoContainer}>
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={require("./assets/BusMateLogo.png")}
          style={styles.logo}
        />
        <Animated.Text
          entering={FadeInUp.delay(400).duration(1000)}
          style={styles.regularText}
        >
          "Ride Smart, Ride Easy."
        </Animated.Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ime</Text>
          <TextInput
            style={styles.input}
            placeholder="Upišite vaše ime"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="mojemail@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Lozinka</Text>
          <TextInput
            style={styles.input}
            placeholder=". . . . . . . . . . ."
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    height: 150,
    backgroundColor: "#272727",
  },
  logoContainer: {
    height: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 39,
  },
  form: {
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#272727",
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#272727",
    paddingHorizontal: 10,
    backgroundColor: "transparent",
  },
});
