import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const Splash = ({setLoading}) => {

  return (
    <View style={{flex:1 , justifyContent:"center" , margin:0}}>
      <LottieView
      source={require("./Assets/splashAnimation.json")}
      autoPlay
      loop={false}
      duration={7000}
      resizeMode='cover'
      onAnimationFinish={() => setLoading(false)}
       />
    </View>
  )
}

export default Splash