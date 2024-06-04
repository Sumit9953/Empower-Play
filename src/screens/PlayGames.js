import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
import Icons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import hang from "./Assets/hang.png";
import quizs from "./Assets/quizs.png";
import rock from "./Assets/rock.png";
import flappy from "./Assets/flappy.png";


const PlayGames = (props) => {
  const navigation = useNavigation();
  const item = props.route.params.item;

  console.log(item);

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "red",
      }}
    >
      <View style={{ padding: 20, margin: 10 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Icons name={"chevron-back-outline"} size={24} color={"black"} />
          <Text style={{ fontSize: 20, fontWeight: 500 }}>Back</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: 600 }}>Play Games..</Text>
          <Icons name={"game-controller-outline"} size={34} color={"black"} />
        </View>

        <Text style={{ fontSize: 15, fontWeight: 300 }}>
          Play game and learn rights about child
        </Text>

        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "blue",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Quizs" , {item : item})}
            style={styles.box}
          >
            <Image
              source={quizs}
              style={{
                width: 150,
                height: 150,
              }}
            />
            {/* <Icons name={"game-controller-outline"} size={34} color={"black"} /> */}

            <Text
              style={{
                fontSize: 20,
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              Quiz
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Hangman")}
            style={styles.box}
          >
            <Image
              source={hang}
              style={{
                width: 150,
                height: 150,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              Hangman
            </Text>
            {/* <Icons name={"game-controller-outline"} size={34} color={"black"} /> */}
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "blue",
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("RockPaper")}
            style={styles.box}
          >
            <Image
              source={rock}
              style={{
                width: 150,
                height: 150,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              Rock Paper
            </Text>
            {/* <Icons name={"game-controller-outline"} size={34} color={"black"} /> */}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("FloopyBird")}
            style={styles.box}
          >
            <Image
              source={flappy}
              style={{
                width: 150,
                height: 150,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              Flappy Bird
            </Text>
            {/* <Icons name={"game-controller-outline"} size={34} color={"black"} /> */}
          </TouchableOpacity>

          

        </View>
      </View>
    </View>
  );
};

export default PlayGames;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  box: {
    width: width / 2.3,
    height: width / 2.2,
    borderRadius: 10,
    backgroundColor: "#fff",
    margin: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // marginTop: "8%",
    alignItems: "center",
  },
});
