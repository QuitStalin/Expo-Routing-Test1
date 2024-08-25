import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useFonts, Quicksand_600SemiBold } from "@expo-google-fonts/quicksand";
import { RadioCanada_600SemiBold } from "@expo-google-fonts/radio-canada";
import Animated from "react-native-reanimated";
import {
  FadeIn,
  FadeInUp,
  FadeInDown,
  FadeInLeft,
} from "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default function App() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    QuicksandSemiBold: Quicksand_600SemiBold,
    RadioCanadaSemiBold: RadioCanada_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen when resources are ready
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Alternatively, you can return a placeholder view
  }

  return (
    <View style={styles.container}>
      <View>
        <Animated.Image
          entering={FadeIn.duration(500)}
          source={require("./assets/welcomeImage.png")}
          style={{ width: 360, height: 240 }}
        />
      </View>
      <View style={styles.buttons}>
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
        <Animated.Text
          entering={FadeInUp.delay(400).duration(1000)}
          style={[styles.regularText, { marginTop: 5, marginBottom: 40 }]}
        >
          Uživajte u bezbrižnom putovanju, dok mi brinemo o svim detaljima!
        </Animated.Text>
        <AnimatedTouchable
          entering={FadeInDown.delay(300).duration(1000)}
          style={styles.button}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </AnimatedTouchable>
        <AnimatedTouchable
          entering={FadeInDown.delay(500).duration(1000)}
          style={[styles.button, styles.button2]}
          onPress={() => router.push("/signup")}
        >
          <Text style={[styles.buttonText, styles.yellowColor]}>Sign Up</Text>
        </AnimatedTouchable>
        <Animated.Image
          entering={FadeInLeft.duration(500)}
          source={require("./assets/illustration1.png")}
          style={styles.illustration}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttons: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#F4CE14",
  },
  logo: {
    width: "80%",
    height: "10%",
    marginVertical: 30,
  },
  regularText: {
    fontFamily: "QuicksandSemiBold",
    fontSize: 16,
    color: "#3C3C3C",
    textAlign: "center",
    width: "75%",
  },
  button: {
    width: "85%",
    borderColor: "#272727",
    borderWidth: 2,
    borderRadius: 13,
    padding: 12,
    color: "black",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "RadioCanadaSemiBold",
    fontSize: 17,
    color: "#272727",
  },
  yellowColor: {
    color: "#F4CE14",
  },
  button2: {
    backgroundColor: "#272727",
    marginTop: 15,
  },
  illustration: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "75%",
    height: "30%",
  },
});
