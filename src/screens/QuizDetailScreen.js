import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import Header from "./details-screen/Header/Header";
import { useTranslation } from "react-i18next";


const QuizDetailScreen = (props) => {
    const navigation = useNavigation();
    const item = props.route.params.item
    console.log(item);

    const { t } = useTranslation();

  return (
    <View
      style={{
        width: "100%",
        marginTop: 10,
        flexGrow: 1,
      }}
    >
      <Header item={item} />

      <Text style={{
        padding:20,
        textAlign:"justify",
        fontSize: 18,
      }}>
     {t('desc')}
      </Text>

      <View style={{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
      }}>
        <TouchableOpacity onPress={()=>navigation.navigate("Quizs" , {item:item})} style={{
            backgroundColor:"green",
            // marginTop:85,

            marginBottom:0,
            borderRadius:5,
            padding:20,
            width:"100",
            // height:"50%",
        }}>
            <Text style={{
                fontSize:20,
                textAlign:"center"
            }}>Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Hangman")} style={{
            backgroundColor:"red",
            // marginTop:85,
            marginBottom:0,
            borderRadius:5,
            padding:20,
            width:"100%",
            // height:"50%",
        }}>
            <Text style={{
                fontSize:20,
                textAlign:"center"
            }}>Puzzel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizDetailScreen;
