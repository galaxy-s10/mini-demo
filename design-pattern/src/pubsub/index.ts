// 中间人，不关系订阅和发布的人是谁，只关心订阅了什么东西
let Channel = {
  // 主题
  subject: {},
  // 订阅
  subscribe(good, cb) {
    if (!this.subject[good]) {
      this.subject[good] = [];
    }
    console.log(`Channel收到有人订阅了${good}`);
    this.subject[good].push(cb);
  },
  // 发布
  publish(good) {
    if (!this.subject[good]) {
      console.log(`没人在Channel订阅过${good}，不发布通知`);
      return;
    }
    console.log(`Channel给所有订阅了${good}的人发送通知`);
    for (let i = 0; i < this.subject[good].length; i++) {
      this.subject[good][i]();
    }
  },
};

// 发布/订阅者
class Observer {
  name;
  constructor(name) {
    this.name = name;
  }
  subscribe(good, cb) {
    Channel.subscribe(good, cb);
  }
  publish(good) {
    Channel.publish(good);
  }
}

let tom = new Observer('tom');
let lili = new Observer('lili');
let boss = new Observer('boss');

tom.subscribe('apple', function () {
  console.log(`我是tom，我订了一台苹果12，有货麻烦通知我！`);
});
tom.subscribe('xiaomi', function () {
  console.log(`我是tom，我订了一台小米11，有货麻烦通知我！`);
});

lili.subscribe('apple', function () {
  console.log(`我是lili，我订了一台苹果13，有货麻烦通知我！`);
});

boss.publish('apple');
boss.publish('huawei');
