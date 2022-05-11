<script>
import AppInput from "./AppInput.vue";
export default {
  name: 'AppForm',
  components: {
  'app-input':AppInput
  },
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
    },
    state: {
      type: Boolean,
    }
  },
};
</script>

<template>
  <form action="" class="app__form">
    <app-input class="app__form-input" v-for="input in inputsList" :key="input.id" :currentInput="input"></app-input>
    <p v-show="state" class="app__form-msg">Datos invalidos, verifica los campos y vuelve a intentarlo</p>

    <!-- <input type="submit" value="Iniciar sesión" class="app__form-submit" aria-label="submit"> -->
    <app-button
      typeBtn="submit"
      colorBtn="rose"
      typeStyle="fill"
      sizeBtn="large" class="app__form-submit">
        Iniciar sesión
    </app-button>
  </form>
</template>

<style scoped>
  .app__form-input {
    margin-bottom: 15px;
  }

  .app__form-submit {
    width: 60%;
    margin-top: 20px;
    min-height: 65px;
  }

  .app__form-msg {
    color: var(--color-secundary-red);
    font-weight: 700;
    font-size: 0.9rem;
    text-align: left;
  }

</style>
