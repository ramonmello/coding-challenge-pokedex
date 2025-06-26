import i18next, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import { LOAD_PATH, SUPPORTED_LANGUAGES } from "./config";

const options: InitOptions = {
  debug: import.meta.env.DEV,
  fallbackLng: "en",
  supportedLngs: SUPPORTED_LANGUAGES,
  backend: {
    loadPath: LOAD_PATH,
  },
};

export default i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init(options);
