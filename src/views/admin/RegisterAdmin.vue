<script>
import userData from '@/data.json';
import TheMenu from '@/components/TheMenu.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
<<<<<<< Updated upstream
import CardUser from '@/components/CardUser.vue';
import TheFooter from '@/components/TheFooter.vue';
=======
import TheModal from '@/components/TheModal.vue';
>>>>>>> Stashed changes

export default {
  name: 'RegsiterAdmin',
  components: {
    'the-menu':TheMenu,
    "the-header": TheHeader,
    "icon-base":IconBase,
<<<<<<< Updated upstream
    'card-user': CardUser,
    'the-footer': TheFooter,
=======
    "the-modal":TheModal
>>>>>>> Stashed changes
  },
  data(){
    return {
      isMenuOpen: false,
      users: userData.users
    };
  },
};
</script>

<template>
  <Teleport to="body">
      <the-modal srcImage="/src/assets/images/modal-logout.svg" :isOpen="isModalOpen">
        <template #message>Selecciona la dependencia para ver los empleados</template>

        <template #actions>
          <app-button
          typeBtn="button"
          typeStyle="fill"
          colorBtn="blue"
          sizeBtn="medium">
           Si, salir
          </app-button>

          <app-button
          typeBtn="button"
          typeStyle="fill"
          colorBtn="rose"
          sizeBtn="medium" @click="changeModalState">
            Quedarme
          </app-button>
        </template>
      </the-modal>
  </Teleport>
  <the-header>
      <template #text>
        Registro y Consulta
      </template>
      <template #action>
        <icon-base name="menu" color="#1B1A2F" width="72" height="48" role="button" @click="isMenuOpen = !isMenuOpen"></icon-base>
      </template>
      <the-menu v-model="isMenuOpen"></the-menu>
  </the-header>

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
  svg {
    width: 20px;
  }
  .register__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    justify-content: center;
    margin: 15px 0;
  }
</style>
