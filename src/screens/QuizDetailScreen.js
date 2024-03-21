import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import Header from "./details-screen/Header/Header";


const QuizDetailScreen = (props) => {
    const navigation = useNavigation();
    const item = props.route.params.item
    console.log(item);

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        necessitatibus, omnis et magni ratione modi earum ipsa natus, enim fugit
        sint reprehenderit dolores sunt eum laborum atque facilis temporibus hic
        quaerat. Consequatur obcaecati fuga, itaque ad autem ab? Quos doloremque
        similique vel sed cumque incidunt ad, ipsum commodi. Incidunt,
        explicabo? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quam quas atque ratione suscipit maiores cum natus repellendus. Possimus
        facere sunt quibusdam sed hic suscipit recusandae, quam eum aperiam
        explicabo molestiae impedit laboriosam blanditiis dolorem. Ducimus
        magnam officiis placeat. Vel eum doloribus accusantium impedit atque,
        facere vero optio magni placeat tenetur et in assumenda iste minima!
        Praesentium impedit corrupti nobis iure provident cumque necessitatibus
        illo. Quas reprehenderit alias quia nisi debitis, ab suscipit beatae sed
        consequuntur aliquid voluptas veniam neque illo consectetur similique
        impedit pariatur qui libero incidunt aperiam nostrum animi labore iure?
        Magni a quibusdam autem reiciendis, optio harum perspiciatis.
      </Text>

      <View style={{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between"
      }}>
        <TouchableOpacity onPress={()=>navigation.navigate("Quizs")} style={{
            backgroundColor:"green",
            marginTop:85,
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
            marginTop:85,
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
