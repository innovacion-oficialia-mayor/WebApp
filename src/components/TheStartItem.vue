<script>
export default {
  name: 'TheStartItem',
};
</script>

<template>
  <div class="item__container">
    <picture class="item__image-wrapper">
      <slot name="image"></slot>
    </picture>
    <div class="start__info">
      <slot name="info"></slot>
    </div>
    <div class="start__actions">
      <slot name="actions"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
