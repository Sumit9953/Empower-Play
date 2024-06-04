import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import React, { useState } from "react";
import styles from "./style";

import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import i18next, { languageResources } from "../../../services/i18next";
import languagesList from "../../../services/languagesList.json";
import translatePng from "../../../assets/translate.png";

import boyImg from "./Assets/boy.png";
import girlImg from "./Assets/girl.png";
import boygirl from "./Assets/boygirl.png";
import Feedback from "./Assets/feedback.png"
import Boys from "./Assets/Boys.png"
import Girls from "./Assets/Girls.png"
import BoyandGirl from "./Assets/boyAndGirl.png"

const Data = [
  { id: 3, name: "Male", count: 10, image: Boys },
  { id: 2, name: "Female", count: 10, image: Girls },
  { id: 1, name: "Others", count: 10, image: BoyandGirl },
  // { id: 4, name: "Others", count: 18, image_url: "https://cdn3d.iconscout.com/3d/premium/thumb/science-6848262-5607049.png" },
];

const Categories = () => {
  const [visible, setVisible] = useState(false);

  const changeLng = (lng) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  const { t } = useTranslation();

  const navigation = useNavigation();

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate("DetailsScreen", { item: item })}
      >
        <View style={styles.box} sharedTransitionTag="sharedTag">
          <View style={styles.description}>
            <Text style={styles.name}>{t(item?.name)}</Text>
          </View>
          <Image
            source={item.image}
            style={{
              width: 200,
              height: 120,
            }}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rights about</Text>

        <View style={styles.textbox}>
          <TouchableOpacity style={{backgroundColor:"#fff" , elevation:10}} onPress={() => setVisible(true)}>
            {/* <Text style={styles.buttonText}>{t('change-language')}</Text> */}
            <Image
              source={translatePng}
              style={{
                width: 30,
                height: 30,
                // margin:30
              }}
            />
          </TouchableOpacity>

          <Modal
            style={{ flex: 1, backgroundColor: "blue" }}
            visible={visible}
            onRequestClose={() => setVisible(false)}
          >
            <View style={styles.languagesList}>
              <View
                style={{
                  marginTop: 50,
                  backgroundColor: "white",
                  padding: 20,
                  alignItems: "center",
                  borderRadius: 20,
                  // height: 500,
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    marginBottom: 20,
                  }}
                >
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
            </View>
          </Modal>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          paddingRight: 10,
          paddingLeft: 10,
          // backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        {Data.map((item) => {
          return renderItem(item, item.id);
        })}
      </View>
      <View
        style={{
          // backgroundColor: "blue",
          width: "15%",
          height: "10%",
          // borderRadius: "50%",
          position: "absolute",
          bottom: 100,
          right: 10,
          alignItems:"center",
          justifyContent:"center",
        }}
      >
        <TouchableOpacity
        style={{backgroundColor:"#d3d3d3" , elevation:10 , borderRadius:50 , justifyContent:"center",alignItems:"center"}}
          onPress={() => navigation.navigate("FeedbackForm")}
        >
          <Image
            source={Feedback}
            resizeMode="contain"
            style={{width:60 , height:60}}
           />
          {/* <Icons name={"game-controller-outline"} size={34} color={"black"} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;
