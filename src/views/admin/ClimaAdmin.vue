<script>
import TheHeader from '@/components/TheHeader.vue';
import TheMenu from '@/components/TheMenu.vue';
import IconBase from '@/components/IconBase.vue';
import TheFooter from '@/components/TheFooter.vue';
    export default {
        name: 'ClimaAdmin',
        components: {
            'the-header': TheHeader,
            'the-menu': TheMenu,
            'icon-base': IconBase,
            'the-footer': TheFooter,
        },
        data(){
            return {
                isMenuOpen: false,
                // data from the polls
            };
        },
    };
</script>

<template>
    <!-- header -->
    <the-header>
        <template #text>
            Clima Laboral
        </template>
        <template #action>
            <icon-base name="menu" color="#1B1A2F"  role="button" @click="isMenuOpen = !isMenuOpen"></icon-base>
        </template>
        <the-menu v-model="isMenuOpen"></the-menu>
    </the-header>

    <!-- Accordion polls -->
    <main class="clima__accordion-polls">
        <section class="clima__accordion-info">
            <h2>Historial de Encuestas</h2>
            <app-button
              :to="{name:'newpoll'}"
              colorBtn="rose"
              typeStyle="fill"
              sizeBtn="small" class="clima__button-link">
                Agregar nueva encuesta
            </app-button>
        </section>
        <section class="clima__accordion-polls">

        </section>
    </main>

    <!-- Footer -->
    <the-footer></the-footer>
</template>


<style scoped>

.clima__accordion-polls {
    margin: 25px auto;
    width: 90%;
}
.clima__accordion-info {
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid var(--color-primary-blue);
}

.clima__button-link {
    max-width: 180px;
}

</style>
