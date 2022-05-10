<script>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
import CardPool from '@/components/CardPool.vue';
export default {
  name: "DashboardAdmin",
  components: {
    "the-header": TheHeader,
    "icon-base":IconBase,
    'the-footer': TheFooter,
    'card-pool': CardPool
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

    <section class="dashboard__content">

      <card-pool imgpath = "/src/assets/images/card-1.svg" active = "yes" >
        <template #title>
          Registro y consulta
        </template>
        <template #disclaimer>
          Registra nuevos empleados, edita, elimina y busca los empleados existentes.
        </template>
      </card-pool>

      <card-pool imgpath = "/src/assets/images/card-2.svg" active = "yes" >
        <template #title>
          Clima Laboral
        </template>
        <template #disclaimer>
          Agenda encuestas, administra las características y lee informes estadísticos.
        </template>
      </card-pool>

      <card-pool imgpath = "/src/assets/images/card-3.svg" active = "no">
        <template #title>
          Norma 035
        </template>
        <template #disclaimer>
          Disponible proximamente...
        </template>
      </card-pool>

      <card-pool imgpath = "/src/assets/images/card-3.svg" active = "no" >
        <template #title>
          Evaluación de desempeño
        </template>
        <template #disclaimer>
          Disponible proximamente...
        </template>
      </card-pool>
    </section>

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

  .dashboard__content {
    display: grid;
    width: 93%;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    margin: 20px auto;
    gap: 16px;
  }

</style>
