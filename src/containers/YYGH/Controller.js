const controller = {
  handlerFilter() {
    console.log(1);
  },
  handlerResult() {
    this.$router.push({
      path: this.$routes.YSLB.path
    });
  }
};

export default controller;
