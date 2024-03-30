import { View, Text, StyleSheet, Button, Alert } from "react-native";
import React, { useState, useCallback, useRef, useEffect } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { getYoutubeMeta } from "react-native-youtube-iframe";

const YouTubePlayerItem = ({ videoId }) => {
  const [playing, setPlaying] = useState(false);
  const [title, setTitle] = useState([]);

  let updatedValue = {"item1":"juice"};

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

    //  console.log(title);
 

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={250}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
      <Button
        color={playing ? "red" : "blue"}
        title={playing ? "pause" : "play"}
        onPress={togglePlaying}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    // backgroundColor:"red",
    alignItems: "stretch",
    // justifyContent:"center",
    gap: 10,
  },
  btn: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "red",
  },
});

export default YouTubePlayerItem;
