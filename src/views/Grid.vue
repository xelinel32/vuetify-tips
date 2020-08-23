<template>
  <div class="grid">
    <h1 class="display-2 text-uppercase">Grid</h1>
    <v-card class="mt-5 mb-8">
      <v-card-text>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12">
              <v-card class="pa-2" outlined tile>Column</v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4">
              <v-card class="pa-2" outlined tile>Column</v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="pa-2" outlined tile>Column</v-card>
            </v-col>
            <v-col cols="4">
              <v-card class="pa-2" outlined tile>Column</v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'grid',
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid red;
}
.row {
  border: 1px solid green;
}
.col {
  border: 1px solid brown;
}
</style>
