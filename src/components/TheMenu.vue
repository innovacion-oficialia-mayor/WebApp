<script>
import IconBase from '@/components/IconBase.vue';
export default {
    name: "TheMenu",
    props: {
      modelValue: {
        type: Boolean,
        default: false
      }
    },
    components: {
      "icon-base": IconBase,
    },
    computed:{
      toggleMenu(){
        return this.modelValue ? 'is-active' : '';
      }
    }
};
</script>

<template>
  <div :class="['the-menu__container', toggleMenu]">
    <div class="the-menu__admin">
      <figure class="the-menu__admin-image-wrapper">
        <img src="https://minimaltoolkit.com/images/randomdata/male/40.jpg" alt="Imagen de administrador" class="the-menu__admin-image">
      </figure>
      <div class="the-menu__admin-info">
        <h3 class="the-menu__admin-name">Jonathan</h3>
        <p class="the-menu__admin-mail">jonathan@celaya.gob.mx</p>
      </div>
    </div>
    <ul class="the-menu__list">
      <li class="the-menu__item">
        <app-button :to="{name:'dashboard'}" typeStyle="no-style" class="the-menu__app-button">
          <icon-base
          name="home"
          color="#fff"
          role="button">
          </icon-base>
          <span class="the-menu__item-text">
            Home
          </span>
        </app-button>
      </li>
      <li class="the-menu__item">
        <app-button :to="{name:'register'}" typeStyle="no-style" class="the-menu__app-button">
          <icon-base name="register" color="#fff" role="img" class="the-menu__icon-base"></icon-base>
          <span class="the-menu__item-text">
            Registro y consulta
          </span>
        </app-button>
      </li>
      <li class="the-menu__item">
        <app-button :to="{name:'clima'}" typeStyle="no-style" class="the-menu__app-button">
          <icon-base name="weather" color="#fff" role="img" class="the-menu__icon-base"></icon-base>
          <span class="the-menu__item-text">
            Clima Laboral
          </span>
        </app-button>
      </li>
      <li class="the-menu__item">
        <app-button :to="{name:'dashboard'}" typeStyle="no-style" class="the-menu__app-button">
          <icon-base name="performance" color="#fff" role="img" class="the-menu__icon-base"></icon-base>
          <span class="the-menu__item-text">
            Evaluación de desempeño
          </span>
        </app-button>
      </li>
      <li class="the-menu__item">
        <app-button :to="{name:'admin'}" typeStyle="no-style" class="the-menu__app-button">
          <icon-base name="logout" color="#fff" role="img" class="the-menu__icon-base"></icon-base>
          <span class="the-menu__item-text">
            Cerrar sesión
          </span>
        </app-button>
      </li>
    </ul>
    <icon-base name="close" color="#fff" role="img" class="the-menu__icon-base" @click="$emit('update:modelValue', false)"></icon-base>
  </div>
</template>

<style scoped>
.the-menu__container {
  width: 100%;
  height: 100%;
  padding: 25px 10px;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  transform: translateY(-110%);
  transition: transform 500ms ease-in;
  background-color: var(--color-back-modal);
}

.the-menu__container.is-active {
  transform: translateY(0);
}

.the-menu__admin {
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.the-menu__admin-image-wrapper {
  display: inline-flex;
  max-width: 100px;
  width: 25%;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
}

.the-menu__admin-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.the-menu__admin-info {
  color: var(--color-text);
}

.the-menu__list {
  padding: 0;
  margin: 30px 0;
  list-style-type: none;
}

.the-menu__item {
  width: 100%;
  margin: 20px 0;
  transition: all ease-in-out 250ms;
}

.the-menu__item:hover {
  background-color: var(--color-primary-blue);
}

.the-menu__app-button {
  justify-content: flex-start;
}

.the-menu__icon-base {
  width: 20px;
}

.the-menu__container > .the-menu__icon-base {
  width: 15px;
  position: absolute;
  bottom: 5%;
  right: 5%;
}

.the-menu__item-text {
  margin-left: 10px;
  font-size: 1.6rem;
}
</style>
