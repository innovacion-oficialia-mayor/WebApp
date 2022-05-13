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
            placeholder:'Ingresa tu nómina',
            pattern: '[0-9]{5}'
          },
          {
            id:2,
            type:'password',
            labelText: 'Confirmar nómina',
            name: 'nominaConfirm',
            placeholder:'Confirma tu nómina',
            pattern: '[0-9]{5}'
          },
          ],
        validated: false,
        invalidElement: false,
      };
    },
    methods: {
      handlerSubmit(e){
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        // validate the login form (this is just a prube)
        console.log(data.nomina, data.nominaConfirm);
        data.nomina === '12345' && data.nominaConfirm === data.nomina ? this.validated = true : this.validated = false;

        if(this.validated){
          // function to redirect to the admin's dashboard
          this.$router.push({name:'start'});
          return;
        }
        // async view invalid message
        e.target.reset();
        setTimeout(() => {
          setTimeout(() => {
            this.invalidElement = false;
          }, 4000);
            this.invalidElement = true;
        }, 0);

      }
    },
};
</script>

<template>
   <main class="start__user-main">
    <the-start-item>
      <template #image>
        <img class="start__image" src="@/assets/images/start-user.svg" alt="Imagen de bienvenida para el servidor publico">
      </template>
      <template #info-title>
        Bienvenido Servidor Público
      </template>
       <template #info-disclaimer>
        Ingresa tu nómina para continuar
      </template>
      <template #actions>
         <app-form class="start__admin-form" @submit.prevent="handlerSubmit" :inputsList="inputsList" :state="invalidElement"></app-form>
      </template>
        <img class="start__logo" src="@/assets/logo.png" alt="Logo de Celaya">
    </the-start-item>
  </main>
</template>

<style scoped>
.start__user-main {
  width: 100%;
}
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
