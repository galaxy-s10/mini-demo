<template>
  <div class="notice-bar">
    <div class="list">
      <span class="item">Lorem ipsum 1111111</span>
      <span class="item">Lorem ipsum 2222222</span>
      <span class="item">Lorem ipsum 3333333</span>
      <span class="item">Lorem ipsum 4444444</span>
      <span class="item">Lorem ipsum 5555555</span>
      <span class="item">Lorem ipsum 6666666</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style>
:root {
  --s: 6;
  --h: 30;
  --w: 300;
  --speed: 1.5s;
}
</style>
<style lang="scss" scoped>
@keyframes loop {
  0% {
    transform: translateX(calc(var(--w) * 1px));
  }
  100% {
    transform: translateX(-100%);
  }
}
.notice-bar {
  display: inline-block;
  width: calc(var(--w) * 1px);
  height: calc(var(--h) * 1px);
  line-height: calc(var(--h) * 1px);
  background: #673ab7;
  color: #fff;
  overflow: hidden;
  .list {
    display: inline-block;
    animation: 10s loop linear infinite normal;

    .item {
      flex-shrink: 0;
      width: 100%;
      box-sizing: border-box;
      margin-right: 20px;
      white-space: nowrap;
    }
  }
}
</style>
