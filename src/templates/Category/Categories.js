import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const Data = [
    { id: 3, name: "male", count: 10, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/maths-class-5748771-4817936.png" },
    { id: 2, name: "female", count: 10, image_url: "https://static.vecteezy.com/system/resources/previews/009/827/726/original/back-to-school-physics-icon-3d-illustration-png.png" },
    { id: 4, name: "other", count: 18, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/science-6848262-5607049.png" },
]


const Categories = () => {

    // Data.map((e) => {
    //     console.log(e);
    // })

    const { t } = useTranslation();

    const navigation = useNavigation()

    const renderItem = ( item, index ) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate("DetailsScreen" ,{item:item})} >
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
            <Text style={styles.title}>Let's Play</Text>
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