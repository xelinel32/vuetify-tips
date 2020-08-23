<template>
  <div class="card">
    <h1 class="display-2">Cards</h1>
    <v-card class="mx-auto brown white--text" max-width="400">
      <v-card-title>
        <v-icon large left>headset</v-icon>
        <span class="title black--text font-weight-bold">Title</span>
      </v-card-title>
      <v-card-subtitle>
        Subtitle
      </v-card-subtitle>
      <v-card-text class="headline font-weight-bold pa-4 purple">
        Vue Rocks!
      </v-card-text>
      <v-card-actions>
        <v-btn dark class="orange" tile>Click</v-btn>
        <v-spacer></v-spacer>
        <v-btn outlined color="black">Click</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style lang="scss"></style>
