<script>
import IconBase from '@/components/IconBase.vue';
export default {
  name: 'AppAccordionItem',
  components: {
      'icon-base': IconBase,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<template>
  <li class="accordion__item">
    <div class="accordion__trigger" @click="open">
      <slot name="title"></slot>
      <icon-base name="arrowUp" color="var(--color-primary-blue)"  role="button" :class="[!isOpen ? 'poll__arrow' : 'poll__arrow-rotate']"></icon-base>
    </div>
    <transition name="fade">
      <div class="accordion__content" v-show="isOpen">
        <slot name="content"></slot>
      </div>
    </transition>
  </li>
</template>

<style scoped>
  .accordion__item {
    margin: 25px 0;
    border-bottom: 3px solid var(--color-primary-blue);
  }
  .accordion__trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }

  .poll__arrow {
    transform: rotate(180deg);
    transition: transform 200ms ease-in;
  }

  .poll__arrow-rotate {
    transform: rotate(0);
    transition: transform 200ms ease-in;
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 300ms ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
