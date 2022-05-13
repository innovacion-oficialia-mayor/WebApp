<script>
import TheMenu from '@/components/TheMenu.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';


export default {
  name: 'RegsiterAdmin',
  components: {
    'the-menu':TheMenu,
    "the-header": TheHeader,
    "icon-base":IconBase,
  },
  data(){
    return {
      isMenuOpen: false,
    };
  },
};
</script>

<template>
  <the-header>
      <template #text>
        Registro y Consulta
      </template>
      <template #action>
        <icon-base name="menu" color="#1B1A2F" width="72" height="48" role="button" @click="isMenuOpen = !isMenuOpen"></icon-base>
      </template>
      <the-menu v-model="isMenuOpen"></the-menu>
  </the-header>
</template>

<style scoped>
  svg {
    width: 20px;
  }
</style>
