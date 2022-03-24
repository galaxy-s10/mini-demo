console.log(`读取了: ${__filename.slice(__dirname.length + 1)}`);

module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['prettier --write'],
};
