<template>
  <div class="buttons">
    <h3>Buttons / Toolbar</h3>
    <v-row>
      <v-col cols="12">
        <v-btn small text>Button</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn x-small tile elevation="15">Button</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn large rounded>Button</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn x-large outlined>Button</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn x-large depressed>Button</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn x-large block elevation="15">Button</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn class="warning red--text" elevation="15" fab
          ><v-icon>person</v-icon></v-btn
        >
      </v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col>
        <v-toolbar class="deep-purple accent-4" dense dark>
          <v-toolbar-title>Hello</v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
}
</script>

<style></style>
