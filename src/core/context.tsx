import {createContext} from 'react';
import {Lang} from './strings';

export interface AppContextStruct {
  lang: Lang;
}

export const DefaultAppContext: AppContextStruct = {
  lang: Lang.en,
};

export const AppContext = createContext<AppContextStruct>(DefaultAppContext);
