const controllers = {
  doCard: function () {
    this.$router.push({
      path: this.$routes.SFLR.path
    });
  },
  uploadCard: function () {
    this.$router.push({
      path: this.$routes.SCKP.path
    });
  }
};

export default controllers;
