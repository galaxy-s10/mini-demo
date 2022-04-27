import { observer } from 'mobx-react';
import { memo, useEffect, useState } from 'react';

import style from './index.scss';

import CardCpt from '@/components/Card';
import { useStores } from '@/stores';

const Home = () => {
  console.log('home页面渲染了');
  const [title] = useState('home页面');
  const { AppStore, UserStore } = useStores();

  useEffect(() => {
    console.log('Home生命周期');
  }, []);

  const ajaxHandle = async (id: number) => {
    try {
      const res = await UserStore.userLogin(id);
      console.log('ajaxHandle成功', res);
    } catch (error) {
      console.log('ajaxHandle失败', error);
    }
  };

  return (
    <div className={style.home}>
      <h1>{title}</h1>
      <div>mobx的app:{JSON.stringify(AppStore)}</div>
      <div>mobx的user:{JSON.stringify(UserStore)}</div>
      <button onClick={() => AppStore.setVersion(Math.random().toString())}>
        setVersion
      </button>
      <button onClick={() => ajaxHandle(1)}>模拟异步请求成功</button>
      <button onClick={() => ajaxHandle(2)}>模拟异步请求失败</button>
      <CardCpt></CardCpt>
    </div>
  );
};

export default memo(observer(Home));
