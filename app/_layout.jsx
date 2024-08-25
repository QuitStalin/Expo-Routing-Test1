// app/_layout.js
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* The initial welcome screen */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* The login screen */}
      <Stack.Screen
        name="login"
        options={{ title: "Login", animation: "none", headerShown: false }}
      />

      {/* The signup screen */}
      <Stack.Screen
        name="signup"
        options={{ title: "Sign Up", headerShown: false }}
      />

      {/* The main screen with tabs */}
      <Stack.Screen name="main" options={{ headerShown: false }} />
    </Stack>
  );
}
