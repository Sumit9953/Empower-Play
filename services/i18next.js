import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import hi from "../locales/hi.json";
import pa from "../locales/pa.json";
import bh from "../locales/bh.json";
import bn from "../locales/bn.json";
import ur from "../locales/ur.json";

export const languageResources = {
  en: { translation: en },
  hi: { translation: hi },
  pa: { translation: pa },
  bn: { translation: bn },
  bh: { translation: bh },
  ur: { translation: ur },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: languageResources,
});

export default i18next;
