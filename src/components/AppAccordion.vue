<script>
export default {
  name: 'AppAccordion',
  props: {
    // polls info from the call of the component
  }
};
</script>

<template>
  <ul class="accordion__list">
    <slot></slot>
  </ul>
</template>

<style scoped>
  .accordion__list {
    padding: 0;
    list-style-type: none;
  }
</style>
