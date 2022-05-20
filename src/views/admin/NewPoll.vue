<script>
import TheMenu from '@/components/TheMenu.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
import TheFooter from '@/components/TheFooter.vue';
import AppForm from '@/components/AppForm.vue';

export default {
    components: {
        'the-menu': TheMenu,
        'the-header': TheHeader,
        'icon-base':IconBase,
        'the-footer': TheFooter,
        'app-form': AppForm,
    },
    data() {
        return {
            isMenuOpen: false,
        };
    },
    computed: {
        inputsList() {
            return [
                {
                    id: 1,
                    type: 'date',
                    labelText: 'Fecha de inicio',
                    placeholder: 'Fecha de inicio',
                    name: 'dateStart',
                },
                {
                    id: 2,
                    type: 'date',
                    labelText: 'Fecha de termino',
                    placeholder: 'Fecha de termino',
                    name: 'dateEnd',
                },
                {
                    id: 3,
                    type: 'number',
                    labelText: 'Porcentaje a responder',
                    placeholder: 'Porcentaje a responder',
                }
            ]
        },
    },

}
</script>
<template>
    <the-header>
      <template #text>
        Crear encuesta
      </template>
      <template #action>
        <icon-base name="menu" color="#1B1A2F" width="72" height="48" role="button" @click="isMenuOpen = !isMenuOpen"></icon-base>
      </template>
      <the-menu v-model="isMenuOpen"></the-menu>
    </the-header>

    <main class="poll__container">
        <h3 class="poll__title">Ingresa los datos para crear la encuesta</h3>
        <app-form
        :inputsList="inputsList"
        submitText="Crear" submitSize="medium"
        @submit.prevent="handlerPollSubmit" >
        <template #extra-button>
            <app-button
            typeBtn="button"
            typeStyle="fill"
            colorBtn="red"
            sizeBtn="medium"
            @click="$router.go(-1)">
                Cancelar
            </app-button>
        </template>
        </app-form>
    </main>

    <the-footer></the-footer>
</template>

<style scoped>
    .poll__container {
        width: 90%;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin: 30px auto;
        padding: 30px 22px;
        background-color: var(--color-back-modal);
    }

    .poll__title {
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 2.1rem;
    }

    input[type='date']::-webkit-calendar-picker-indicator {
        color: var(--color-primary-rose);
    }

</style>
