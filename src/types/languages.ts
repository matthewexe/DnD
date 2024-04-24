import {LanguageCode as Codes} from 'react-native-translator';

export type Language =
  | 'Afrikaans'
  | 'Albanian'
  | 'Arabic'
  | 'Azerbaijani'
  | 'Basque'
  | 'Belarusian'
  | 'Bengali'
  | 'Bulgarian'
  | 'Catalan'
  | 'Chinese Simplified'
  | 'Chinese Traditional'
  | 'Croatian'
  | 'Czech'
  | 'Danish'
  | 'Dutch'
  | 'English'
  | 'Esperanto'
  | 'Estonian'
  | 'Filipino'
  | 'Finnish'
  | 'French'
  | 'Galician'
  | 'Georgian'
  | 'German'
  | 'Greek'
  | 'Gujarati'
  | 'Haitian'
  | 'Hebrew'
  | 'Hindi'
  | 'Hungarian'
  | 'Icelandic'
  | 'Indonesian'
  | 'Irish'
  | 'Italian'
  | 'Japanese'
  | 'Kannada'
  | 'Korean'
  | 'Latin'
  | 'Latvian'
  | 'Lithuanian'
  | 'Macedonian'
  | 'Malay'
  | 'Maltese'
  | 'Norwegian'
  | 'Persian'
  | 'Polish'
  | 'Portuguese'
  | 'Romanian'
  | 'Russian'
  | 'Serbian'
  | 'Slovak'
  | 'Slovenian'
  | 'Spanish'
  | 'Swahili'
  | 'Swedish'
  | 'Tamil'
  | 'Telugu'
  | 'Thai'
  | 'Turkish'
  | 'Ukrainian'
  | 'Urdu'
  | 'Vietnamese'
  | 'Welsh'
  | 'Yiddish';

export type LanguageCode = Codes<'google'>;

const languages: Record<LanguageCode, Language> = Object.freeze({
  af: 'Afrikaans',
  ga: 'Irish',
  sq: 'Albanian',
  it: 'Italian',
  ar: 'Arabic',
  ja: 'Japanese',
  az: 'Azerbaijani',
  kn: 'Kannada',
  eu: 'Basque',
  ko: 'Korean',
  bn: 'Bengali',
  la: 'Latin',
  be: 'Belarusian',
  lv: 'Latvian',
  bg: 'Bulgarian',
  lt: 'Lithuanian',
  ca: 'Catalan',
  mk: 'Macedonian',
  'zh-CN': 'Chinese Simplified',
  ms: 'Malay',
  'zh-TW': 'Chinese Traditional',
  mt: 'Maltese',
  hr: 'Croatian',
  no: 'Norwegian',
  cs: 'Czech',
  fa: 'Persian',
  da: 'Danish',
  pl: 'Polish',
  nl: 'Dutch',
  pt: 'Portuguese',
  en: 'English',
  ro: 'Romanian',
  eo: 'Esperanto',
  ru: 'Russian',
  et: 'Estonian',
  sr: 'Serbian',
  tl: 'Filipino',
  sk: 'Slovak',
  fi: 'Finnish',
  sl: 'Slovenian',
  fr: 'French',
  es: 'Spanish',
  gl: 'Galician',
  sw: 'Swahili',
  ka: 'Georgian',
  sv: 'Swedish',
  de: 'German',
  ta: 'Tamil',
  el: 'Greek',
  te: 'Telugu',
  gu: 'Gujarati',
  th: 'Thai',
  ht: 'Haitian',
  tr: 'Turkish',
  iw: 'Hebrew',
  uk: 'Ukrainian',
  hi: 'Hindi',
  ur: 'Urdu',
  hu: 'Hungarian',
  vi: 'Vietnamese',
  is: 'Icelandic',
  cy: 'Welsh',
  id: 'Indonesian',
  yi: 'Yiddish',
});

export function getLanguage(languageCode: LanguageCode): Language {
  return languages[languageCode];
}

export function getLanguages() {
  return Object.entries(languages);
}
