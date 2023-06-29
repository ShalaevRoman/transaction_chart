<template>
  <v-container>
    <v-select
      v-model="select"
      :items="regionList"
      item-text="regionName"
      item-value="regionCode"
      class="ma-2"
      label="List of regions"
      background-color="#363636"
      hide-details
      solo
      @change="getTransaction()"
    ></v-select>
    <p
      class="red--text"
      v-if="isAvailableRegion"
    >
      Data for this region is not available
    </p>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SelectRegions',
  data() {
    return {
      select: '',
      isAvailableRegion: false
    }
  },
  computed: {
    ...mapGetters('transactionStore', ['regionList'])
  },
  methods: {
    getTransaction () {
      if (this.select === 1) {
        this.isAvailableRegion = true
      } else {
        this.isAvailableRegion = false
        this.$store.dispatch('transactionStore/getTop100Transaction', this.select)
      }
    }
  }
}
</script>

<style scoped>

</style>
