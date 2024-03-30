import { View, Text, TouchableOpacity, Image , Modal} from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import i18next, { languageResources } from "../../../services/i18next";
import  languagesList  from "../../../services/languagesList.json";
import translatePng from "../../../assets/translate.png"

import boyImg from "./Assets/boy.png"
import girlImg from "./Assets/girl.png"
import boygirl from "./Assets/boygirl.png"

const Data = [
    { id: 3, name: "Male", count: 10, image: boyImg },
    { id: 2, name: "Female", count: 10, image: girlImg },
    { id: 1, name: "Others", count: 10, image: boygirl },
    // { id: 4, name: "Others", count: 18, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/science-6848262-5607049.png" },
]


const Categories = () => {

    const [visible, setVisible] = useState(false);
  
    const changeLng = (lng) => {
      i18next.changeLanguage(lng);
      setVisible(false);
    };
  

    const { t } = useTranslation();

    const navigation = useNavigation()

    const renderItem = ( item, index ) => {
        return (
            <TouchableOpacity key={index} onPress={()=>navigation.navigate("DetailsScreen" ,{item:item})} >
                <View style={styles.box} sharedTransitionTag="sharedTag">
                    {/* <AniImage source={{ uri: item?.image_url }} style={styles.icon} entering={BounceIn.delay(100 * index + 1).duration(1000)} /> */}
                    <View style={styles.description}>
                        <Text style={styles.name}>{t(item?.name)}</Text>
                        {/* <Text style={styles.count}>{item?.count} Questions</Text> */}
                    </View>
                    <Image source={item.image} style={{
                        width:100,
                        height:120,
                    }} />
                </View>
            </TouchableOpacity>
    
        )
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <Text style={styles.title}>Rights about</Text>

            <View style={styles.textbox}>
      <TouchableOpacity style={{}} onPress={() => setVisible(true)}>
        {/* <Text style={styles.buttonText}>{t('change-language')}</Text> */}
        <Image source={translatePng} style={{
            width:30,
            height:30,
            // margin:30
        }} />
      </TouchableOpacity>
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        
          <View style={styles.languagesList}>
         
          <Text style={{
            textAlign:"center",
            color:"white",
            fontSize:20
          }}>
          Choose Language
          </Text>

            {Object.keys(languageResources).map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.languageButton}
                onPress={() => changeLng(item)}
              >
                <Text style={styles.lngName}>
                  {languagesList[item].nativeName}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>
      </View>

      </View>

      <View style={{
            flex:1,
            flexDirection:"row",
            flexWrap:"wrap",
            padding:10
        }}>

     {
        Data.map((item) => {
           return (
               renderItem(item , item.id)
            )
        })
     }

     </View>

    </View>
  )
}

export default Categories