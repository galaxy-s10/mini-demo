import { createContext } from 'react';

import AppStore from './model/app';
import UserStore from './model/user';

// 集中store管理
export const StoresContext = createContext({
  AppStore,
  UserStore,
});
