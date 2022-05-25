<script>
import AppInput from '@/components/AppInput.vue';
import IconBase from '@/components/IconBase.vue';
export default {
    name: 'AppDownload',
    components: {
        'app-input': AppInput,
        'icon-base': IconBase,
    },
    props: {
        sourcefile: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            input: {
                id: 1,
                type:'list',
                listName: 'list',
                options: ['Innovación', 'Transito municipal', 'Vialidad'], //cargar las opciones con la API desde la pinia store
                labelText: 'Selecciona una opción',
                name: 'download',
                placeholder:'Selecciona una opcion',
            },
            };
        },
}
</script>

<template>
    <div class="download__container">
        <p class="download__info">
           <slot name="info"></slot>
        </p>
        <app-input class="download__input"
        :currentInput="input"></app-input>
        <a :href="sourcefile" download>
            <app-button
            colorBtn="green"
            typeStyle="fill"
            sizeBtn="medium" class="download__button">
            Descargar
            <icon-base name="download" color="#ffff"  role="button"></icon-base>
        </app-button>
        </a>
    </div>
</template>

<style scoped>
    .download__container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .download__info {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .download__input {
        width: 100%;
    }

    a {
        display: inline-block;
        margin: 0 auto;
        text-decoration: none;
    }
    .download__button {
        display: flex;
        gap: 20px;
        align-items: center;
    }
</style>
