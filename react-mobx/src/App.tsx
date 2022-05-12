import { memo, useState } from 'react';

import useLocalStorageState from '@/hooks/useLocalStorageState';
import useUpdate from '@/hooks/useUpdate';

const App = () => {
  console.log('App渲染了');
  let count = 1;

  const addCount = () => {
    count += 100;
    console.log(count);
  };

  // const [, setRender] = useState({});
  // const forceUpdate = () => {
  //   setRender({});
  // };

  const forceUpdate = useUpdate();

  const [myToken, setMyToken] = useLocalStorageState('token', '1ss');

  // const [arr, setArr] = useLocalStorageState('arr-key', [2, '3', '4']);
  // console.log(myToken, setMyToken, 1111);
  return (
    <div>
      <div>count:{count}</div>
      <div>myToken:{myToken}</div>
      {/* <div>arr:{arr}</div> */}
      <div>
        <input
          value={myToken}
          onChange={(e) => {
            console.log(typeof e.target.value, 3333);
            setMyToken(e.target.value);
          }}
        />
        <button onClick={() => setMyToken(undefined)}>清除token</button>
        <button onClick={() => addCount()}>+1</button>
        <button onClick={() => forceUpdate()}>forceUpdate</button>
      </div>
    </div>
  );
};

export default memo(App);
