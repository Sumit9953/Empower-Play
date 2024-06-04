import React from "react";
import { View } from 'react-native';
import LottieView from "lottie-react-native";

export default function Animation() {
  return (
   
    <LottieView
      source={require("../images/Congrat.json")}
      style={{flex:1 , zIndex:100}}
      autoPlay
      loop
    />
  );
}