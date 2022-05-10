<script>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
export default {
  name: "DashboardAdmin",
  components: {
    "the-header": TheHeader,
    "icon-base":IconBase,
    'the-footer': TheFooter
  },
};
</script>

<template>
  <div class="dashboard__container">
    <the-header>
      <template #text>
        Adminsitración
      </template>
      <template #action>
        <icon-base name="logout" color="#1B1A2F" width="30" height="30" role="button"></icon-base>
      </template>
    </the-header>
    <the-footer></the-footer>
  </div>
</template>

<style scoped>
  .dashboard__container {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
  }
  svg {
    width: 25px;
  }
</style>
