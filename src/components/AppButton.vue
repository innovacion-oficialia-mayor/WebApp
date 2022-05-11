<script>
export default {
  name:'AppButton',
  props: {
    textBtn: {
      type: String,
      default: 'Enviar',
    },
    typeBtn: {
      type: String,
      default: 'button',
    },
    sizeBtn: {
      type: String,
      default: 'medium',
    },
    colorBtn: {
      type: String,
      default: 'rose',
    },
    typeStyle: {
      type: String,
      default: 'fill',
    },
  },
  computed:{
    btnType(){
      return `${this.typeStyle}-${this.colorBtn}`;
    },
    sizeType(){
      return `size-${this.sizeBtn}`;
    }
  }
};
</script>

<template>
  <button :type="typeBtn" class="app-button" :class="[btnType, sizeType]">{{textBtn}}</button>
</template>

<style scoped>

.app-button {
  padding: 5px;
  font-size: 1.2rem;
  border-radius: 12px;
  color: var(--color-text);
  transition: all ease-in 300ms;
  border: 0;
  cursor: pointer;
}

.app-button:active{
  transform: scale(1.1);
}

/* fill buttons */
.fill-rose {
  background-color: var(--color-primary-rose);
}

.fill-blue {
  background-color: var(--color-primary-blue);
}

.fill-green {
  background-color: var(--color-secundary-green);
}

.fill-yellow {
  background-color: var(--color-secundary-yellow);
}

.fill-red {
  background-color: var(--color-secundary-red);
}

/* Unfill buttons */
button[class*="unfill"] {
  background-color: transparent;
}

.unfill-rose {
  color: var(--color-primary-rose);
  border: 2px solid var(--color-primary-rose);
}

.unfill-blue {
  color: var(--color-primary-blue);
  border: 2px solid var(--color-primary-blue);
}

.unfill-green {
  color: var(--color-secundary-green);
  border: 2px solid var(--color-secundary-green);
}

.unfill-yellow {
  color: var(--color-secundary-yellow);
  border: 2px solid var(--color-secundary-yellow);
}

.unfill-red {
  color: var(--color-secundary-red);
}

/* Size buttons */
button[class*="size"] {
  overflow: hidden;
  word-wrap: break-word;
}

.size-small {
  min-width: 60px;
  max-width: 100px;
  padding: 1rem;
  font-size: 1.2rem;
}

.size-medium {
  min-width: 100px;
  max-width: 140px;
  padding: 1.5rem;
  font-size: 1.4rem;
}




</style>
