console.log('myplugin');

module.exports = function (aaa, opts, path) {
  console.log('进入了myplugin ', opts, path);
  // console.log('进入了myplugin', console.log(arguments['1']));
  return {};
};
