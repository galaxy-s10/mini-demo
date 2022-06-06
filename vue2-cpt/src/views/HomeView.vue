<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <div class="notice-wrap">
        <div class="ico">1</div>
        <NoticeBarHorizontal class="cpt" />
      </div>
    </div>
    <div>
      <div class="notice-wrap">
        <div class="ico">2</div>
        <NoticeBarVertical class="cpt" />
      </div>
    </div>
    <div>
      <div class="notice-wrap">
        <div class="ico">3</div>
        <NoticeBarLoop class="cpt" />
      </div>
    </div>
  </div>
</template>

<script>
import NoticeBarHorizontal from '@/components/notice-bar-horizontal.vue';
import NoticeBarVertical from '@/components/notice-bar-vertical.vue';
import NoticeBarLoop from '@/components/notice-bar-loop.vue';

export default {
  name: 'HomeView',
  components: {
    NoticeBarHorizontal,
    NoticeBarVertical,
    NoticeBarLoop,
  },
};
</script>

<style lang="scss" scoped>
.notice-wrap {
  display: inline-flex;
  align-items: center;
  background-color: red;
  border-radius: 20px;
  height: 30px;
  overflow: hidden;
  .ico {
    width: 30px;
    height: 30px;
    background-color: pink;
  }
  .cpt {
  }
}
</style>
