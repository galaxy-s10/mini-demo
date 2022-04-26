import { memo, useEffect } from 'react';

import style from './index.scss';
const Home = () => {
  useEffect(() => {
    console.log('Login生命周期');
  }, []);

  return (
    <div className={style.login}>
      <h1>login页面</h1>
    </div>
  );
};

export default memo(Home);
