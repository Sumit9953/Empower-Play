import { View, Text, Image, FlatList , TouchableOpacity} from 'react-native'
import React, { FC } from 'react'
import styles from './style'
// import Header from './header/header'
import Icons from "react-native-vector-icons/Ionicons"
import Header from './Header/Header'
import { useNavigation } from '@react-navigation/native';
// import Animated, { SlideInLeft } from 'react-native-reanimated'

const DetailsScreen = (props) => {

    const navigation = useNavigation();
    const item = props.route.params.item
    const Data = [
        { id: 3, name: "Playing", count: 10, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/maths-class-5748771-4817936.png" },
        { id: 2, name: "Eductaions", count: 10, image_url: "https://static.vecteezy.com/system/resources/previews/009/827/726/original/back-to-school-physics-icon-3d-illustration-png.png" },
        { id: 4, name: "Leving", count: 18, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/science-6848262-5607049.png" },
        { id: 5, name: "Working", count: 10, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/maths-class-5748771-4817936.png" },
        { id: 1, name: "Health", count: 10, image_url: "https://static.vecteezy.com/system/resources/previews/009/827/726/original/back-to-school-physics-icon-3d-illustration-png.png" },
        { id: 8, name: "Others", count: 18, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/science-6848262-5607049.png" },
    ]

    const renderItem = ( item, index ) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate("QuizDetailScreen" ,{item:item})} >
                <View style={styles.box} sharedTransitionTag="sharedTag">
                    {/* <AniImage source={{ uri: item?.image_url }} style={styles.icon} entering={BounceIn.delay(100 * index + 1).duration(1000)} /> */}
                    <View style={styles.description}>
                        <Text style={styles.name}>{item?.name}</Text>
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
        <Header item={item} />
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

export default DetailsScreen