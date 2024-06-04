import {
  View,
  TouchableOpacit,
  Modal,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

import i18next, { languageResources } from "../../../services/i18next";
import languagesList from "../../../services/languagesList";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const navigation = useNavigation();

  // const changeLng = (lng) => {
  //   i18next.changeLanguage(lng);
  //   setVisible(false);
  // };

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>{t("welcome")}</Text>
        <Text style={styles.description}>Let's make this day productive</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image
          source={{
            uri: "https://st.depositphotos.com/1008402/58769/i/450/depositphotos_587692484-stock-illustration-illustration-smiling-woman-cartoon-close.jpg",
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  );
};

export default Header;
