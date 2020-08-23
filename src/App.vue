<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" absolute temporary dark right>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item
            v-for="(link, i) in menuLinks"
            :key="i"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark class="deep-purple">
      <v-toolbar-title>Vuetify Test Options</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="(link, i) in menuLinks"
          :key="i"
          router
          :to="link.route"
          text
          dark
          small
          class="white--text"
          >{{ link.name }}
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-sm-and-up">
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app absolute>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Template</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    menuLinks: [
      {
        name: 'Home',
        route: '/',
      },
      {
        name: 'Typography',
        route: 'typography',
      },
      {
        name: 'Spacing',
        route: 'spacing',
      },
      {
        name: 'Buttons',
        route: 'buttons',
      },
      {
        name: 'Grid',
        route: 'grid',
      },
      {
        name: 'Card',
        route: 'card',
      },
    ],
  }),
}
</script>
