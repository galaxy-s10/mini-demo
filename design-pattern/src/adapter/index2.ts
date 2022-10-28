function getUsers() {
  return [
    {
      name: 'zhangsan',
      age: 20,
    },
    {
      name: 'lisi',
      age: 30,
    },
  ];
}

function userAdaptor(users) {
  let arr = {};
  for (let i = 0; i < users.length; i++) {
    arr[users[i].name] = users[i].age;
  }
  return arr;
}
let res = userAdaptor(getUsers());
console.log(res); //{zhangsan: 20, lisi: 30}
