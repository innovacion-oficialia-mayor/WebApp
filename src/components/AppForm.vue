<script>
import AppInput from "./AppInput.vue";
export default {
  name: 'AppForm',
  props: {
    inputsList: {
      type: Array,
      required: true,
      default: () => [{
        id: 0,
        inputType: "text",
        labelText: "Default",
        name: "default",
      }]
    }
  },
  components: {
  'app-input':AppInput
  },
  methods : {

  }
};
</script>

<template>
  <form action="" class="app__form">
    <app-input class="app__form-input" v-for="input in inputsList" :key="input.id" :currentInput="input"></app-input>
    <input type="submit" value="Iniciar sesión" class="app__form-submit">
  </form>
</template>

<style scoped>
  .app__form-input {
    margin-bottom: 15px;
  }

  .app__form-submit {
    width: 50%;
    margin-top: 20px;
    min-width: 170px;
    min-height: 60px;
    padding: 10px 15px;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.4rem;
    font-weight: 800;
    text-decoration: none;
    border: 0;
    border-radius: 1.2rem;
    background-color: var(--color-primary-rose);
    color: var(--color-primary-white);
    cursor: pointer;
    text-shadow: 4px 4px 12px rgba(255, 255, 255, 0.45);
  }

</style>
