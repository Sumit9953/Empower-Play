import { View, Text } from 'react-native'
import React from 'react'
import Footer from './footer'

const Contact = () => {
  return (
    <View
    style={{
        width: "100%",
        flexGrow: 1,
        // backgroundColor:"red"
      }}
    >
        <View style={{
            marginTop:20,
        }}>
            <Text style={{
                fontSize:20,
                padding:10,
                textAlign:"center"
            }}>Contact</Text>
        </View>

        <Text style={{padding:20 , fontSize:20}}>For More information contact...</Text>

        <View style={{
          padding:20,
          backgroundColor:"#C5FFF8"
        }}>
          <Text style={{fontSize:20}}>Ph No. 123456789</Text>
          <Text style={{fontSize:20}}>Email: abc@gmai.com</Text>
          <Text style={{fontSize:20}}>others</Text>
        </View>

        <View style={{
          padding:20,
          backgroundColor:"#C5FFF8",
          marginTop:20
        }}>
          <Text style={{fontSize:20}}>Ph No. 123456789</Text>
          <Text style={{fontSize:20}}>Email: abc@gmai.com</Text>
          <Text style={{fontSize:20}}>others</Text>
        </View>

        <View style={{
          padding:20,
          backgroundColor:"#C5FFF8",
          marginTop:20
        }}>
          <Text style={{fontSize:20}}>Ph No. 123456789</Text>
          <Text style={{fontSize:20}}>Email: abc@gmai.com</Text>
          <Text style={{fontSize:20}}>others</Text>
        </View>

        <Footer />
    </View>
  )
}

export default Contact