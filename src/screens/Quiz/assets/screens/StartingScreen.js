import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const StartScreen = ({ setLoading, title }) => {
  console.log(title);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
      }}
    >
      <View style={{ height: 400, width: "90%" }}>
        <LottieView
          source={require("../images/startGame.json")}
          style={{ flex: 1 }}
          resizeMode="contain"
          autoPlay
          loop={false}
          onAnimationFinish={() => setLoading(false)}
        />
      </View>
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>Play {title}</Text>
    </View>
  );
};

export default StartScreen;
