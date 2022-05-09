<script>
import AppLink from './AppLink.vue';
export default {
    name: 'TheFooter',
    components: {
        'app-link': AppLink
    },
}
</script>

<template>
<footer class="footer">
    <div class="footer__text">
        <p class="footer__bold">Municipio de Celaya © 2022</p>
        <p>Todos los derechos reservados</p>
    </div>
    <div class="footer__image">
        <app-link :to="{name: 'dashboard'}" class="footer__link">
            <picture>
                <source srcset="@/assets/logo-big.png" media="(min-width: 600px)">
                <img class="footer__logo" src="@/assets/logo.png" alt="imagen de celaya">
            </picture>
        </app-link>
    </div>
</footer>
</template>

<style scoped>
.footer{
    display: flex;
    padding: 11px 14px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-text);
    color: var(--color-background);
}

.footer__text {
    width: 60%;
    font-size: 1.1rem;
    font-weight: 600;
}

.footer__image {
    width: 40%;
}

picture {
    display: inline-block;
}

.footer__bold {
    font-weight: 800;
}

.footer__link {
    display: block;
    padding: 0;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    cursor: pointer;
}
.footer__logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
