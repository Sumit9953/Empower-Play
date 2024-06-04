import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

const Carousal = () => {
  const screenWidth = Dimensions.get("window").width;
  //   console.log(screenWidth);

  const crausalData = [
    {
      id: "01",
      image: require("./images/sliderImg2.webp"),
    },
    {
      id: "02",
      image: require("./images/sliderImg4.png"),
    },
    {
      id: "03",
      image: require("./images/sliderImg1.jpg"),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ padding: 5 }}>
        <Image
          source={item.image}
          // resizeMode="contain"
          style={{ height: 200, width: screenWidth, borderRadius: 10 }}
        />
      </View>
    );
  };
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={crausalData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled
      />
    </View>
  );
};

export default Carousal;

const styles = StyleSheet.create({});
