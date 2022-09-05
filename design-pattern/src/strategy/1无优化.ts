var calculateBonus = function (level, salary) {
  if (level === 'S') {
    return salary * 4;
  }
  if (level === 'A') {
    return salary * 3;
  }
  if (level === 'B') {
    return salary * 2;
  }
};

console.log(calculateBonus('B', 20000)); //40000
console.log(calculateBonus('S', 6000)); //24000
