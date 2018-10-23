const controller = {
  insertSuffer: function () {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  defaultLock: function () {
    console.log(2);
  },
  defaultUnlock: function () {
    console.log(1);
  }
};

export default controller;
