<template>
  <div class="home">
    <v-sheet :height="sheetHeight">
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <h1 class="display-3 text--lighten-1">This is home page</h1>
        </v-row>
      </v-container>
    </v-sheet>
    <v-container class="mb-12">
      <v-row>
        <v-col sm="10" offset-sm="1" md="8" offset-md="2">
          <h2>
            Popular Product
            <v-btn to="store" color="primary" small text>View All</v-btn>
          </h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="10" offset-sm="1" md="8" offset-md="2">
          <v-row>
            <v-col sm="6" md="4">card</v-col>
            <v-col sm="6" md="4">card</v-col>
            <v-col sm="6" md="4">card</v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '200px'
        case 'sm':
          return '300px'
        case 'md':
          return '300px'
        case 'lg':
          return '300px'
        case 'xl':
          return '350px'
      }
      return '300px'
    },
  },
}
</script>
