import { makeAutoObservable } from 'mobx';

import { mockAjax } from '@/utils';

interface IUser {
  id?: number;
  name?: string;
  age?: number;
  token?: string;
}

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  token: IUser['token'] = undefined;
  id: IUser['id'] = -1;
  name: IUser['name'] = undefined;
  age: IUser['age'] = undefined;

  userLogin = async (id: IUser['id']) => {
    console.log('触发了userLogin', id);
    const res = await mockAjax(id === 1);
    // this.id = res.data?.id; //Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed
    // runInAction(() => {
    //   // 这样可以修改
    //   this.id = res.data?.id;
    // });
    // 或者在同步的方法里面修改
    this.setUserInfo(res.data!);
    return res;
  };

  setUserInfo = (data: IUser) => {
    this.id = data.id;
    this.name = data.name;
    this.token = data.token;
  };
}

export default new UserStore();
