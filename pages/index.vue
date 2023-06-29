<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8">
      <v-card class="py-4 d-flex justify-center flex-column">
        <v-card-title>Transaction schedule for the region</v-card-title>
        <SelectRegions />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>
