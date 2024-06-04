import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import styles from './style'
import Icons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import * as Animatable from "react-native-animatable";


const Header = ({item}) => {

  const {t} = useTranslation()

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Icons name={"chevron-back-outline"} size={24} color={"black"}/>
      </TouchableOpacity>
      <View style={styles.titleBox}>
        {/* <Text style={styles.title}>{t(item?.name)}</Text> */}
        <Animatable.Text
          animation="fadeInLeft"
          easing="ease-in-out"
          duration={3000}
          style={{ fontSize: 20 , fontWeight:900 }}
          // iterationCount="infinite"
          >
          {t(item?.name)}
        </Animatable.Text>
        {/* <Text style={styles.description}>{item?.count} Questions</Text> */}
      </View>
      <Image source={item?.image !== null ? item?.image : item?.image_url } style={styles.avatar}/>
    </View>
  )
}

export default Header