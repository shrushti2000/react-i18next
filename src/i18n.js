import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEng from "./locales/en/translation.json";
import translationMar from "./locales/mar/translation.json";
import translationHin from "./locales/hin/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translations: translationEng
      },
      mar: {
        translations: translationMar
      },
      hin: {
        translations:translationHin
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
