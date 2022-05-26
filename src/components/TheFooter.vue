<script>
export default {
    name: 'TheFooter',
};
</script>

<template>
    <footer class="footer">
        <div class="footer__text">
            <p class="footer__text-bold">Municipio de Celaya © 2022</p>
            <p>Todos los derechos reservados</p>
        </div>
        <div class="footer__image">
            <app-button
            :to="{name:'dashboard'}"
            typeStyle="no-style" class="footer__link">
                <picture class="footer__logo-wrapper">
                    <img class="footer__logo" src="@/assets/logo.png" alt="Imagen de celaya">
                </picture>
            </app-button>
        </div>
    </footer>
</template>

<style scoped>
.footer{
    width: 100%;
    display: flex;
    padding: 10px 14px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-text);
    color: var(--color-background);
    position: absolute;
    bottom: 0;
    height: 68px;
}

.footer__text {
    width: 60%;
    margin-right: 10px;
    font-size: 1rem;
    font-weight: 600;
}
.footer__text-bold {
    font-weight: 800;
}

.footer__image {
    width: 40%;
    max-width: 200px;
    min-width: 120px;
}

.footer__link {
    padding: 0;
}

.footer__logo-wrapper {
    display: inline-block;
}

.footer__logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
