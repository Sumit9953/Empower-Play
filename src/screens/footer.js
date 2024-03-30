import { View, Text } from 'react-native'
import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const Footer = () => {

  const navigation = useNavigation()

  return (
    <View style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:10,
        width:"100%",
        height:"8%",
        bottom:0,
        position:"absolute",
        backgroundColor:"#31363F"
    }}>
      <Icon onPress={()=>navigation.navigate("HomeScreen")} name="home" size={30} color="white" />
      <Icon onPress={()=>navigation.navigate("YouTube")} name="play" size={30} color="white" />
      <Icon onPress={()=>navigation.navigate("Contact")} name="address-book" size={30} color="white" />
    </View>
  )
}

export default Footer