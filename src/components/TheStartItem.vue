<script>
export default {
  name: 'TheStartItem',
};
</script>

<template>
  <div class="item__container">
    <picture class="item__image-wrapper">
      <slot name="image"></slot>
    </picture>
    <div class="start__info">
       <h2 class="start__title">
         <slot name="info-title"></slot>
        </h2>
        <p class="start__disclaimer">
          <slot name="info-disclaimer"></slot>
        </p>
    </div>
    <div class="start__actions">
      <slot name="actions"></slot>
    </div>
    <picture class="start__logo-wrapper">
      <slot></slot>
    </picture>
  </div>
</template>

<style scoped>

.item__container{
  width: 90%;
  margin: 30px auto;
  /* background-color: teal; */
}

.item__image-wrapper {
  display: block;
  width: 85%;
  max-width: 600px;
  margin: 0 auto;
}

.start__info {
  text-align: center;
}

.start__title{
  font-size: 2.6rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.start__disclaimer{
  font-size: 1.2rem;
}

.start__actions {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 25px 0;
}

.start__logo-wrapper {
  display: block;
  margin: 0 auto;
  width: 85%;
  max-width: 600px;
}

</style>
