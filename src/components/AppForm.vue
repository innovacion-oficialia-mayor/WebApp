<script>
import AppInput from "./AppInput.vue";
export default {
  name: 'AppForm',
  components: {
  'app-input':AppInput
},
};
</script>

<template>
  <form action="" class="app__form" @submit.prevent="">
    <app-input class="app__form-input"></app-input>
    <app-input class="app__form-input"></app-input>
    <app-link :to="{name: 'start'}" class="app__form-button">Iniciar sesión</app-link>
  </form>
</template>

<style scoped>
  .app__form-input {
    margin-bottom: 15px;
  }

  .app__form-button {
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
    min-height: 65px;
  }

</style>
