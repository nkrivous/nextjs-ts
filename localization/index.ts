interface ILang {
  Messages: { [key: string]: string };
  locale: string;
}

const deLang = {
  Messages: {
    "general.one": "Erfahren Sie mehr",
    "general.two": "Mehr sehen",
  },
  locale: "de",
};

const Locale: { [index: string]: ILang } = {
  de: deLang,
};

export default Locale;
