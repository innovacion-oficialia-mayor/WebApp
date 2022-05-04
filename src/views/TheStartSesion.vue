<script>
import TheStartItem from '@/components/TheStartItem.vue';
import AppLink from '../components/AppLink.vue';


export default {
    name: "TheStart",
    componets: {
        'the-start-item':TheStartItem,
        'app-link':AppLink

    },
    components: { TheStartItem, AppLink }
};
</script>

<template>
  <the-start-item>
    <template #image>
      <img class="start__image" src="@/assets/images/start-choose.svg" alt="Imagen de bienvenida">
    </template>
     <template #info>
      <h2 class="start__title">Elige tu sesión</h2>
      <p class="start__disclaimer">Elige sí eres administrador o servidor público para continuar</p>
    </template>
    <template #actions>
      <app-link :to="{name: 'admin'}">Soy Administrador</app-link>
      <app-link :to="{name: 'user'}">Soy Servidor Público</app-link>
    </template>
    <picture>
      <img class="start__logo" src="@/assets/logo.png" alt="Logo de Celaya">
    </picture>
  </the-start-item>
</template>

<style scoped>
</style>
