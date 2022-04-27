import { memo, useEffect, useState } from 'react';

import style from './index.scss';

import CardCpt from '@/components/Card';
import { myContext, defaultVal } from '@/stores/myContext';

const Home = () => {
  useEffect(() => {
    console.log('test生命周期');
  }, []);
  const [initVal, setInitVal] = useState(defaultVal);

  const handleClick = () => {
    setInitVal({ num: Math.random(), theme: '222' }); //会触发里面的组件更新
    console.log('修改myContext', initVal);
  };

  return (
    <div className={style.test}>
      <h1>test页面</h1>
      <button onClick={() => handleClick()}>修改myContext</button>
      <myContext.Provider value={initVal}>
        <CardCpt></CardCpt>
      </myContext.Provider>
    </div>
  );
};

export default memo(Home);
