import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import React from "react";
import Footer from "./footer";
import { getAuth, signOut } from "firebase/auth";

const ProfileScreen = () => {
  const auth = getAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("logout completed");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        width: "100%",
        flexGrow: 1,
        // padding: 10,
        backgroundColor: "#d3d3d3",
      }}
    >
      <View style={{ padding: 20, marginTop: 50, alignItems: "center" }}>
        <Image
          source={{
            uri: "https://st.depositphotos.com/1008402/58769/i/450/depositphotos_587692484-stock-illustration-illustration-smiling-woman-cartoon-close.jpg",
          }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />

        <TouchableOpacity
          onPress={() => logout()}
          style={{ marginTop: 20, backgroundColor: "blue", padding: 10 }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
};

export default ProfileScreen;
