<script>
import TheStartItem from '@/components/TheStartItem.vue';

export default {
    name: "TheStartUser",
    components: { "the-start-item":TheStartItem }
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
        <app-link :to="{name: 'start'}" class="start__link">Iniciar sesión</app-link>
      </template>
        <img class="start__logo" src="@/assets/logo.png" alt="Logo de Celaya">
    </the-start-item>
  </main>
</template>

<style scoped>
</style>
