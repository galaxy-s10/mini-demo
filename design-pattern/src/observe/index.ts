// 主题
const subject = {};

// 观察者
class Observer {
  name;
  constructor(name) {
    this.name = name;
  }
  // 订阅
  subscribe(good, cb) {
    console.log(`${this.name}订阅了${good}`);
    if (!subject[good]) {
      subject[good] = [];
    }
    subject[good].push(cb);
  }
  // 发布
  publish(good) {
    if (!subject[good]) {
      console.log(`没人订阅过${good}，不发布通知`);
      return;
    }
    console.log(`${this.name}发布了${good}，给所有订阅了${good}的人发送通知`);
    for (let i = 0; i < subject[good].length; i++) {
      subject[good][i]();
    }
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
