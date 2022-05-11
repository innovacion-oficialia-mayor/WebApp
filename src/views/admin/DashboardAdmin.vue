<script>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
import TheModal from '@/components/TheModal.vue';
import AppButton from '@/components/AppButton.vue';
export default {
  name: "DashboardAdmin",
  components: {
    "the-header": TheHeader,
    "icon-base":IconBase,
    'the-footer': TheFooter,
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
