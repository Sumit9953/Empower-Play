import React, { useState } from "react";
import { View, Text, SafeAreaView, Alert } from "react-native";
import FormButton from "../components/shared/FormButton";
import FormInput from "../components/shared/FormInput";
import { COLORS } from "../constants/theme";
// import { auth } from '../../firebase';

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";
import { SignUp } from "../utils/auth";
import WelcomeAimation from "./WlcomeAimation";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnSubmit = async () => {
    if (email != "" && password != "" && confirmPassword != "") {
      if (password == confirmPassword) {
        //   SignUp
        SignUp(email, password);
        // await createUserWithEmailAndPassword(auth ,email, password)
        // .then(userCredential => {
        //   const user = userCredential.user;
        //   console.log(user.email);
        // })
      } else {
        Alert.alert("password did not match");
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      {/* Header */}

      <View
        style={{
          width: "100%",
          height: "40%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WelcomeAimation />
      </View>

      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
          // marginBottom:0,
        }}
      >
        <Text
          style={{
            fontSize: 34,
            color: COLORS.black,
            fontWeight: "bold",
            // marginVertical: 32,
          }}
        >
          Sign Up
        </Text>

        {/* Email */}
        <FormInput
          labelText="Email"
          placeholderText="enter your email"
          onChangeText={(value) => setEmail(value)}
          value={email}
          keyboardType={"email-address"}
        />

        {/* Password */}
        <FormInput
          labelText="Password"
          placeholderText="enter your password"
          onChangeText={(value) => setPassword(value)}
          value={password}
          secureTextEntry={true}
        />

        {/* Confirm Password */}
        <FormInput
          labelText="Confirm Password"
          placeholderText="enter your password again"
          onChangeText={(value) => setConfirmPassword(value)}
          value={confirmPassword}
          secureTextEntry={true}
        />

        {/* Submit button */}
        <FormButton
          labelText="Sign up"
          handleOnPress={handleOnSubmit}
          style={{ width: "100%" }}
        />

        {/* Footer */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text>Already have an account?</Text>
          <Text
            style={{ marginLeft: 4, color: COLORS.primary }}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            Sign in
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
