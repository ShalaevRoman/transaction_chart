<template>
  <div class="chart__wrapper">
    <BarChart
      :options="chartOptions"
      :data="getChartData"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ChartForRegion',
  data() {
    return {
      transactionLabels: [],
      transactionAmountIndicator: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },
  computed: {
    ...mapGetters('transactionStore', ['top100Transaction']),
    bgColor () {
      return this.$vuetify.theme.dark ? '#e5e5e5' : '#424242'
    },
    getChartData() {
      return {
        labels: this.transactionLabels,
        datasets: [
          {
            backgroundColor: this.bgColor,
            label: 'Amount in hryvnia',
            data: this.transactionAmountIndicator
          }
        ]
      }
    }
  },
  watch: {
    top100Transaction() {
      this.transactionLabels = this.top100Transaction.map(item => item.payer_name)
      this.transactionAmountIndicator = this.top100Transaction.map(item => item.amount)
    },
  }
}
</script>

<style scoped lang="scss">
.chart__wrapper {
  padding: 10px;
  width: 100%;
  height: 400px;
}
</style>
