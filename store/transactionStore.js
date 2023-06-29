export const state = () => ({
  regionList: null,
  top100Transaction: null
})
export const mutations = {
  SET_REGION_LIST(state, payload) {
    state.regionList = payload
  },
  SER_TOP100_TRANSACTION(state, payload) {
    state.top100Transaction = payload
  }
}
export const actions = {
  async getRegions({ commit }) {
    const { data } = await this.$axios.get('/api/v2/dictionaries/regions')
    commit('SET_REGION_LIST', data)
  },
  async getTop100Transaction({ commit }, regionNum) {
    const response = await this.$axios.get('/api/v2/api/transactions/top100/', {
      params: {
        region: regionNum
      }
    })
    console.log(response)
    commit('SER_TOP100_TRANSACTION', response)
  }
}
export const getters = {
  regionList: state => state.regionList
}
