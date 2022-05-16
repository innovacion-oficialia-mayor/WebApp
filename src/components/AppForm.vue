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
    },
    submitText: {
      type: String,
      default: "Enviar"
    },
    submitSize: {
      type: String,
      default: "large"
    },
  },
};
</script>

<template>
  <form action="" class="app__form">
    <app-input class="app__form-input" v-for="input in inputsList" :key="input.id" :currentInput="input"></app-input>
    <p v-show="state" class="app__form-msg">Datos invalidos, verifica los campos y vuelve a intentarlo</p>

    <app-button
      typeBtn="submit"
      colorBtn="rose"
      typeStyle="fill"
      :sizeBtn="submitSize" class="app__form-submit">
        {{submitText}}
    </app-button>
    <!-- extra button if is neccesary to camcel or close something -->
    <slot name="extra-button"></slot>
  </form>
</template>

<style scoped>

  .app__form {
    width: 100%;
  }

  .app__form > button {
    margin: 10px;
  }

  .app__form-input {
    margin-bottom: 15px;
  }

  .app__form-msg {
    color: var(--color-secundary-red);
    font-weight: 700;
    font-size: 0.9rem;
    text-align: left;
  }

</style>
