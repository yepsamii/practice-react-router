import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Ensure this import is working

import translationEN from "./locales/en/translation.json";
import translationBN from "./locales/bn/translation.json"; // Bengali translations

const resources = {
  en: {
    translation: translationEN,
  },
  bn: {
    translation: translationBN,
  },
};

i18n
  .use(LanguageDetector) // Use the language detector
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Default language if the user's language isn't available
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
  });

export default i18n;
