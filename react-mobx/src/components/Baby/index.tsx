import { observer } from 'mobx-react';
import { memo, useEffect, useContext, useState } from 'react';

import style from './index.scss';

import { useStores } from '@/stores';
import { myContext } from '@/stores/myContext';

const Baby = () => {
  const [title, setTitle] = useState('Baby组件标题');
  const { UserStore, AppStore } = useStores();
  const myCtx = useContext(myContext);
  console.log('Baby组件渲染了', UserStore, AppStore, myCtx);

  // 生命周期
  useEffect(() => {
    console.log('Baby组件的生命周期');
  }, []);

  const handleClick = () => {
    setTitle(Math.random().toString());
    console.log(myCtx);
  };

  return (
    <div className={style.baby}>
      <div>Baby组件</div>
      <h3>{title}</h3>
      <button onClick={() => handleClick()}>修改标题</button>
      <div>mobx的app：{JSON.stringify(AppStore)}</div>
      <div>mobx的user：{JSON.stringify(UserStore)}</div>
      <div>myContext：{JSON.stringify(myCtx)}</div>
    </div>
  );
};

export default memo(observer(Baby));
