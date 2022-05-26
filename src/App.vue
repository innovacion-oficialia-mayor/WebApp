<script>
</script>

<template>
  <div class="app__container">
    <RouterView />
  </div>
</template>

<style>
/* css base styles */
@import '@/assets/base.css';

.app__container {
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  padding-bottom: 68px;

  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
</style>
