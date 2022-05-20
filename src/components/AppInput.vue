<script>
export default {
  name: 'AppInput',
  props: {
    currentInput: {
      type: Object,
      required: true
    },
  },
  data(){
    return {
      isFocused: false,
    };
  },
  methods: {
  }
};
</script>

<template>
  <label :for="currentInput.id" class="app-input__label">
    <span class="app-input__span">{{ currentInput.labelText }}</span>
    <input
    v-if="currentInput.type !== 'list'"
    :type="currentInput.type"
    :name="currentInput.name"
    :id="currentInput.id"
    :placeholder="currentInput.placeholder"
    required
    :pattern="currentInput.pattern ?? '.*'"
    :value="currentInput.value || ''"
    class="app-input__input">

    <input
    role="combobox"
    v-else
    list=""
    :name="currentInput.name"
    :id="currentInput.id"
    :placeholder="currentInput.placeholder"
    :value="currentInput.value || ''"
    class="app-input__input-list"
    autocomplete="off"
    @focus="$refs.dataList.classList.add('isActive')"
    @focusout="$refs.dataList.classList.remove('isActive')">
    <datalist :id="currentInput.listName" role="listbox" ref="dataList" class="app-input__datalist">
      <option v-for="(option, index) in currentInput.options" :key="index" :value="option" class="app-input__option">{{option}}</option>
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

  .app-input__datalist {
    width: 100%;
    position: relative;
    border-radius: 0 0 5px 5px;
    background-color: var(--color-primary-rose);
    max-height: 100px;
    overflow-y: auto;
    transition: all 200ms ease-in-out;
    height: 0;
  }

  .app-input__datalist.isActive {
    display: block;
    height: auto;
    transition: all 200ms ease-in-out;
  }

  .app-input__option {
    padding: 8px;
    color: var(--color-text);
    background-color: var(--color-primary-rose);
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 250ms ease-in;
  }

  .app-input__option:hover, .active{
    background-color: var(--color-primary-blue);
  }


</style>
