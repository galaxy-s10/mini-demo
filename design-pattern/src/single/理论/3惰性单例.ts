const Singleton = function (model) {
  this.model = model;
};

const ProxySingleton = (function () {
  let _instant;
  return function (model) {
    if (_instant) return _instant;
    _instant = new Singleton(model);
    return _instant;
  };
})();

// const store1 = new ProxySingleton('home');
// const store2 = new ProxySingleton('login');

// console.log(decodeURIComponent(import.meta.url));
// console.log(store1);
// console.log(store2);
// console.log(store1 === store2); //true
