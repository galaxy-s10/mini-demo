function Universe() {
  var instance = this;
  Universe = function () {
    // 重写构造函数
    return instance;
  };
}
var uni1 = new Universe();
var uni2 = new Universe();
console.log(uni1);
console.log(uni2);
console.log(uni1 === uni2);
