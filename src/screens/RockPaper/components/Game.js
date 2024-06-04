import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  SliderComponent,
} from "react-native";
import rok from "../assets/Rock.png";
import pap from "../assets/Paper.png";
import sc from "../assets/Scissor.png";
import empty from "../assets/empty.png";
// import wintrop from '../assets/wintrop.png';
import { DataTable } from "react-native-paper";
import draw from "../assets/draw.gif";
import win from "../assets/win.gif";
import loss from "../assets/loss.gif";
import tie from "../assets/draw.gif";
import winner from "../assets/winner.jpeg";
import losser from "../assets/losser.jpg";
// import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Audio } from "expo-av";

const quotes = [
  "The IPA Declaration emphasizes every child's right to play, learn, and grow.",
  "The IPA Declaration is backed by a United Nations rule promoting play and cultural activities for children.",
  "Playing helps children communicate, feel good, make friends, and learn.",
  "Challenges to play include lack of safe places and excessive focus on schoolwork.",
  "The IPA group aims to help children play more, stay healthy, and be happy.",
  "IPA works with governments and organizations to ensure children worldwide can play and have fun.",
];

export default function Game(prop) {
  const opt = [rok, pap, sc];
  const [rndCnt, setrndCnt] = useState(0);

  let randomIndex = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomIndex];

  const [computer, setcomp] = useState(empty);
  const [player, setplayer] = useState(empty);
  const [plyScr, setplyScr] = useState(0);
  const [compScr, setcompScr] = useState(0);
  const [Result, setResult] = useState("Let's Play");
  const [Showresult, setShowresult] = useState(false);
  const [again, setagain] = useState(false);
  const [resgif, setresgif] = useState(draw);
  const [butAct, setbutAct] = useState(false);

  const Sounds = {
    click: require("../assets/click.mp3"),
    cork: require("../assets/cork.mp3"),
    win: require("../assets/gameover.wav"),
    lose: require("../assets/failure.mp3"),
    draw: require("../assets/tie.wav"),
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
  const BckToHome = () => {
    prop.onChange(false);
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const change = async (choice) => {
    const tim = 800;
    setrndCnt(rndCnt + 1);
    setbutAct(true);
    if (prop.round !== rndCnt) {
      var n = 0;
      for (let i = 0; i < 10; i++) {
        if (n > opt.length) {
          n = 0;
        }
        setplayer(opt[n]);
        setcomp(opt[n - 1]);
        await sleep(50);
        n++;
      }
      var rndSel = Math.floor(Math.random() * opt.length) + 1;
      if (rndSel === 1) {
        setcomp(rok);
      } else if (rndSel === 2) {
        setcomp(pap);
      } else {
        setcomp(sc);
      }
      if (choice === 1) {
        setplayer(rok);
      } else if (choice === 2) {
        setplayer(pap);
      } else {
        setplayer(sc);
      }

      if (choice === 1) {
        if (rndSel === 3) {
          setTimeout(() => {
            HandlePlaySound(Sounds.win);
          }, tim);
          setplyScr(plyScr + 1);
          setResult("WIN");
          setresgif(win);
        } else if (rndSel === 2) {
          setTimeout(() => {
            HandlePlaySound(Sounds.lose);
          }, tim);
          setcompScr(compScr + 1);
          setResult("LOSE !");
          setresgif(loss);
        } else {
          setTimeout(() => {
            HandlePlaySound(Sounds.draw);
          }, tim);
          setResult("Draw !");
          setresgif(draw);
        }
      } else if (choice === 2) {
        if (rndSel === 3) {
          setTimeout(() => {
            HandlePlaySound(Sounds.lose);
          }, tim);
          setResult("LOSE !");
          setcompScr(compScr + 1);
          setresgif(loss);
        } else if (rndSel === 1) {
          setTimeout(() => {
            HandlePlaySound(Sounds.win);
          }, tim);
          setResult("WIN !");
          setplyScr(plyScr + 1);
          setresgif(win);
        } else {
          setTimeout(() => {
            HandlePlaySound(Sounds.draw);
          }, tim);

          setResult("Draw !");
          setresgif(draw);
        }
      } else {
        if (rndSel === 1) {
          setTimeout(() => {
            HandlePlaySound(Sounds.lose);
          }, tim);
          setcompScr(compScr + 1);
          setResult("LOSE !");
          setresgif(loss);
        } else if (rndSel == 2) {
          setTimeout(() => {
            HandlePlaySound(Sounds.win);
          }, tim);
          setplyScr(plyScr + 1);
          setResult("WIN !");
          setresgif(win);
        } else {
          setTimeout(() => {
            HandlePlaySound(Sounds.draw);
          }, tim);
          setResult("Draw !");
          setresgif(draw);
        }
      }
      setTimeout(() => {
        setShowresult(true);
      }, 800);
      setTimeout(() => {
        setcomp(empty);
        setplayer(empty);
        setShowresult(false);
        setbutAct(false);
      }, 8000);
    } else {
      if (compScr > plyScr) {
        HandlePlaySound(Sounds.lose);
        setResult("Loser");
        setresgif(losser);
      }
      if (compScr < plyScr) {
        HandlePlaySound(Sounds.win);
        setResult("You Win");
        setresgif(winner);
      }
      if (compScr === plyScr) {
        HandlePlaySound(Sounds.draw);
        setResult("Its Draw");
        setresgif(tie);
      }
      setcompScr(0);
      setplyScr(0);
      setrndCnt(0);
      setbutAct(false);
      setagain(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TitleCont}>
        <Text style={styles.titleName}>Rock Paper Scissor</Text>
        <TouchableOpacity
          onPress={() => {
            BckToHome();
            HandlePlaySound(Sounds.click);
          }}
        >
          <Text style={styles.backBtn}>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.GameCont}>
        {Showresult ? (
          <View style={styles.ResulCont}>
            <View
              style={{
                backgroundColor: "#d3d3d3",
                padding: 10,
                marginTop: 5,
                elevation: 5,
              }}
            >
              <Text style={{ fontSize: 20 }}>{quote}</Text>
            </View>
            <Text style={styles.Resul}>{Result}</Text>
            <Image style={styles.ResulImg} source={resgif} />
          </View>
        ) : (
          <></>
        )}

        <View style={styles.GameChoiceCont}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Computer</Text>
          <View style={styles.GameSelopt}>
            <Image style={styles.plySectedImage} source={computer} />
          </View>
        </View>
        <Text style={{ fontSize: 20, color: "red", marginTop: 20 }}>Vs</Text>

        <View style={styles.GameChoiceCont}>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>You</Text>
          <View style={styles.GameSelopt}>
            <Image style={styles.plySectedImage} source={player} />
          </View>
        </View>
      </View>
      <View style={{ width: "85%" }}>
        <DataTable style={{ backgroundColor: "azure", borderRadius: 20 }}>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={styles.tableTxt}>Player's</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.tableTxt}>Win</Text>
            </DataTable.Title>
            <DataTable.Title>
              <Text style={styles.tableTxt}>Loss</Text>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Row style={{ textAlign: "center" }}>
            <DataTable.Cell textStyle={{ color: "chocolate", fontSize: 15 }}>
              {" "}
              Computer
            </DataTable.Cell>
            <DataTable.Cell
              textStyle={{
                color: "green",
                fontSize: 15,
                borderColor: "green",
                width: "100%",
              }}
            >
              {compScr}
            </DataTable.Cell>
            <DataTable.Cell textStyle={{ color: "red", fontSize: 15 }}>
              {plyScr}
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell textStyle={{ color: "chocolate", fontSize: 15 }}>
              {prop.playerName === "" ? "YOU" : prop.playerName}
            </DataTable.Cell>
            <DataTable.Cell textStyle={{ color: "green", fontSize: 15 }}>
              {plyScr}
            </DataTable.Cell>
            <DataTable.Cell textStyle={{ color: "red", fontSize: 15 }}>
              {compScr}
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>

      <Text style={styles.ply_title}>Your Choice's</Text>
      <View style={styles.playerCont}>
        <TouchableOpacity
          disabled={butAct}
          style={styles.playeropt}
          onPress={() => {
            change(1);
            HandlePlaySound(Sounds.cork);
          }}
        >
          <Image style={styles.plyImage} source={rok} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={butAct}
          style={styles.playeropt}
          onPress={() => {
            change(2);
            HandlePlaySound(Sounds.cork);
          }}
        >
          <Image style={styles.plyImage} source={pap} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={butAct}
          style={styles.playeropt}
          activeOpacity={0.9}
          onPress={() => {
            change(3);
            HandlePlaySound(Sounds.cork);
          }}
        >
          <Image style={styles.plyImage} source={sc} />
        </TouchableOpacity>
      </View>
      {again ? (
        <View style={styles.playAgnCont}>
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "#222",
              opacity: 0.8,
            }}
          ></View>
          <View style={styles.playAgnBox}>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
                marginBottom: 20,
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
                backgroundColor: "tomato",
              }}
            >
              ROUND OVER
            </Text>
            {/* <Image style={styles.tropyImg} source={wintrop} /> */}
            <Image style={styles.ResulImg} source={resgif} />
            <Text
              style={{
                marginVertical: 20,
                color: "chocolate",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {Result}
            </Text>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                title="Play Again"
                onPress={() => {
                  setagain(false);
                  HandlePlaySound(Sounds.click);
                }}
              ></Button>
              <Button
                title="Back"
                onPress={() => {
                  BckToHome();
                  HandlePlaySound(Sounds.click);
                }}
              ></Button>
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  TitleCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  backBtn: {
    backgroundColor: "tomato",
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    borderColor: "#cc5200",
    borderWidth: 2,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  titleName: {
    color: "royalblue",
    fontSize: 18,
    padding: 10,
    margin: 5,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  GameCont: {
    flexDirection: "row",
    width: "95%",
    height: "45%",
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
  },
  ResulCont: {
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "100%",
    padding: 5,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  Resul: {
    zIndex: 1,
    width: "100%",
    color: "#C3B1E1",
    fontSize: 50,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "500",
  },
  ResulImg: {
    width: 100,
    height: 100,
  },

  GameChoiceCont: {
    alignItems: "center",
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 25,
  },
  tableTxt: {
    color: "blue",
    textAlign: "center",
    fontSize: 15,
  },
  GameSelopt: {
    width: 120,
    height: 120,
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "gray",
    borderWidth: 2,
    backgroundColor: "azure",
    padding: 10,
  },
  plySectedImage: {
    width: "100%",
    height: "100%",
  },
  button: {
    margin: 5,
  },
  ply_title: {
    fontSize: 15,
    color: "red",
    marginTop: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  playerCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "smokewhite",
    borderColor: "lightgray",
    borderWidth: 5,
  },
  playeropt: {
    width: 90,
    height: 90,
    borderRadius: 40,
    overflow: "hidden",
    borderColor: "#24a0ed",

    borderWidth: 5,
    backgroundColor: "#80bfff",
    padding: 7,
  },
  plyImage: {
    width: "100%",
    height: "100%",
  },
  playAgnCont: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playAgnBox: {
    width: "90%",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 5,
    zIndex: 100,
  },
  tropyImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: 2,
    marginVertical: 20,
  },
});
