<script>
export default {
  name: 'TheModal',
  props: {
    srcImage: {
      type: String,
      default: '',
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal(){
      this.$refs.dialog.close();
      // active scroll again
      document.documentElement.style.overflow = "auto";
    },
    openModal(){
      // prevenet scroll
      document.documentElement.style.overflow = "hidden";
      this.$refs.dialog.showModal();
    }
  },
  watch: {
    isOpen(newVal) {
      newVal ? this.openModal() : this.closeModal();
    },
  }
};
</script>

<template>
  <div class="the-modal__container">
    <dialog class="the-modal__dialog" ref="dialog">
      <figure class="the-modal__image-wrapper" v-if="srcImage">
        <img :src="srcImage" alt="Imagen del modal" class="the-modal__image">
      </figure>
      <p class="the-modal__message">
        <slot name="message"></slot>
      </p>

      <div class="the-modal__actions">
        <slot name="actions"></slot>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
.the-modal__dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: var(--color-back-modal);
  border: 0;
  padding: 20px 30px;
  border-radius: 8px;
  min-height: 64px;
}

.the-modal__dialog::backdrop {
  background: rgba(0,0,0,.55);
}

.the-modal__image-wrapper {
  width: 80%;
  max-width: 250px;
  margin: 0 auto;
}
.the-modal__image{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.the-modal__message {
  margin-top:10px;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text);
}
/* Styles to modal acttions */
.the-modal__actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 20px 0;
}
</style>
