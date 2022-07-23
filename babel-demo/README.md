'@babel/preset-env'默认只负责语法解析，比如 const 转 var，箭头函数转普通函数等，
不会对 Promise 以及 array 的 map 这种方法做处理，这样会有一些问题，如果浏览器不支持 Promise 或者压根
不支持 es6，就会找不到 Promise 这些错误，因此需要 polyfill，他会引一个 Promise 进来，这样就不会
报找不到 Promise 这种错误了
