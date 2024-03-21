import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import AuthSatckNavigator from "./navigators/AuthStackNavigator";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { HomeScreen } from "./screens";
import styles from "./style";
import HomeSatckNavigator from "./navigators/HomeNavigation";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading , setIsLoading] = useState(false);

  // const onAuthStateChanged = async (user) => {
  //   await setCurrentUser(user);
  //   setIsLoading(false);
  // }

  useEffect(() => {
    onAuthStateChanged(auth , async (user) => {
      if(user){
        await setCurrentUser(user);
        console.log("hiii");
        setIsLoading(false);
      }else{
        setCurrentUser(user);
      }
    });
  },[])

  // if(isLoading){
  //   return null;
  // }

  // console.log(currentUser.email);

  return (
    <NavigationContainer style={styles.container}>
    {/* <HomeScreen /> */}
    <HomeSatckNavigator />
    {/* {currentUser ? <HomeScreen name = {currentUser.email} /> : <AuthSatckNavigator />} */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
