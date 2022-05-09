<script>
import ICONS from '@/assets/icons/icons.js';
export default {
  name: 'IconBase',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'white',
    },
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },

    role:{
      type: String,
      default: 'icon',
    }
  },
  computed: {
    svgPath(){
      return ICONS[this.name];
    },
    svgViewBox(){
      return `0 0 ${this.width} ${this.height}`;
    }
  }
};
</script>

<template>
    <svg :width="width" :height="height" :viewBox="svgViewBox" fill="none" xmlns="http://www.w3.org/2000/svg" :role="role">
      <path :d="svgPath" :fill="color"/>
    </svg>
</template>

<style scoped>

</style>

