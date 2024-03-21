import React, { useState } from 'react'
import { View , Text , SafeAreaView, TouchableOpacity, Modal} from 'react-native'
import { logout } from '../utils/auth'
import {COLORS} from '../constants/theme';
import Header from '../templates/HomeHeader/Header';
import Categories from '../templates/Category/Categories';
import styles from './style';

import i18next, { languageResources } from "../../services/i18next";
import  languagesList  from "../../services/languagesList.json";
import { useTranslation } from "react-i18next";

const HomeScreen = ({name}) => {

  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  const changeLng = (lng) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textbox}>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.buttonText}>{t('change-language')}</Text>
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
    <Header />
    <Categories />
    </View>
  )
}



export default HomeScreen