<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              v-text="item.title"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title
        v-text="title"
      />
      <v-spacer/>
      <v-switch
        v-model="darkTheme"
        class="mt-5"
        label="Change theme"
      />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ getYear }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      darkTheme: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Transaction page',
          to: '/'
        }
      ],
      title: 'Chart',
    }
  },
  async fetch () {
    await this.$store.dispatch('transactionStore/getRegions')
  },
  computed: {
    getYear () {
      return new Date().getFullYear()
    }
  },
  watch: {
    darkTheme (newVal) {
      this.$vuetify.theme.dark = newVal
    }
  },
}
</script>
