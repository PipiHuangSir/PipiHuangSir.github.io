<script setup lang="ts">
const lineList = [
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    l: '0px',
    t: '0px',
    d: 3,
    t2: '2s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    l: '60px',
    t: '0px',
    d: 5,
    t2: '3s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    r: '72px',
    t: '0px',
    d: 2,
    t2: '1s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '30px',
    t: '0px',
    d: 0,
    t2: '3s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '41px',
    t: '0px',
    d: 1,
    t2: '3s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    l: '105px',
    t: '0px',
    d: 4,
    t2: '1s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    l: '30px',
    t: '0px',
    d: 2,
    t2: '5s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    r: '111px',
    t: '0px',
    d: 5,
    t2: '3s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '2px',
    t: '0px',
    d: 3,
    t2: '1s',
  },

  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    l: '49px',
    t: '110px',
    d: 3,
    t2: '3s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    l: '89px',
    t: '100px',
    d: 5,
    t2: '2s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    r: '15px',
    t: '120px',
    d: 2,
    t2: '1s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '0px',
    t: '109px',
    d: 0,
    t2: '5s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '21px',
    t: '100px',
    d: 1,
    t2: '4s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    l: '130px',
    t: '100px',
    d: 4,
    t2: '4s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    l: '6px',
    t: '110px',
    d: 2,
    t2: '2s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    r: '88px',
    t: '105px',
    d: 5,
    t2: '5s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '22px',
    t: '100px',
    d: 3,
    t2: '1s',
  },

  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    l: '0px',
    t: '300px',
    d: 3,
    t2: '6s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    l: '60px',
    t: '320px',
    d: 5,
    t2: '3s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    r: '72px',
    t: '300px',
    d: 2,
    t2: '2s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '30px',
    t: '350px',
    d: 0,
    t2: '1s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '41px',
    t: '390px',
    d: 1,
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    l: '105px',
    t: '310px',
    d: 4,
    t2: '1s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    l: '30px',
    t: '330px',
    d: 2,
    t2: '3s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    r: '111px',
    t: '300px',
    d: 5,
    t2: '5s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '2px',
    t: '380px',
    d: 3,
    t2: '3s',
  },

  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    l: '40px',
    t: '510px',
    d: 3,
    t2: '4s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    l: '90px',
    t: '500px',
    d: 5,
    t2: '3s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    r: '102px',
    t: '520px',
    d: 2,
    t2: '3s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '0px',
    t: '609px',
    d: 0,
    t2: '5s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '11px',
    t: '650px',
    d: 1,
    t2: '1s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    l: '135px',
    t: '550px',
    d: 4,
    t2: '3s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    l: '60px',
    t: '500px',
    d: 2,
    t2: '2s',
  },
  {
    c1: '#FED258',
    c2: 'rgba(254,210,88,0)',
    r: '111px',
    t: '605px',
    d: 5,
    t2: '2s',
  },
  {
    c1: '#69E4F6',
    c2: '#69e4f600',
    r: '2px',
    t: '680px',
    d: 5,
    t2: '3s',
  },
];
</script>

<template>
  <div class="about">
    <div class="line-box">
      <span
        class="line-item"
        v-for="(item, index) in lineList"
        :key="index"
        :style="{
          '--c1': item.c1,
          '--c2': item.c2,
          '--l': item.l,
          '--d': item.d,
          '--r': item.r,
          '--t': item.t,
          '--t2': item.t2 || '2s',
        }"
      ></span>
    </div>
    <div class="content">
      <h1>加油一哥！</h1>
      <h1>要开心！</h1>
      <h1>不负韶华！</h1>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  background: url('@/assets/images/earth.jpg') no-repeat center center/100% 100%;
  h1 {
    font-size: 0.6rem;
    // color: #fff;
    // color: ;
    background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .content {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes ping {
  100% {
    background-position: 100%;
  }
}
.line-box {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.line-item {
  width: 3px;
  height: 50px;
  background: linear-gradient(0deg, var(--c1) 0%, var(--c2) 100%);
  position: absolute;
  // top: 0;
  top: calc(var(--t));
  transform: rotate(45deg);
  left: calc(var(--l) + 70px);
  right: calc(var(--r) - 70px);
  opacity: 0;
  animation: shank var(--t2) linear infinite;
  animation-delay: calc(var(--d) * 0.2s);
}

.line-item::after {
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--c1);
  filter: blur(1.8px);
  box-shadow: 0px -1px -1px 5px var(--c2);
  bottom: -4px;
  left: 50%;
  transform: translate(-50%);
}

@keyframes shank {
  0% {
    transform: rotate(45deg) translateY(-100px) scale(0.5);
    opacity: 0;
  }

  70% {
    opacity: 1;
    transform: rotate(45deg) translateY(100px) scale(1.1);
  }

  100% {
    transform: rotate(45deg) translateY(220px) scale(0.5);
    opacity: 0;
  }
}

.shooting {
  width: 5px;
  height: 85px;
  background: linear-gradient(0deg, orange 0, transparent 100%);
  position: relative;
  margin-left: 50px;
  transform: rotate(45deg);
}
.shooting::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: orange;
  filter: blur(1.8px);
  bottom: -6px;
  left: 50%;
  transform: translate(-50%);
}
</style>
