<script>
import TheStartItem from '@/components/TheStartItem.vue';
import AppForm from '@/components/AppForm.vue';

export default {
    name: "StartUser",
    components: { "the-start-item":TheStartItem, 'app-form':AppForm },
    data(){
      return {
         inputsList: [
          {
            id:1,
            type:'text',
            labelText: 'Nómina',
            name: 'nomina',
            placeholder:'Ingresa tu nómina'
          },
          {
            id:2,
            type:'password',
            labelText: 'Confirmar nómina',
            name: 'nominaConfirm',
            placeholder:'Confirma tu nómina'
          },
          ],
        validated: false,
      };
    },
    methods: {
      handlerSubmit(e){
        // validate the login form
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        // function to redirect to the admin's dashboard
        // console.log(this.$route.query);
      }
    },
};
</script>

<template>
   <main class="start__main">
    <the-start-item>
      <template #image>
        <img class="start__image" src="@/assets/images/start-user.svg" alt="Imagen de bienvenida para el servidor publico">
      </template>
      <template #info-title>
        Bienvenido Servidor Publico
      </template>
       <template #info-disclaimer>
        Ingresa tu nomina para continuar
      </template>
      <template #actions>
         <app-form class="start__admin-form" @submit.prevent="handlerSubmit" :inputsList="inputsList"></app-form>
      </template>
        <img class="start__logo" src="@/assets/logo.png" alt="Logo de Celaya">
    </the-start-item>
  </main>
</template>

<style scoped>
.start__image, .start__logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

 .start__image, .start__logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .start__admin-form {
    /* background-color: red; */
    max-width: 500px;
    min-width: 270px;
    width: 90%;
  }
</style>
