//策略类（S）
var levelS = function () {};
//算法S内部具体实现
levelS.prototype.calculate = function (salary) {
  return salary * 4;
};

//策略类（A）
var levleA = function () {};
//算法A内部具体实现
levleA.prototype.calculate = function (salary) {
  return salary * 3;
};

//策略类（B）
var levelB = function () {};
//算法B内部具体实现
levelB.prototype.calculate = function (salary) {
  return salary * 2;
};

// 环境类（Bonus）
var Bonus = function () {
  this.salary = null; //原始工资
  this.strategy = null; //绩效公司对应的策略对象
};

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary; //设置原始工资
};
Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy; //设置员工绩效等级对应的策略对象
};
Bonus.prototype.getBonus = function () {
  //取得奖金数额
  //维持对策略对象的引用
  return this.strategy.calculate(this.salary); //委托给对应的策略对象
};

// 桥梁
var bonusB = new Bonus();
bonusB.setSalary(20000);
bonusB.setStrategy(new levelB());
console.log(bonusB.getBonus()); //40000

var bonusS = new Bonus();
bonusS.setSalary(6000);
bonusS.setStrategy(new levelS());
console.log(bonusS.getBonus()); //24000
