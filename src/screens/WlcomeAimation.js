import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function WelcomeAimation() {
  return (
    <LottieView
      source={require("./Assets/welcome.json")}
      style={{ flex: 1 }}
      resizeMode="contain"
      autoPlay
      loop
    />
  );
}
