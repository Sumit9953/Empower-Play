import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Header from "./details-screen/Header/Header";
import { useTranslation } from "react-i18next";
import Icons from "react-native-vector-icons/Ionicons"

import * as Speech from "expo-speech";
import Icon from "react-native-vector-icons/Ionicons";

const QuizDetailScreen = (props) => {
  const navigation = useNavigation();
  const item = props.route.params.item;
  // console.log(item);

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
        marginTop: 10,
        flexGrow: 1,
      }}
    >
      <Header item={item} />

      <Text
        style={{
          padding: 20,
          textAlign: "justify",
          fontSize: 18,
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
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#378CE7",
        justifyContent:"center",
      }} onPress={speak} >
        <Button color={"#378CE7"} title="speak" onPress={speak}  />
        <Icon name="mic-outline" size={24}></Icon>
      </View>

      <View style={{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#FF204E",
        justifyContent:"center",
        // borderRadius:"50%",
      }} onPress={stop}>
        <Button color={"#FF204E"} title="stop" onPress={stop} />
        <Icon name="mic-off-outline" size={24}></Icon>
      </View>
        
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          // backgroundColor:"red",
          padding:20,
          justifyContent: "space-between",
          position: "absolute",
          bottom: 0,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Quizs", { item: item })}
          style={{
            backgroundColor: "#FFFDD7",
            borderRadius: 10,
            flexDirection:"row",
            // padding: 20,
            justifyContent:"space-around",
            alignItems:"center",
            width: 150,
            height:80,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight:800,
              textAlign: "center",
            }}
          >
            Quiz
          </Text>
          <Icons name={"game-controller-outline"} size={34} color={"black"}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Quizs", { item: item })}
          style={{
            backgroundColor: "#8B93FF",
            borderRadius: 10,
            // padding: 20,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems:"center",
            width: 150,
            height:80,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight:800,
              textAlign: "center",
            }}
          >
            Tic Toc
          </Text>
          <Icons name={"game-controller-outline"} size={34} color={"black"}/>
        </TouchableOpacity>
      </View>

      <View style={{
          width: "100%",
          flexDirection: "row",
          // backgroundColor:"red",
          padding:20,
          justifyContent: "space-between",
          position: "absolute",
          bottom:100
        }}>

        <TouchableOpacity
          onPress={() => navigation.navigate("Quizs", { item: item })}
          style={{
            backgroundColor: "#FC819E",
            borderRadius: 10,
            // padding: 20,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems:"center",
            width: 150,
            height:80,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight:800,
              textAlign: "center",
            }}
          >
            Spin
          </Text>
          <Icons name={"game-controller-outline"} size={34} color={"black"}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Hangman")}
          style={{
            backgroundColor: "#67C6E3",
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems:"center",
            width: 150,
            height:80,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight:800,
              textAlign: "center",
            }}
          >
            Puzzel
          </Text>
          <Icons name={"game-controller-outline"} size={34} color={"black"}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizDetailScreen;
