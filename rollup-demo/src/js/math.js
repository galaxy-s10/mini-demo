export const sum = async (num1, num2) => {
  await 2;
  console.log('sum代码');
  return num1 + num2;
};

export const mul = async (num1, num2) => {
  console.log('mul代码', [].includes(2));
  return num1 * num2;
};
