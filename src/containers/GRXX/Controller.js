import {mapActions} from 'vuex';

const controller = {
  exeSelectDefaultCard() {
    this.selectDefaultCard();
  },
  exeDeleteVisitorList(params) {
    const result = confirm('确认解绑就诊卡吗?');
    if (result) {
      params = {value: params};
      this.deleteVisitorList(params)
        .then((res) => {
          res = res || {};
          const {success, status} = res;
          if (!success) {
            this.$vux.toast.show({
              type: 'cancel',
              text: status.msg
            });
          } else {
            this.$vux.toast.show({
              text: '操作成功'
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  ...mapActions([
    'selectDefaultCard',
    'deleteVisitorList'
  ])
};

export default controller;
