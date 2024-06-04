import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";
import Icons from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "95%",
        height: "8%",
        position: "absolute",
        marginLeft: 10,
        bottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 10,
          justifyContent: "space-between",
          padding: 10,
          width: "100%",
          height: "100%",
          backgroundColor: "#31363F",
          elevation: 5,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              width: 50,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icons
              onPress={() => navigation.navigate("HomeScreen")}
              name="home-outline"
              size={30}
              color="white"
            />
            <Text style={{ color: "white" }}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              width: 50,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icons
              onPress={() => navigation.navigate("YouTube")}
              name="videocam-outline"
              size={30}
              color="white"
            />
            <Text style={{ color: "white" }}>Video</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: 50,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icons
            onPress={() => navigation.navigate("Contact")}
            name="call-outline"
            size={30}
            color="white"
          />
          <Text style={{ color: "white" }}>Contact</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
