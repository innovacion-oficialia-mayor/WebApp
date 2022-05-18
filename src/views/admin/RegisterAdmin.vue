<script>
import userData from '@/data.json';
import TheMenu from '@/components/TheMenu.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
import CardUser from '@/components/CardUser.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheModal from '@/components/TheModal.vue';
import AppForm from '@/components/AppForm.vue';

// function debounce for scroll
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

export default {
  name: 'RegsiterAdmin',
  components: {
    'the-menu':TheMenu,
    "the-header": TheHeader,
    "icon-base":IconBase,
    'card-user': CardUser,
    'the-footer': TheFooter,
    "the-modal":TheModal,
    "app-form":AppForm,
  },
  data(){
    return {
      isMenuOpen: false,
      isModalOpen: false,
      isPassModalOpen: false,
      isArrowUpVisible: false,
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
      passInputsList: [
        {
          id:4,
          type:'password',
          labelText: 'Contraseña',
          name: 'password',
          placeholder:'Contraseña',
        },
        {
          id:5,
          type:'password',
          labelText: 'Confirmar contraseña',
          name: 'passwordConfirm',
          placeholder:'Cponfirmar contraseña',
        },
      ],
    };
  },
  methods:{
    // handlers
    handlerFilterSubmit(e){
        const data = Object.fromEntries(new FormData(e.target));
        console.log(data);
        // validate selected options

    },
    handlerConfirmSubmit(e){
      const data = Object.fromEntries(new FormData(e.target));
      console.log(data);
      // validate the password before an action
    },
    handleScroll(){
      const POINT_OF_VIEW = 160;
      window.scrollY > POINT_OF_VIEW ? this.isArrowUpVisible = true : this.isArrowUpVisible = false;
    },
    // change state functions
    changeModalState(){
      this.isModalOpen = !this.isModalOpen;
    },
    passModalState(){
      this.isPassModalOpen = !this.isPassModalOpen;
    },
    makeScroll(){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted() {
    this.changeModalState();
    this.handleDebouncedScroll = debounce(this.handleScroll, 80);
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },

  beforeUnmount(){
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  },

  computed: {
    // computed properties
    arrowUpClass(){
      return this.isArrowUpVisible ? 'visible' : '';
    }
  }
};
</script>

<template>
  <!-- First modal to select dependecies -->
  <Teleport to="body">
      <the-modal srcImage="/src/assets/images/choose-dep.svg" :isOpen="isModalOpen">
        <template #message>Selecciona la dependencia para ver los empleados</template>

        <template #actions>
          <app-form
            :inputsList="inputsList" submitText="Continuar" submitSize="medium" @submit.prevent="handlerFilterSubmit">
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

    <!-- Second modal to unsubscribe users -->
    <Teleport to="body">
      <the-modal srcImage="/src/assets/images/confirm-pass.svg" :isOpen="isPassModalOpen">
        <template #message>Ingresa tu contraseña para continuar</template>

        <template #actions>
          <app-form
            :inputsList="passInputsList" submitText="Confirmar" submitSize="medium" @submit.prevent="handlerConfirmSubmit">
             <template #extra-button>
                <app-button
                typeBtn="button"
                typeStyle="fill"
                colorBtn="blue"
                sizeBtn="medium" @click="passModalState">
                  Volver
                </app-button>
            </template>
          </app-form>
        </template>
      </the-modal>
  </Teleport>

  <!-- button with icon to rregister a new user -->

  <!-- header -->
  <the-header>
      <template #text>
        Registro y Consulta
      </template>
      <template #action>
        <icon-base name="menu" color="#1B1A2F"  role="button" @click="isMenuOpen = !isMenuOpen"></icon-base>
      </template>
      <the-menu v-model="isMenuOpen"></the-menu>
  </the-header>

  <!-- change dependencies button and searcher -->
  <section class="register__search-set">
    <!-- FIXME: This will replace for a component or for a diffeerent structure -->
    <input type="text" aria-label="search" placeholder="Buscar..." class="register__search-input">

    <div class="register__info">
      <p class="register__stats">Oficilia Mayor (321)</p>
      <div class="register__actions">
         <app-button
        typeBtn="button"
        typeStyle="fill"
        colorBtn="rose"
        sizeBtn="small"
        @click="changeModalState" class="register__button-link" >
            Cambiar dependencia
        </app-button>
        <app-button
          :to="{name:'addUser'}"
          colorBtn="green"
          typeStyle="fill"
          sizeBtn="small" class="register__button-link">
            Agregar usuario
        </app-button>
      </div>
    </div>
  </section>

  <!-- Content where the users loading -->
  <section class="register__content">
    <card-user toRoute="admin"
    :userActive="user.activo"
    v-for="user in users" :key="user.id"
    @user-change="passModalState">
      <template #username> {{user.name}} </template>
      <template #email> {{user.email}} </template>
      <template #nomina> Nómina: {{user.nomina}} </template>
      <template #dependencia> {{user.dependencia}} </template>
      <template #status v-if="user.activo"> Activo </template>
      <template #status v-else> Inactivo </template>
    </card-user>
  </section>

  <!-- icon to go up again -->
  <div class="register__wrapper-to-up">
    <div :class="['register__to-up', arrowUpClass]">
      <icon-base name="arrowUp" color="#fff" role="button" @click="makeScroll"></icon-base>
    </div>
  </div>
  <!-- footer -->
  <the-footer></the-footer>
</template>


<style scoped>
  svg {
    width: 20px;
  }

  /* section to do some actions and search */
  .register__search-set {
    width: 90%;
    margin: 20px auto;
  }

  .register__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .register__stats {
    flex: 1;
    font-size: 1rem;
  }

  .register__actions {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .register__actions > .register__button-link:first-child {
    margin-right: 15px;
  }

  .register__button-link {
    padding: 0.9rem;
    line-height: normal;
    font-weight: 500;
    font-size: 1.1rem;
  }

  /* section where it showed the users's cards */
  .register__content {
    width: 90%;
    margin: 30px auto;
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    gap: 25px 20px;
  }

  /* control to back up */
  .register__wrapper-to-up{
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: right;
    visibility: hidden;
  }

  .register__to-up {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    position: relative;
    display: inline-flex;
    justify-content: center;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    align-items: center;
    user-select: none;
    cursor: pointer;
    transition: all 400ms ease-in-out;
    visibility: hidden;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.35);
  }

  .register__to-up.visible {
    visibility: visible;
    opacity: 1;
    margin-bottom: 76px;
  }

  /* searcher, maybe this may be deleated */
  .register__search-input {
    width: 100%;
    margin: 20px 0;
    font-size: 1.2rem;
    border: 2px solid var(--color-primary-rose);
    border-radius: 8px;
    padding: 12px 8px;
    color: var(--color-text);
    background-color: transparent;
    outline: 0;
    transition: 250ms ease-in-out;
  }

</style>
