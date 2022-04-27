import { createContext } from 'react';

export const defaultVal = {
  num: 1,
  theme: 'dark',
};

// 集中store管理
export const myContext = createContext(defaultVal);
