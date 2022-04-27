import React from 'react';

import { StoresContext } from './context';

// 可以使用context的方式
export const useStores = () => React.useContext(StoresContext);
// 也可以使用全局变量的方式
export { default as AppStore } from './model/app';
export { default as UserStore } from './model/user';
