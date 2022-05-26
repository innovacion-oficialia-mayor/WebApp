<script>
import TheMenu from '@/components/TheMenu.vue';
import TheHeader from '@/components/TheHeader.vue';
import IconBase from '@/components/IconBase.vue';
import TheFooter from '@/components/TheFooter.vue';
import AppDownload from '@/components/AppDownload.vue';
import TheModal from '@/components/TheModal.vue';


export default {
    name: 'DownloadAdmin',
    components: {
        'the-menu': TheMenu,
        'the-header': TheHeader,
        'icon-base':IconBase,
        'the-footer': TheFooter,
        'app-download': AppDownload,
        "the-modal":TheModal,

    },
    data() {
        return {
            isMenuOpen: false,
            // data from the polls and pass to the app-download component as a prop
        };
    },

};
</script>

<template>

    <!-- Modal messages -->
    <Teleport to="body">
      <the-modal srcImage="/src/assets/images/ok.svg">
        <template #message>La encuesta fue creada satisfactoriamente</template>

        <template #actions>
            <app-button
                typeBtn="button"
                typeStyle="fill"
                colorBtn="green"
                sizeBtn="medium">
                  De acuerdo
            </app-button>
        </template>
      </the-modal>
    </Teleport>

    <Teleport to="body">
      <the-modal srcImage="/src/assets/images/error.svg">
        <template #message>¡Oh no! Algo salió mal 😔</template>

        <template #actions>
            <app-button
                typeBtn="button"
                typeStyle="fill"
                colorBtn="red"
                sizeBtn="medium">
                  De acuerdo
            </app-button>
        </template>
      </the-modal>
    </Teleport>

    <!-- HEADER -->
    <the-header>
      <template #text>
        Informes
      </template>
      <template #action>
        <icon-base name="menu" color="#1B1A2F" width="72" height="48" role="button" @click="isMenuOpen = !isMenuOpen"></icon-base>
      </template>
      <the-menu v-model="isMenuOpen"></the-menu>
    </the-header>

    <!-- Main content -->
    <main class="download__wraper">
        <div class="download__title-container">
            <h1 class="download__title">Informes Clima Laboral 2023</h1>
        </div>

        <app-download sourcefile="/src/assets/images/logo-small.png" >
            <template #info>
                Descarga el informe individualmente para cada dependencia.
            </template>
        </app-download>

         <app-download sourcefile="/src/assets/images/logo-small.png" >
            <template #info>
                Descarga el informe individual de cada area (si corresponde).
            </template>
        </app-download>
    </main>

    <!-- footer -->
    <the-footer></the-footer>
</template>

<style scoped>
    .download__wraper{
        width: 90%;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }
    .download__title-container {
        display: flex;
        justify-content: center;
        border-bottom: 4px solid var(--color-primary-blue);
    }

    .download__title {
        font-size: 1.8rem;
        font-weight: 700;
    }
</style>
