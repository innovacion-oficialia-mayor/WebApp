<script>
export default {
  name: 'AppInput',
  props: {
    currentInput: {
      type: Object,
      required: true
    },
  },
};
</script>

<template>
  <label :for="currentInput.id" class="app-input__label">
    <span class="app-input__span">{{ currentInput.labelText }}</span>
    <input v-if="currentInput.type !== 'list'" :type="currentInput.type" :name="currentInput.name" :id="currentInput.id" class="app-input__input" :placeholder="currentInput.placeholder" required :pattern="currentInput.pattern ?? '.*'">

    <input v-else :list="currentInput.listName" :name="currentInput.name" :id="currentInput.id" class="app-input__input-list" :placeholder="currentInput.placeholder">
    <datalist :id="currentInput.listName">
      <option v-for="(option, index) in currentInput.options" :key="index" :value="option"/>
    </datalist>

  </label>
</template>

<style scoped>
  .app-input__label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
  }
  .app-input__span{
    align-self: flex-start;
    font-size: 1.3rem;
    text-align: left;
    margin-bottom: 5px;
    color: var(--color-text);
  }

  .app-input__input, .app-input__input-list {
    width: 100%;
    font-size: 1.3rem;
    border: 2px solid var(--color-primary-rose);
    border-radius: 8px;
    padding: 12px 8px;
    color: var(--color-text);
    background-color: transparent;
    outline: 0;
    transition: 250ms ease-in-out;
  }

  input:focus {
    transform: scale(1.015);
  }

  ::placeholder {
    font-size: 1.3rem;
    color: var(--color-text-mute);
  }

  .app-input__input:invalid:not(:placeholder-shown) {
    border-color: var(--color-secundary-red);
    animation: shake 300ms;
  }

  .app-input__input:valid {
    border-color: var(--color-primary-rose);
  }

  @keyframes shake{
    25% {
    transform: translateX(4px);
    }

    50% {
      transform: translateX(-4px);
    }

    75% {
      transform: translateX(4px);
    }
  }


</style>
