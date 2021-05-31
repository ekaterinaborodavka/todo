import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation from "./locales/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
});
