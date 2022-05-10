<script>
import AppLink from '@/components/AppLink.vue';
export default {
    name: 'CardPool',
    components: {
        'app-link': AppLink
    },
    props: {
        imgpath: {
            type: String,
            required: true
        },
        active: {
            type: String,

        },

    }
}
</script>

<template>
    <article class="card__container">
        <figure class="card__wrapimage">
            <img class="card__image" :src="imgpath" alt="Imagen de la encuesta">
        </figure>
        <div class="card__info">
            <h2 class="card__title">
                <slot name="title"></slot>
            </h2>
            <p class="card__disclaimer">
                <slot name="disclaimer"></slot>
            </p>
            <app-link :to="{name: 'dashboard'}" class="access__link" :class="active" >Acceder</app-link>
        </div>
    </article>
</template>

<style scoped>
    .card__container {
        display: grid;
        grid-template-columns: 40% 60%;
        grid-auto-rows: minmax(auto, 170px);
        gap: 8px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 2px solid var(--color-primary-rose);
        padding: 14px 8px;
    }

    .card__wrapimage {
        max-width: 200px;
    }

    .card__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card__info {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .card__title {
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 2.1rem;
    }

    .card__disclaimer {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.65rem;
    }

    .access__link {
        width: 30%;
        margin-top: 9px;
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1rem;
        border-radius: 5px;

    }

    .no {
        background-color: var(--color-unactive-rose);
    }



</style>
