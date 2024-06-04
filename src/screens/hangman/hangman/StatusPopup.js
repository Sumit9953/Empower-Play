import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import colors from "../common/colors";
import winImg from "../assets/win.png";
import loseImg from "../assets/lose.png";

const quotes = [
  "The IPA Declaration emphasizes every child's right to play, learn, and grow.",
  "The IPA Declaration is backed by a United Nations rule promoting play and cultural activities for children.",
  "Playing helps children communicate, feel good, make friends, and learn.",
  "Challenges to play include lack of safe places and excessive focus on schoolwork.",
  "The IPA group aims to help children play more, stay healthy, and be happy.",
  "IPA works with governments and organizations to ensure children worldwide can play and have fun.",
];

const StatusPopup = ({ status, onPress }) => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomIndex];

  const src = status === "win" || status === "completed" ? winImg : loseImg;
  const message =
    status === "win"
      ? "Congrats you won"
      : status === "completed"
      ? "Congratulations you completed the puzzle"
      : "Oops you lost";

  const buttonText =
    status === "win"
      ? "Next word"
      : status === "completed"
      ? "Back to Previous"
      : "Retry";
  return (
    <Modal visible={status !== ""} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <Animatable.View animation={"zoomIn"} delay={400} style={styles.popup}>
          <Image source={src} style={styles.img} />
          <Text style={styles.text}>{message}</Text>
          <View
            style={{
              backgroundColor: "#d3d3d3",
              padding: 10,
              marginTop: 5,
              elevation: 5,
            }}
          >
            <Text>{quote}</Text>
          </View>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>{buttonText}</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </Modal>
  );
};

export default StatusPopup;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  popup: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.Modal,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  img: {
    width: 100,
    height: 100,
  },
  btn: {
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: colors.shapeColor,
  },
  btnText: {
    color: "white",
    fontSize: 18,
  },
});
