<script>
import {RouterLink} from 'vue-router';

export default {
  name:'AppButton',
  props: {
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
     // get all the props from the router-link
    ...RouterLink.props,
  },
  computed:{
    isRouterLink(){
      return this.to ? true : false;
    },

    btnType(){

      return this.typeStyle !== 'no-style' ? `${this.typeStyle}-${this.colorBtn}` : '';
    },

    sizeType(){
      return this.typeStyle !== 'no-style' ? `size-${this.sizeBtn}` : '';
    }
  },
};
</script>

<template>
  <!-- TODO: Accesibilidad y pseudoclases -->
  <router-link v-if="isRouterLink" class="app-button router__link" :class="[btnType, sizeType]" v-bind="$props">
    <slot></slot>
  </router-link>

  <button v-else :type="typeBtn" class="app-button" :class="[btnType, sizeType]">
      <slot></slot>
  </button>
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

button:active{
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
  border: 2px solid var(--color-secundary-red);
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

.size-large {
  min-width: 140px;
  max-width: 250px;
  padding: 1.8rem;
  font-size: 1.6rem;
}

.size-extralarge {
  min-width: 250px;
  max-width: 400px;
  padding: 2rem;
  font-size: 1.8rem;
}

/* Styles for router link */
.router__link {
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-width: 170px;
  max-width: 400px; */
  padding: 10px 15px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 800;
  text-decoration: none;
  text-shadow: 4px 4px 12px rgba(255, 255, 255, 0.45);
}


</style>
