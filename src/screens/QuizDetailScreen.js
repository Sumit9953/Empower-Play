import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Header from "./details-screen/Header/Header";
import { useTranslation } from "react-i18next";
import Icons from "react-native-vector-icons/Ionicons";

import * as Speech from "expo-speech";
import Icon from "react-native-vector-icons/Ionicons";

const QuizDetailScreen = (props) => {
  const navigation = useNavigation();
  const item = props.route.params.item;
  console.log(item);

  const text = "hello sumit how are you";

  const { t } = useTranslation();

  const da = item.name.toLowerCase();

  const speak = () => {
    Speech.speak(t(da));
  };

  const stop = () => {
    Speech.stop();
  };

  return (
    <View
      style={{
        width: "100%",
        flexGrow: 1,
        // backgroundColor: "#d3d3d3",
      }}
    >
      <Header item={item} />

      <Text
        style={{
          padding: 20,
          textAlign: "justify",
          fontSize: 18,
          fontWeight: "500",
        }}
      >
        {t(da)}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          // backgroundColor:"red",
          paddingHorizontal: 20,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#378CE7",
            justifyContent: "center",
          }}
          onPress={speak}
        >
          <Button color={"#378CE7"} title="speak" onPress={speak} />
          <Icon name="mic-outline" size={24}></Icon>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FF204E",
            justifyContent: "center",
            // borderRadius:"50%",
          }}
          onPress={stop}
        >
          <Button color={"#FF204E"} title="stop" onPress={stop} />
          <Icon name="mic-off-outline" size={24}></Icon>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          // backgroundColor:"red",
          padding: 20,
          justifyContent: "space-between",
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("PlayGames" , { item : item.name })}
          style={{
            backgroundColor: "#67C6E3",
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "95%",
            height: 80,
            elevation: 4,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            Games for you..
          </Text>
          <Icons name={"game-controller-outline"} size={34} color={"black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizDetailScreen;
