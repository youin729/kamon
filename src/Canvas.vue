<template>

  <div class="v-container" @click.stop="onClick">
    <img class="v-img"
         src="//placekitten.com/100/100"
         width="100"
         alt="kitty"
         :style="{top: imgTop, left: imgLeft}">
  </div>

</template>

<style>
.v-container {
  position:relative;
  width: 100vw;
  height: 100vh;
}
.v-img {
  position: absolute;
}
/*
.kamon{
  width:200px;
  height:200px;
}
*/

</style>

<script>
export default {
  data: () => ({
    imgLeft: null,
    imgTop: null,
  }),
  methods: {
    onClick(e) {
      this.imgLeft = `${e.clientX}px`;
      this.imgTop = `${e.clientY}px`;
    }
  }
};
/*
  <img src="@/assets/svg/13.svg" alt="家紋" class="kamon" :style="{
    transform: `translate(${x}px, ${y}px) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`}">

export default {
  name: 'canvas',
  props: {
    x: { type: Number, default: 200 },
    y: { type: Number, default: 100 },
    scaleX: { type: Number, default: 1.0 },
    scaleY: { type: Number, default: 1.0 },
    rotate: { type: Number, default: 0 }
  }
}
*/
</script>

