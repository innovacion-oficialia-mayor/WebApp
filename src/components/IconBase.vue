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
    role:{
      type: String,
      default: 'icon',
    }
  },
  computed: {
    svgPath(){
      return ICONS[this.name].path;
    },
    svgWidth(){
      return ICONS[this.name].width;
    },
    svgHeight(){
      return ICONS[this.name].height;
    },
    svgViewBox(){
      return `0 0 ${this.svgWidth} ${this.svgHeight}`;
    }
  }
};
</script>

<template>
    <svg :width="svgWidth" :height="svgHeight" :viewBox="svgViewBox" fill="none" xmlns="http://www.w3.org/2000/svg" :role="role">
      <path :d="svgPath" :fill="color"/>
    </svg>
</template>

<style scoped>

</style>

