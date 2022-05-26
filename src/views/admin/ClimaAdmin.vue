<script>
import TheHeader from '@/components/TheHeader.vue';
import TheMenu from '@/components/TheMenu.vue';
import IconBase from '@/components/IconBase.vue';
import TheFooter from '@/components/TheFooter.vue';
import AppAcordion from '@/components/AppAccordion.vue';
import AppAccordionItem from '@/components/AppAccordionItem.vue';
import TheModal from '@/components/TheModal.vue';
import AppForm from '@/components/AppForm.vue';



    export default {
        name: 'ClimaAdmin',
        components: {
            'the-header': TheHeader,
            'the-menu': TheMenu,
            'icon-base': IconBase,
            'the-footer': TheFooter,
            'app-acordion': AppAcordion,
            "the-modal":TheModal,
            'app-accordion-item':AppAccordionItem,
            "app-form":AppForm,
        },
        data(){
            return {
                isMenuOpen: false,
                isPassModalOpen: false,
                // data from the polls
                polls: [
                    {
                        id: 1,
                        title: 'Encuesta Clima Laboral 2024',
                        porcentage: 12,
                        currentPorcentage: 20,
                        active: true,
                    },
                    {
                        id: 2,
                        title: 'Encuesta Clima Laboral 2023',
                        porcentage: 10,
                        currentPorcentage: 8,
                        active: true,
                    },
                    {
                        id: 3,
                        title: 'Encuesta Clima Laboral 2022',
                        porcentage: 40,
                        currentPorcentage: 50,
                        active: false,
                    },
                ],
                   passInputsList: [
                    {
                        id:1,
                        type:'password',
                        labelText: 'Contraseña',
                        name: 'password',
                        placeholder:'Contraseña',
                    },
                    {
                        id:2,
                        type:'password',
                        labelText: 'Confirmar contraseña',
                        name: 'passwordConfirm',
                        placeholder:'Cponfirmar contraseña',
                    },
                ],
            };
        },
        methods: {
            passModalState(){
                this.isPassModalOpen = !this.isPassModalOpen;
            },
             handlerConfirmSubmit(e){
                const data = Object.fromEntries(new FormData(e.target));
                console.log(data);
                // validate the password before an action
            },
        }
    };
</script>

<template>

    <!-- Modal to confirm password -->
     <Teleport to="body">
      <the-modal srcImage="/src/assets/images/confirm-pass.svg" :isOpen="isPassModalOpen">
        <template #message>Ingresa tu contraseña para continuar</template>

        <template #actions>
          <app-form
            :inputsList="passInputsList" submitText="Confirmar" submitSize="medium" @submit.prevent="handlerConfirmSubmit">
             <template #extra-button>
                <app-button
                typeBtn="button"
                typeStyle="fill"
                colorBtn="blue"
                sizeBtn="medium" @click="passModalState">
                  Volver
                </app-button>
            </template>
          </app-form>
        </template>
      </the-modal>
    </Teleport>

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
        <section class="clima__polls">
            <app-acordion>
                <app-accordion-item v-for="poll in polls" :key="poll.key">
                    <template #title>
                        <h3>{{poll.title}}</h3>
                    </template>

                    <template #content>
                        <div class="poll__content__wrapper">
                            <p>El {{poll.porcentage}}% de los empleados ha respondido</p>
                            <div class="poll__status">
                                <!-- Poll available -->
                                <div v-if="poll.active" class="poll__status-wrapper">
                                    <p class="poll__status__text-open">Encuesta Abierta</p>
                                    <app-button v-if="poll.active"
                                    typeBtn="button"
                                    typeStyle="unfill"
                                    colorBtn="red"
                                    sizeBtn="small"
                                    class="poll__status-btn"  @click="passModalState">
                                        Eliminar
                                    </app-button>
                                </div>
                                <!-- Poll ended -->
                                <div v-else class="poll__status-wrapper">
                                    <p class="poll__status__text">Encuesta Cerrada</p>
                                    <app-button
                                    :to="{name:'download'}"
                                    colorBtn="yellow"
                                    typeStyle="unfill"
                                    sizeBtn="small" class="poll__status-btn">
                                        Ver Informe
                                    </app-button>
                                </div>
                            </div>
                        </div>
                    </template>
                </app-accordion-item>
            </app-acordion>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 3px solid var(--color-primary-blue);
}

.clima__button-link {
    max-width: 180px;
}

.clima__polls {
    margin: 25px 0;
}

/* Title accordion */

/* Content accordion */
.poll__content__wrapper {
    padding: 15px 0;
}

.poll__status {
    margin-top: 20px;
}

.poll__status-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.poll__status__text-open {
    color: var(--color-secundary-green);
    font-size: 1.2rem;
}

.poll__status__text-close {
    color: var(--color-secundary-red);
    font-size: 1.2rem;
}


.poll__status-btn {
    padding: 4px 8px;
    text-shadow: none;
}
</style>
