<script>
export default {
    name: "TheHeader",
};
</script>

<template>
  <header class="the-header">
      <app-button
      :to="{name:'dashboard'}"
      typeStyle="no-style"
      class="the-header__app-button">
          <picture class="the-header__logo-wrapper">
          <!-- <source media="(min-width: )" srcset=""> -->
            <img src="@/assets/images/logo-small.png" alt="Logo de Celaya" class="the-header__logo">
          </picture>
      </app-button>
      <h2 class="the-header__title">
          <slot name="text"></slot>
      </h2>
      <div class="the-header__action">
        <slot name="action"></slot>
      </div>
      <slot></slot>
  </header>
</template>

<style scoped>
  .the-header{
    width: 100%;
    min-height: 80px;
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    color: var(--color-background);
  }

  .the-header__app-button {
    padding: 0;
  }

  .the-header__logo-wrapper, .the-header__action{
    display: flex;
    align-items: center;
  }

  .the-header__logo {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .the-header__title {
    font-size: 1.6rem;
    font-weight: 800;
  }

</style>
