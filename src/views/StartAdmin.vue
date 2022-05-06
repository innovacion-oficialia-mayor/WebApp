<script>
import TheStartItem from '@/components/TheStartItem.vue';
import AppForm from '@/components/AppForm.vue';

export default {
    name: "StartAdmin",
    components: { "the-start-item":TheStartItem, 'app-form':AppForm },
    methods: {
      handlerSubmit(e){
        // validate the login form
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        // function to redirect to the admin's dashboard
        // console.log(this.$route.query);
      }
    },
    data(){
      return {
        inputsList: [
          {
            id:1,
            type:'email',
            labelText: 'Email',
            name: 'email',
            placeholder:'Ingresa tu email'
          },
          {
            id:2,
            type:'password',
            labelText: 'Password',
            name: 'password',
            placeholder:'Ingresa tu contraseña'
          },
          ],
        validated: false,
      };
    }
};
</script>

<template>
   <main class="start-admin__main">
    <the-start-item>
      <template #image>
        <img class="start__image" src="@/assets/images/start-admin.svg" alt="Imagen de bienvenida para el administrador">
      </template>
      <template #info-title>
        Inicia de sesión
      </template>
       <template #info-disclaimer>
        Ingresa tus datos correctamente para continuar
      </template>
      <template #actions>
        <app-form class="start__admin-form" @submit.prevent="handlerSubmit" :inputsList="inputsList"></app-form>
      </template>
        <img class="start__logo" src="@/assets/logo.png" alt="Logo de Celaya">
    </the-start-item>
  </main>
</template>

<style scoped>
  .start-admin__main {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
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
