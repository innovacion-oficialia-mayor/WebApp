<script>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
import CardPool from '@/components/CardPool.vue';
import TheModal from '@/components/TheModal.vue';
import AppButton from '@/components/AppButton.vue';
export default {
  name: "DashboardAdmin",
  components: {
    "the-header": TheHeader,
    "icon-base":IconBase,
    'the-footer': TheFooter,
    'card-pool': CardPool,
    'the-modal': TheModal,
    'app-button': AppButton
  },
  data(){
    return {
      isModalOpen: false,
    };
  },
  methods: {
    logout(e) {
      // do something with the store
      // this.$store.dispatch('logout');
      console.log(e.target);
    },
    changeModalState() {
      this.isModalOpen = !this.isModalOpen;
    }
  }
};
</script>

<template>
  <div class="dashboard__container">
    <Teleport to="body">
      <the-modal srcImage="/src/assets/images/modal-logout.svg" :isOpen="isModalOpen">
        <template #message>¿Estás seguro que deseas cerrar  tu sesión?</template>

        <template #actions>
          <app-button
          textBtn="Si, Salir"
          typeBtn="button"
          typeStyle="fill"
          colorBtn="blue"
          sizeBtn="medium">
          </app-button>

          <app-button
          textBtn="Quedarme"
          typeBtn="button"
          typeStyle="fill"
          colorBtn="rose"
          sizeBtn="medium" @click="changeModalState">
          </app-button>
        </template>
      </the-modal>

    </Teleport>
    <the-header>
      <template #text>
        Adminsitración
      </template>
      <template #action>
        <icon-base name="logout" color="#1B1A2F" width="30" height="30" role="button" @click="changeModalState"></icon-base>
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
