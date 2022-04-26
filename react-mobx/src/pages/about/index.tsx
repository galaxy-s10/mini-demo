import React, { memo, useEffect } from 'react';

import style from './index.scss';

import authorJpg from '@/assets/img/author.jpg';

const Home = () => {
  useEffect(() => {
    console.log('About生命周期');
  }, []);

  const customStyle: React.CSSProperties = {
    display: 'block',
    width: '100px',
    textAlign: 'center',
  };

  return (
    <div className={style.about}>
      <h1>about页面</h1>
      <div className={style.myfont}>MIUI 13 采用全新系统字体 MiSans</div>
      <img src={authorJpg} style={customStyle} alt="" />
    </div>
  );
};

export default memo(Home);
