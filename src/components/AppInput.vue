<script>
export default {
  name: 'AppInput',
  data() {
    return {

    };
  }
};
</script>

<template>
  <label for="" class="app-input__label">
    <span class="app-input__span">Label</span>
    <input type="text" name="" id="" class="app-input__input" placeholder="hola" aria-label="">
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
  }

  .app-input__input {
    width: 100%;
    font-size: 1.3rem;
    border: 2px solid var(--color-primary-rose);
    border-radius: 8px;
    padding: 12px 8px;
    color: var(--color-text);
    background-color: transparent;
  }

  ::placeholder {
    font-size: 1.3rem;
    color: var(--color-text-mute);
  }


</style>
