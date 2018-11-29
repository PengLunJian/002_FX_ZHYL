import {mapActions} from 'vuex';

const controllers = {
  exeSelectReportList() {
    const data = {queryId: this.queryId};
    this.selectReportList(data)
      .then((res) => {
        console.log('res:' + res);
      })
      .catch((err) => {
        console.log(err);
        if (this.data.length !== 0) {
          this.$vux.toast.show({
            type: 'cancel',
            text: '加载失败'
          });
        }
      });
  },
  ...mapActions([
    'selectReportList'
  ])
};

export default controllers;
