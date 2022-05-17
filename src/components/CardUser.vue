<script>
export default {
    name: 'CardUser',
    props: {
        //Cambian los params pero no la ruta
        toRoute: {
            type: String,
            required: true
        },
        userActive: {
            type: Boolean,
            default: false
        },
    },
    computed: {
        isUserDesactive() {
            return this.userActive ? '' : 'desactive';
        }
    }

}
</script>

<template>
    <article class="card__container">
        <div class="card__info">
            <h2 class="card__username">
                <slot name="username"></slot>
            </h2>
            <p class="card__email">
                <slot name="email"></slot>
            </p>
            <p class="card__nomina">
                <slot name="nomina"></slot>
            </p>
            <p class="card__dependencia">
                <slot name="dependencia"></slot>
            </p>
        </div>
        <div class="card__actions">
            <p :class="['card__status', isUserDesactive]">
                <slot name="status"></slot>
            </p>
            <app-button
            :to="{name:`${toRoute}`}"
            colorBtn="rose"
            typeStyle="unfill"
            sizeBtn="small" class="card__edit-link">
                Editar
            </app-button>
            <app-button
            to=""
            colorBtn="red"
            typeStyle="unfill"
            sizeBtn="medium" :class="['card__edit-link', isUserDesactive]"
            v-if="userActive" @click="$emit('user-change')">
                Dar de baja
            </app-button>
            <app-button
            to=""
            colorBtn="red"
            typeStyle="unfill"
            sizeBtn="medium" :class="['card__edit-link', isUserDesactive]"
            v-else>
                Dar de alta
            </app-button>
        </div>
    </article>
</template>

<style scoped>
    .card__container {
        width: 80%;
        display: flex;
        flex-direction: column;
        max-width: 380px;
        margin: 15px auto;
        background-color: var(--color-back-modal);
    }
    .card__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: initial;
        gap: 9px;
        padding: 10px;
    }

    .card__info > p {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.58rem;
    }
    .card__username {
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2.11rem;
    }

    .card__actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }

    .card__status {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.58rem;
        color: var(--color-secundary-green);
    }

    .card__status.desactive {
        color: var(--color-secundary-red);
    }

    .card__edit-link {
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 1.58rem;
        padding: 4px 13px;
        border-radius: 18px;
        text-shadow: none;
    }

    .card__edit-link.desactive {
        color: var(--color-secundary-yellow);
        border: 2px solid var(--color-secundary-yellow);
    }


</style>
