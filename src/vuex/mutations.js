const mutations = {
  showLoading(state) {
    state.isLoading = true;
  },
  hideLoading(state) {
    state.isLoading = false;
  }
};

export default mutations;
