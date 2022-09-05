# 单例模式

## 理论

维基百科解释：单例对象的[类](<https://zh.wikipedia.org/wiki/类_(计算机科学)>)必须保证只有一个实例存在。许多时候整个系统只需要拥有一个的全局[对象](https://zh.wikipedia.org/wiki/对象)，这样有利于我们协调系统整体的行为。比如在某个[服务器](https://zh.wikipedia.org/wiki/服务器)程序中，该服务器的配置信息存放在一个[文件](https://zh.wikipedia.org/wiki/文件)中，这些配置数据由一个单例对象统一读取，然后服务[进程](https://zh.wikipedia.org/wiki/进程)中的其他对象再通过这个单例对象获取这些配置信息。这种方式简化了在复杂环境下的配置管理。

实现思路：一个类能返回对象一个引用（永远是同一个）和一个获得该实例的方法（必须是静态方法，通常使用 getInstance 这个名称）；当我们调用这个方法时，如果类持有的引用不为空就返回这个引用，如果类保持的引用为空就创建该类的实例并将实例的引用赋予该类保持的引用

## 使用场景

1. 全局状态管理
2. toast 弹窗

## 优缺点

优点：规划命名空间，优化对象管理

缺点：

## 普通单例

首先这是一个无单例的代码：

```ts
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
add(1, 2);
```

将上面的代码改造成一个最简单的单例：

```ts
let Calculator = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  },
};
Calculator.add(1, 2);
```

## 惰性单例

### 案例 1

```ts
const Singleton = function (name) {
  this.name = name;
};

let _instance;

function getInstant(name) {
  if (_instance) return _instance;
  _instance = new Singleton(name);
  return _instance;
}

const store1 = getInstant('tom');
const store2 = getInstant('john');

console.log(store1); //{name: 'tom'}
console.log(store2); //{name: 'tom'}
console.log(store1 === store2); //true
```

### 案例 2

```ts
const Singleton = function (name) {
  this.name = name;
};

const ProxySingleton = (function () {
  let _instance;
  return function (name) {
    if (_instance) return _instance;
    _instance = new Singleton(name);
    return _instance;
  };
})();

const store1 = new ProxySingleton('tom');
const store2 = new ProxySingleton('john');

console.log(store1); //{name: 'tom'}
console.log(store2); //{name: 'tom'}
console.log(store1 === store2); //true
```

### Toast

```

```

# 惰性模式

# 外观模式

# 工厂模式
