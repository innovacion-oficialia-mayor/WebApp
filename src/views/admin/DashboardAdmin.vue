<script>
import TheFooter from '@/components/TheFooter.vue';
export default {
    components: {
        'the-footer': TheFooter
    },
};
</script>

<template>
  <div class="dashboard__container">

    <the-footer></the-footer>
  </div>
</template>

<style scoped>
.dashboard__container {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
}


</style>
