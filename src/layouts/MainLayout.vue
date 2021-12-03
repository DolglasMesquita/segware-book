<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-green">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Segware Book
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="500"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 130px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple @click="deslogar()">

              <q-item-section avatar>
                <q-icon right name="logout" />
              </q-item-section>

              <q-item-section>
                Sair
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top bg-green-10 text-center"  style="height: 130px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold"> {{ nome }} </div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  data() {
    return {
      nome: ''
    }
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

  methods: {
    deslogar() {
      sessionStorage.clear();
      window.location.href = '/#/login';
    }
  },

  mounted() {
    this.nome = sessionStorage.getItem('name')
  }
})
</script>
