<script>
import TheStartItem from '@/components/TheStartItem.vue';

export default {
    name: "StartSesion",
    components: { "the-start-item":TheStartItem }
};
</script>

<template>
  <main class="start__main">
    <the-start-item>
      <template #image>
        <img class="start__image" src="@/assets/images/start-choose.svg" alt="Imagen de bienvenida">
      </template>
      <template #info-title>
        Elige tu sesión
      </template>
       <template #info-disclaimer>
        Elige sí eres administrador o servidor público para continuar
      </template>
      <template #actions>
        <app-link :to="{name: 'admin'}" class="start__link">Soy Administrador</app-link>
        <app-link :to="{name: 'user'}" class="start__link">Soy Servidor Público</app-link>
      </template>
        <img class="start__logo" src="@/assets/logo.png" alt="Logo de Celaya">
    </the-start-item>
  </main>
</template>

<style scoped>

.start__main {
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
}

.start__image, .start__logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.start__link{
  width: 60%;
  min-height: 65px;
}
</style>
