/**
 * @description 替换占位符
 * @param {string} str
 * @param {object} obj
 * @return {*} string
 * @example replaceKeyFromValue('Hello {name}',{name:'Word'}) => Hello Word
 * @deprecated 将在未来的版本弃用，请使用replaceKeyFromValue替代
 */
export const replaceStr = (str: string, obj: object) => {
  let res = str;
  Object.keys(obj).forEach((v) => {
    res = res.replace(new RegExp(`{${v}}`, 'ig'), obj[v]);
  });
  return res;
};

// 兼容以前的方法
export const replaceKeyFromValue = replaceStr;

console.log(replaceStr('Hello {name}', { name: 'Word' })); //Hello Word
console.log(replaceKeyFromValue('Hello {name}', { name: 'Word' })); //Hello Word
