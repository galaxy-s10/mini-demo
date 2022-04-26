import { memo, useEffect } from 'react';

import style from './index.scss';

import { useAppSelector } from '@/stores/hooks';
const Card = () => {
  const counter = useAppSelector((state) => state.counter);
  // 生命周期
  useEffect(() => {}, []);

  return (
    <div className={style.card}>
      Card组件
      <div>redux的counter：{JSON.stringify(counter)}</div>
    </div>
  );
};

export default memo(Card);
