import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
// import Cache from 'i18next-localstorage-cache';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(XHR)
  // .use(Cache)
  .use(LanguageDetector)
  .init({
    whitelist: ['en-gb', 'zh-tw'],
    load: 'currentOnly',
    lowerCaseLng: true,

    // have a common namespace used around the full app
    ns: ['app'],
    defaultNS: 'app',

    debug: false,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format: function(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    }
  });

module.exports = i18n;
