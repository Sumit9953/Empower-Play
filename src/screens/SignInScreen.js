import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import FormButton from "../components/shared/FormButton";
import FormInput from "../components/shared/FormInput";
import { COLORS } from "../constants/theme";
import { SignIn } from "../utils/auth";
import WelcomeAimation from "./WlcomeAimation";
import SocialButton from "../components/SocialButton";

// import {
//   GoogleSignin,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";

// GoogleSignin.configure({
//   webClientId:
//     "212302837406-i03fqah9b1aebhqro73njsscqv4qvmdr.apps.googleusercontent.com", // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
// });

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const auth = getAuth();
  // const signIn = async () => {};

  const handleOnSubmit = () => {
    if (email != "" && password != "") {
      SignIn(email, password);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
      }}
    >
      {/* Header */}
      <View
        style={{
          width: "100%",
          height: "35%",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        <WelcomeAimation />
      </View>

      <View
        style={{
          // backgroundColor: "red",
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
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
          Sign In
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

        {/* Submit button */}
        <FormButton
          labelText="Submit"
          handleOnPress={handleOnSubmit}
          style={{ width: "100%" }}
        />

        {/* Footer */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Text>Don't have an account?</Text>
          <Text
            style={{ marginLeft: 4, color: COLORS.primary }}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            Create account
          </Text>
        </View>

        {/* <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            // onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
