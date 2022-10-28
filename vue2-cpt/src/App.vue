<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <div>
      {{ obj }}
    </div>
    <button @click="editObj">通过数组下标修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: { age: 18 },
    };
  },
  methods: {
    editObj() {
      // this.obj.sex = 1; // 不是响应式的
      this.$set(this.obj, 'sex', 1); // 是响应式的
      // this.obj = { sex: 1 }; // 是响应式的
      console.log(this.obj);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
