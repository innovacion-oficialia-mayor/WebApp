<script>
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
export default {
    name: "DashboardAdmin",
    componets: {
        "the-header": TheHeader,
        "icon-base":IconBase
    },
    components: { TheHeader, IconBase }
};
</script>

<template>
  <the-header>
    <template #text>
      Adminsitración
    </template>
    <template #action>
      <icon-base name="logout" color="#1B1A2F" width="30" height="30" role="button"></icon-base>
    </template>
  </the-header>
</template>

<style scoped>
  svg {
    width: 25px;
  }
</style>
