const controller = {
  refresh: function () {
    console.log('refresh');
  },
  infinite: function () {
    const temp = [{}, {}, {}, {}, {}];
    this.items = this.items.concat(temp);
    console.log(this.$refs.scroller);
  }
};

export default controller;
