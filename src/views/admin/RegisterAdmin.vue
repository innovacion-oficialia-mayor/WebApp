<script>
import userData from '@/data.json'
import CardUser from '@/components/CardUser.vue';
import TheFooter from '../../components/TheFooter.vue';
export default {
  name: 'RegsiterAdmin',
  components: {
    'card-user': CardUser,
    'the-footer': TheFooter,
  },
  data() {
    return {
      users: userData.users,
    }
  }
};
</script>

<template>
  <section class="register__content">
    <card-user toRoute="admin" :userActive="user.activo" v-for="user in users" :key="user.id">
      <template #username> {{user.name}} </template>
      <template #email> {{user.email}} </template>
      <template #nomina> Nómina: {{user.nomina}} </template>
      <template #dependencia> {{user.dependencia}} </template>
      <template #status v-if="user.activo"> Activo </template>
      <template #status v-else> Inactivo </template>
    </card-user>
  </section>
  <the-footer></the-footer>
</template>


<style scoped>
  .register__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin: 15px 0;
  }
</style>
