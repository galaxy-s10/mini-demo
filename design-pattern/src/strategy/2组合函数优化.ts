var levelS = function (salary) {
  return salary * 4;
};
var levelA = function (salary) {
  return salary * 3;
};
var levelB = function (salary) {
  return salary * 2;
};

var calculateBonus = function (level, salary) {
  if (level === 'S') {
    return levelS(salary);
  }
  if (level === 'A') {
    return levelA(salary);
  }
  if (level === 'B') {
    return levelB(salary);
  }
};

console.log(calculateBonus('B', 20000)); //40000
console.log(calculateBonus('S', 6000)); //24000
