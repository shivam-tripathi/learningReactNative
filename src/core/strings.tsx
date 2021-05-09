import _ from 'lodash';

export const stringsStore = {
  CRM: 'Customer Relationship Management',
  description: 'All in one campaign manager',
};

export let strings: _.Dictionary<string>;

export enum Lang {
  'en' = 'en',
  'hn' = 'hn',
}

interface StringMap {
  [id: string]: string;
}

type LangStringMap = {
  [_ in Lang]: StringMap;
};

export let langStringMap: LangStringMap;

export function setUp() {
  strings = _.mapKeys(_.keys(stringsStore));
  langStringMap = {
    en: stringsStore,
    hn: {},
  };
}

export function getString(id: string, lang: Lang) {
  if (_.isEmpty(langStringMap[lang])) {
    return langStringMap[Lang.en][id];
  }
  return langStringMap[lang][id] || 'undefined';
}
