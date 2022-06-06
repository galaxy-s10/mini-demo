<template>
  <div class="notice-bar">
    <div class="list">
      <div class="item">Lorem ipsum 1111111</div>
      <div class="item">Lorem ipsum 2222222</div>
      <div class="item">Lorem ipsum 3333333</div>
      <div class="item">Lorem ipsum 4444444</div>
      <div class="item">Lorem ipsum 5555555</div>
      <div class="item">Lorem ipsum 6666666</div>
      <!--末尾补一个首条数据-->
      <div class="item">Lorem ipsum 1111111</div>
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
@keyframes horizontal_move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(calc(var(--s) * var(--w) * -1px), 0); //横向无限轮播
  }
}

@keyframes horizontal_itemMove {
  0% {
    transform: translate(0, 0);
  }
  80%,
  100% {
    transform: translate(calc(var(--w) * -1px), 0); //横向无限轮播
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
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row; //横向无限轮播
    animation: horizontal_move calc(var(--speed) * var(--s)) steps(var(--s))
      infinite;
    .item {
      flex-shrink: 0;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;

      white-space: nowrap;
      animation: horizontal_itemMove calc(var(--speed)) infinite;
    }
  }
}
</style>
