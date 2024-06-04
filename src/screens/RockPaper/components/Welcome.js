import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  SliderComponent,
} from "react-native";
import intro from "../assets/intro.gif";
import { Audio } from "expo-av";

export default function Welcome(prop) {
  const [Name, setName] = useState("");
  const [rounds, setrounds] = useState(1);

  const handlechange = () => {
    prop.onChange(true, rounds, Name);
  };

  const Sounds = {
    intro: require("../assets/fight.wav"),
    click: require("../assets/click.mp3"),
  };

  const HandlePlaySound = async (snd) => {
    const soundObj = new Audio.Sound();
    try {
      let source = snd;
      await soundObj.loadAsync(source);
      await soundObj
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObj.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    HandlePlaySound(Sounds.intro);
  }, []);
  
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          borderRadius: 10,
          backgroundColor: "tomato",
          width: "98%",
          textAlign: "center",
          marginHorizontal: 20,
          paddingVertical: 10,
          color: "white",
          marginTop: 10,
          fontWeight: "bold",
        }}
      >
        Rock Paper Scissor
      </Text>
      <View style={styles.gifContainer}>
        <Image style={styles.gif} source={intro}></Image>
      </View>
      <Text
        style={{
          fontSize: 20,
          color: "red",
          marginBottom: 20,
          fontWeight: "bold",
        }}
      >
        Let's Play
      </Text>
      <TextInput
        style={styles.Inp}
        placeholder="Name"
        value={Name}
        onChangeText={(txt) => {
          setName(txt);
        }}
      ></TextInput>
      <Text style={styles.text}>No. Of Round </Text>
      <View style={styles.butCont}>
        <TouchableOpacity
          onPress={() => {
            if (rounds > 1) {
              setrounds(rounds - 1);
              HandlePlaySound(Sounds.click);
            }
          }}
        >
          <Text style={styles.roundButtons}>-</Text>
        </TouchableOpacity>
        <Text style={styles.roundTxt}>{rounds}</Text>
        <TouchableOpacity
          onPress={() => {
            if (rounds < 10) {
              setrounds(rounds + 1);
              HandlePlaySound(Sounds.click);
            } else {
              alert("Max round is Reached");
            }
          }}
        >
          <Text style={styles.roundButtons}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          handlechange();
          HandlePlaySound(Sounds.click);
        }}
      >
        <Text style={styles.playBtn}>Play</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccf2ff",
    // justifyContent: "center",
    alignItems: "center",
    borderColor: "lightgrey",
    borderWidth: 3,
  },
  gifContainer: {
    width: "98%",
    height: 200,
    overflow: "hidden",
    marginTop: 30,
    marginBottom: 40,
    borderColor: "orange",
    borderRadius: 5,
    borderWidth: 2,
  },
  gif: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 15,
    marginTop: 30,
    fontWeight: "500",
    color: "gray",
  },
  Inp: {
    fontSize: 18,
    backgroundColor: "white",
    borderRadius: 2,
    width: 200,
    borderWidth: 2,
    borderColor: "white",
    borderBottomColor: "lightgray",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    color: "#884dff",
  },
  butCont: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  roundButtons: {
    width: 40,
    height: 40,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#ccffcc",
    color: "green",
    textAlignVertical: "center",
    borderRadius: 5,
    borderColor: "#80ff80",
    borderWidth: 2,
  },
  roundTxt: {
    height: "100%",
    fontWeight: "bold",
    fontSize: 20,
    width: 50,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "white",
    color: "blue",
  },
  playBtn: {
    width: 100,
    backgroundColor: "#3385ff",
    padding: 6,
    fontSize: 20,
    borderRadius: 10,
    color: "white",
    textAlign: "center",
    marginTop: 20,
    borderColor: "royalblue",
    borderWidth: 3,
  },
});
