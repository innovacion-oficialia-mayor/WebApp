<script>
// FIXME: This will replace with pinia store
import userData from '@/data.json';

import TheMenu from '@/components/TheMenu.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
import TheFooter from '@/components/TheFooter.vue';
import AppForm from '@/components/AppForm.vue';

export default {
  name: 'EditUser',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  components: {
    'the-menu':TheMenu,
    'the-header': TheHeader,
    'icon-base':IconBase,
    'the-footer': TheFooter,
    'app-form': AppForm,
  },
  data(){
    return {
      isMenuOpen: false,
    };
  },
  methods: {
     handlerEditSubmit(e){
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        // validate information of the user
    },
  },
  computed: {
    user() {
      return userData.users.find(user =>  user.id === this.id);
    },
    //FIXME: This will replace with pinia store and check if it's correct in the computed properties
    inputsList(){
      return [
        {
          id: 1,
          type:'text',
          labelText: 'Nombre',
          name: 'name',
          placeholder:'Nombre',
        },
        {
          id: 2,
          type:'text',
          labelText: 'Apellido Paterno',
          name: 'fatherLastName',
          placeholder:'Apellido Paterno',
        },
        {
          id: 3,
          type:'text',
          labelText: 'Apellido Materno',
          name: 'motherLastName',
          placeholder:'Apellido Materno',
        },
        {
          id: 4,
          type:'text',
          labelText: 'Correo electrónico',
          name: 'email',
          placeholder:'Correo electrónico',
          pattern:'[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
          value: this.user.email,
        },
        {
          id: 5,
          type: 'list',
          listName: 'gender',
          options: ['Masculino', 'Femenino'],
          labelText: 'Sexo',
          name: 'genders',
          placeholder: 'Selecciona el sexo'
        },
        {
          id: 6,
          type: 'text',
          labelText: 'Nómina',
          name: 'payroll',
          placeholder: 'Ingresa el número de nómina',
          value: this.user.nomina,
        },
        {
          id: 7,
          type: 'list',
          listName: 'payrollType',
          options: ['Catorcenal', 'Quincenal'],
          labelText: 'Tipo de nómina',
          name: 'payrollType',
          placeholder: 'Selecciona el tipo de nómina',
        },
        {
          id: 8,
          type: 'list',
          listName: 'payrollCategory',
          options: ['Base', 'Base/Sindicalizado'],
          labelText: 'Categoría de nómina',
          name: 'payrollCategory',
          placeholder: 'Categoría de nómina'
        },
        {
          id: 9,
          type: 'list',
          listName: 'job',
          options: ['Contratado', 'Independiente', 'Veterinario', 'Auxiliar'],
          labelText: 'Puesto',
          name: 'job',
          placeholder: 'Selecciona el puesto'
        },
        {
          id: 10,
          type: 'list',
          listName: 'levelJob',
          options: ['A1', 'B2', 'B3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
          labelText: 'Nivel de puesto',
          name: 'levelJob',
          placeholder: 'Nivel de puesto',
        },
        {
          id: 11,
          type: 'list',
          listName: 'dependences',
          options: ['Oficilia Mayor', 'Servicios municipales', 'Recursos Humanos'],
          labelText: 'Dependencia',
          name: 'dependence',
          placeholder: 'Selecciona dependencia',
          value: this.user.dependencia,
        },
        {
          id: 12,
          type: 'list',
          listName: 'area',
          options: ['Administración', 'Finanzas', 'Gestión', 'Informática', 'Recursos Humanos', 'Sistemas'],
          labelText: 'Área',
          name: 'area',
          placeholder: 'Selecciona área',
        },
        {
          id: 13,
          type: 'date',
          labelText: 'Fecha de ingreso',
          name: 'dateIn',
          placeholder: 'Fecha de ingreso',
        },
        {
          id: 14,
          type: 'list',
          listName: 'role',
          options: ['Administrador', 'Usuario', 'Enlace'],
          labelText: 'Rol de usuario',
          name: 'role',
          placeholder: 'Rol de usuario',
        }
      ];
    }

  },
};
</script>

<template>
  <the-header>
      <template #text>
        Editar empleado
      </template>
      <template #action>
        <icon-base name="menu" color="#1B1A2F" width="72" height="48" role="button" @click="isMenuOpen = !isMenuOpen"></icon-base>
      </template>
      <the-menu v-model="isMenuOpen"></the-menu>
  </the-header>

  <main class="register__wraper">
    <h3 class="register__advice">Edita los datos que requieras</h3>
    <app-form
      :inputsList="inputsList"
      submitText="Guardar" submitSize="medium"
      @submit.prevent="handlerEditSubmit" >
      <template #extra-button>
          <app-button
          typeBtn="button"
          typeStyle="fill"
          colorBtn="red"
          sizeBtn="medium"
          @click="$router.go(-1)">
            Cancelar
          </app-button>
      </template>
    </app-form>
  </main>

  <the-footer></the-footer>
</template>

<style scoped>
  .register__advice {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.64rem;
    margin-bottom: 15px;
    color: var(--color-text-soft);
  }
  .register__wraper {
    max-width: 600px;
    width: 80%;
    margin: 30px auto;
  }
</style>
