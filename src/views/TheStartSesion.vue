<script>
import TheStartItem from '@/components/TheStartItem.vue';

export default {
    name: "TheStart",
    componets: {
        'the-start-item':TheStartItem,
    },
    components: { TheStartItem }
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
      <router-link to="">Soy Administrador</router-link>
      <router-link to="">Soy Servidor Público</router-link>
    </template>
    <picture>
      <img class="start__logo" src="@/assets/logo.png" alt="Logo de Celaya">
    </picture>
  </the-start-item>
</template>

<style scoped>
</style>
