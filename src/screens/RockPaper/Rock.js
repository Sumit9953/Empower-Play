import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
import Game from "./components/Game";
import Welcome from "./components/Welcome";
import { Audio } from "expo-av";

const Rock = () => {
  const [play, setplay] = useState(false);
  const [rounds, setrounds] = useState(1);
  const [plyName, setplyName] = useState("YOU");

  const handlechange = (plystats, rnd, plyerName) => {
    setplay(plystats);
    setrounds(rnd);
    setplyName(plyerName);
  };
  const Gamehandlechange = (plystats) => {
    setplay(plystats);
  };

  return (
    <View style={styles.container}>
      {play ? (
        <Game round={rounds} playerName={plyName} onChange={Gamehandlechange} />
      ) : (
        <Welcome onChange={handlechange} />
      )}
    </View>
  );
};

export default Rock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "lightblue",
  },
});
