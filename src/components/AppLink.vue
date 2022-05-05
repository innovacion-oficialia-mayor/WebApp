<script>
export default {
  name: 'AppLink',
};
</script>

<template>
  <router-link class="router__link">
    <slot></slot>
  </router-link>
</template>

<style scoped>

.router__link {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  max-width: 400px;
  padding: 10px 15px;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 800;
  text-decoration: none;
  border: 0;
  border-radius: 1.2rem;
  background-color: var(--color-primary-rose);
  color: var(--color-primary-white);
  cursor: pointer;
  text-shadow: 4px 4px 12px rgba(255, 255, 255, 0.45);
}


</style>
