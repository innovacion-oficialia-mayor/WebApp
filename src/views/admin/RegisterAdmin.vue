<script>
import userData from '@/data.json';
import TheMenu from '@/components/TheMenu.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
import CardUser from '@/components/CardUser.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheModal from '@/components/TheModal.vue';
import AppForm from '@/components/AppForm.vue';

export default {
  name: 'RegsiterAdmin',
  components: {
    'the-menu':TheMenu,
    "the-header": TheHeader,
    "icon-base":IconBase,
    'card-user': CardUser,
    'the-footer': TheFooter,
    "the-modal":TheModal,
    "app-form":AppForm
  },
  data(){
    return {
      isMenuOpen: false,
      users: userData.users,
      inputsList: [
        {
          id: 1,
          type:'list',
          listName: 'dependencesType',
          options: ['Centralizada', 'Descentralizada'], //cargar las opciones con la API
          labelText: 'Tipo de dependencia',
          name: 'dependenceType',
          placeholder:'Tipo de dependencia',
        },
        {
          id: 2,
          type:'list',
          listName: 'dependences',
          options: ['Oficilia Mayor', 'Servicios municipales', 'Recursos Humanos'], //cargar las opciones con la API desde la pinia store
          labelText: 'Dependencia',
          name: 'dependence',
          placeholder:'Selecciona dependencia',
        },
        {
          id: 3,
          type:'list',
          listName: 'list',
          options: ['Innovación', 'Transito municipal', 'Vialidad'], //cargar las opciones con la API desde la pinia store
          labelText: 'Area',
          name: 'area',
          placeholder:'Selecciona area (si existe)',
        }
      ],
      isModalOpen: false,
    };
  },
  methods:{
    handlerSubmit(e){
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        // validate selected options

    },
    changeModalState(){
      this.isModalOpen = !this.isModalOpen;
    },
  },
  mounted() {
    this.changeModalState();
  },
};
</script>

<template>
  <Teleport to="body">
      <the-modal srcImage="/src/assets/images/choose-dep.svg" :isOpen="isModalOpen">
        <template #message>Selecciona la dependencia para ver los empleados</template>

        <template #actions>
          <app-form
            :inputsList="inputsList" submitText="Continuar" submitSize="medium" @submit.prevent="handlerSubmit">
             <template #extra-button>
                <app-button
                typeBtn="button"
                typeStyle="fill"
                colorBtn="blue"
                sizeBtn="medium" @click="changeModalState">
                  Volver
                </app-button>
            </template>
          </app-form>
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
