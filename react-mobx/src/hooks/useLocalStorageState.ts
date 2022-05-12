import { useState, useEffect } from 'react';

const useLocalStorageState = (key, initValue) => {
  const [state, setState] = useState({ key, value: initValue });

  const setLocalStorageValue = (val) => {
    try {
      if (val !== undefined) {
        window.localStorage.setItem(key, JSON.stringify(val));
        setState({ key, value: val });
        return;
      }
      window.localStorage.removeItem(key);
      setState({ key, value: initValue });
    } catch (error) {
      console.log(error);
    }
  };

  const getLocalStorageValue = () => {
    const cache = window.localStorage.getItem(key);
    return cache;
  };

  useEffect(() => {
    const cache = getLocalStorageValue();
    if (cache === null) {
      setLocalStorageValue(initValue);
    } else {
      window.localStorage.setItem(key, cache);
      setState({ key, value: JSON.parse(cache) });
    }
  }, []);

  const parse = () => {
    try {
      return state.value;
    } catch (error) {
      console.log(error);
    }
    return initValue;
  };

  // 这个parse是最简单的容错处理，虽然不太优雅
  return [parse(), setLocalStorageValue];
};

export default useLocalStorageState;
