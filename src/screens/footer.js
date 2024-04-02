import { View, Text , TouchableOpacity } from 'react-native'
import * as React from 'react'
import Icons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';


const Footer = () => {

  const navigation = useNavigation()

  return (
    <View style={{
      width:"100%",
      height:"8%",
      position:"absolute",
      bottom:0
    }}>
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:10,
        width:"100%",
        height:"100%",
        backgroundColor:"#31363F"
    }}>
      <TouchableOpacity>
      <View style={{
        width:50,
        height:"100%",
        justifyContent:"center",
      }}>
        <Icons onPress={()=>navigation.navigate("HomeScreen")} name="home-outline" size={35} color="white" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icons onPress={()=>navigation.navigate("YouTube")} name="videocam-outline" size={35} color="white" />
      </TouchableOpacity>
      <Icons onPress={()=>navigation.navigate("Contact")} name="call-outline" size={30} color="white" />
    </View>
    </View>
  )
}

export default Footer