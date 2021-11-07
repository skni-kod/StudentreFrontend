module.exports = {
  defaultLocale: "en",
  loadLocaleFrom: (lang, ns) =>
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
  locales: ["en", "pl"],
  logBuild: false,
  pages: {
    "*": ["common"],
  },
};