import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AuthSatckNavigator from "./navigators/AuthStackNavigator";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { HomeScreen, LanguageScree } from "./screens";
import styles from "./style";
import HomeSatckNavigator from "./navigators/HomeNavigation";
import Splash from "./screens/splash";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading , setIsLoading] = useState(false);
  const [loading,setLoading] = useState(true);

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
    loading ? <Splash setLoading={setLoading} /> :
    <NavigationContainer style={styles.container}>
    {/* <HomeScreen /> */}
    <HomeSatckNavigator />
    {/* {currentUser ? <HomeSatckNavigator /> : <AuthSatckNavigator />} */}
    </NavigationContainer>
  );
}


