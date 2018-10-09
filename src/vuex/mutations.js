const mutations = {
  showLoading (state) {
    state.LOADING = true;
  },
  hideLoading (state) {
    state.LOADING = false;
  }
}

export default mutations;
