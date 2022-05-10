<script>
export default {
  name: 'TheModal',
  props: {
    srcImage: {
      type: String,
      default: '',
    },
  }
};
</script>

<template>
  <div class="the-modal__container">
    <div class="the-modal__dialog">
      <figure class="the-modal__image-wrapper">
        <img :src="srcImage" alt="Imagen del modal" class="the-modal__image">
      </figure>
      <p class="the-modal__message">
        <slot name="message"></slot>
      </p>
      <slot name="form"></slot>
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style scoped>
</style>
