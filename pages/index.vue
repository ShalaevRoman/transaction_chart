<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-card class="py-4 d-flex justify-center flex-column">
        <v-card-title>Transaction schedule for the region</v-card-title>
        <ChartForRegion/>
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
