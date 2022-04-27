import { makeAutoObservable } from 'mobx';

interface IApp {
  version: string;
}
// configure({
//   useProxies: 'never',
// });

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }
  version: IApp['version'] = '1.0.0';
  hobby: number[] = [1, 2, 3];

  //不能使用普通函数，会拿不到this，得使用箭头函数
  setVersion = (val: IApp['version']) => {
    console.log('触发了setVersion');
    this.version = val;
  };
}

export default new AppStore();
