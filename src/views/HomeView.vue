<script setup lang="ts">
import { useRouter } from 'vue-router';
import img1 from '@/assets/images/1.jpg';
import img2 from '@/assets/images/2.jpg';
import img3 from '@/assets/images/3.jpg';
import img4 from '@/assets/images/4.jpg';

const router = useRouter();

function onBtnClick() {
  router.replace('/about');
}
</script>

<template>
  <div class="home">
    <div class="row">
      <img :src="img2" alt="" />
      <img :src="img3" alt="" />
    </div>
    <div class="btn-c">
      <span @click="onBtnClick">请点击这里</span>
    </div>
    <div class="row">
      <img :src="img4" alt="" />
      <img :src="img1" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: pink;
  .row {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 40%;
  }
  .btn-c {
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 0.28rem;
      height: 0.6rem;
      padding: 0 0.32rem;
      background: orange;
      color: #fff;
      border-radius: 0.3rem;
    }
  }
}
</style>
