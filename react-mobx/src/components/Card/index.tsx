import { observer } from 'mobx-react';
import { memo, useEffect } from 'react';

import style from './index.scss';

import BabyCpt from '@/components/Baby';
import { AppStore, UserStore } from '@/stores';

const Card = () => {
  // 生命周期
  useEffect(() => {
    console.log('Card组件的生命周期');
  }, []);
  console.log('Card组件渲染了');

  return (
    <div className={style.card}>
      Card组件
      <div>mobx的app：{JSON.stringify(AppStore)}</div>
      <div>mobx的user：{JSON.stringify(UserStore)}</div>
      <BabyCpt></BabyCpt>
    </div>
  );
};

export default memo(observer(Card));
