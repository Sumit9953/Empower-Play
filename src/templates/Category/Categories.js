import { View, Text, TouchableOpacity, Image , Modal} from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import i18next, { languageResources } from "../../../services/i18next";
import  languagesList  from "../../../services/languagesList.json";
import translatePng from "../../../assets/translate.png"

const Data = [
    { id: 3, name: "Male", count: 10, image_url: "https://i.pinimg.com/originals/28/3e/b6/283eb67ffaecdb77b98fbd828d1e6b45.jpg" },
    { id: 2, name: "Female", count: 10, image_url: "https://www.laughingplace.com/w/wp-content/uploads/2022/04/fun-facts-about-disneys-minnie-mouse.jpg" },
    { id: 4, name: "Others", count: 18, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/science-6848262-5607049.png" },
]


const Categories = () => {

    const [visible, setVisible] = useState(false);
    // const { t } = useTranslation();
  
    const changeLng = (lng) => {
      i18next.changeLanguage(lng);
      setVisible(false);
    };
    // Data.map((e) => {
    //     console.log(e);
    // })

    const { t } = useTranslation();

    const navigation = useNavigation()

    const renderItem = ( item, index ) => {
        return (
            <TouchableOpacity key={index} onPress={()=>navigation.navigate("DetailsScreen" ,{item:item})} >
                <View style={styles.box} sharedTransitionTag="sharedTag">
                    {/* <AniImage source={{ uri: item?.image_url }} style={styles.icon} entering={BounceIn.delay(100 * index + 1).duration(1000)} /> */}
                    <View style={styles.description}>
                        <Text style={styles.name}>{t(item?.name)}</Text>
                        <Text style={styles.count}>{item?.count} Questions</Text>
                    </View>
                    <Image source={{uri: item?.image_url}} style={{
                        width:100,
                        height:100
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
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        {/* <Text style={styles.buttonText}>{t('change-language')}</Text> */}
        <Image source={translatePng} style={{
            width:30,
            height:30,
            // margin:30
        }} />
      </TouchableOpacity>
        <Modal visible={visible} onRequestClose={() => setVisible(false)}>
          <View style={styles.languagesList}>
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