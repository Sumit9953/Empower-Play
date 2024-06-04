import { View, Text, Linking } from "react-native";
import React from "react";
import Footer from "./footer";

const Contact = () => {
  return (
    <View
      style={{
        width: "100%",
        flexGrow: 1,
        // padding: 10,
        backgroundColor: "#d3d3d3",
      }}
    >
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            textAlign: "center",
          }}
        >
          Contact
        </Text>
      </View>

      <Text style={{ padding: 20, fontSize: 20 }}>
        For More information contact...
      </Text>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#FA7070",
          margin: 20,
          elevation: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>Ph No. +91-9311551393</Text>
          <Text style={{ fontSize: 20 }}>📞</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>
            Email: delhichildrightscommission@gmail.com 📩
          </Text>
          <Text style={{ fontSize: 20 }}></Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text
            style={{ fontSize: 20 }}
            onPress={() => Linking.openURL("https://dcpcr.delhi.gov.in/")}
          >
            Website{" "}
          </Text>
          <Text style={{ fontSize: 20 }}>🌐</Text>
        </View>
      </View>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#4CCD99",
          margin: 20,
          elevation: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>Ph No. 1098</Text>
          <Text style={{ fontSize: 20 }}>📞</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>
            Email: dial1098@childlineindia.org.in 📩
          </Text>
          <Text style={{ fontSize: 20 }}></Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text
            style={{ fontSize: 20 }}
            onPress={() => Linking.openURL("https://www.childlineindia.org/")}
          >
            Website{" "}
          </Text>
          <Text style={{ fontSize: 20 }}>🌐</Text>
        </View>
      </View>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#C5FFF8",
          margin: 20,
          elevation: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>Ph No. 112</Text>
          <Text style={{ fontSize: 20 }}>📞</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>Email: info@haqcrc.org</Text>
          <Text style={{ fontSize: 20 }}>📩</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text
            style={{ fontSize: 20 }}
            onPress={() => Linking.openURL("https://www.haqcrc.org/")}
          >
            Website{" "}
          </Text>
          <Text style={{ fontSize: 20 }}>🌐</Text>
        </View>
      </View>

      <Footer />
    </View>
  );
};

export default Contact;
