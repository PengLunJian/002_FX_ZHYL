import {mapActions} from 'vuex';

const controllers = {
  showMenus: function (type) {
    this.type = type;
    this.popupPicker.show = true;
    if (type === 'blood') {
      this.popupPicker.data = [['A型', 'B型', 'AB型', 'O型']];
    } else if (type === 'smoke') {
      this.popupPicker.data = [['无', '有']];
    } else if (type === 'wine') {
      this.popupPicker.data = [['无', '有']];
    }
  },
  checkNotEmpty: function () {
    this.height = this.height ? this.height : '请输入';
    this.weight = this.weight ? this.weight : '请输入';
    if (this.height && this.weight &&
      this.blood && this.smoke && this.wine &&
      this.height !== '请输入' &&
      this.weight !== '请输入' &&
      this.blood !== '请选择' &&
      this.smoke !== '请选择' &&
      this.wine !== '请选择') {
      this.status = '';
    } else {
      this.status = 'disabled';
    }
  },
  handlerChange: function (value) {
    if (this.type === 'blood') {
      this.blood = value[0];
    } else if (this.type === 'smoke') {
      this.smoke = value[0];
    } else if (this.type === 'wine') {
      this.wine = value[0];
    }
  },
  exeSelectHealthList: function () {
    this.selectHealthList()
      .then((res) => {
        console.log(res);
        this.fillFormData(res);
      })
      .catch((res) => {
        console.log(res);
      });
  },
  handlerBtnSave: function () {
    const data = {
      id: this.id,
      cardNo: this.cardNo,
      height: this.height,
      weight: this.weight,
      bloodType: this.bloodTypeIndex,
      smoking: this.smokingIndex, // 1是无，2抽烟
      drink: this.drinkIndex
    };
    this.insertHealthList(data)
      .then((res) => {
        const {state} = res;
        if (state === '1') {
          this.$vux.toast.show({
            text: '操作成功'
          });
          this.goGrzx();
        } else {
          this.$vux.toast.show({
            text: '操作失败'
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  goGrzx: function () {
    this.$router.push({path: this.$routes.GRZX.path});
  },
  showKeyBoard: function (type) {
    this.isShow = true;
    this.TYPE = type;
    if (this.TYPE === 'height') {
      this.initValue = this.height === '请输入' ? '' : this.height;
    } else if (this.TYPE === 'weight') {
      this.initValue = this.weight === '请输入' ? '' : this.weight;
    }
  },
  writeNumber: function (value) {
    if (this.TYPE === 'height') {
      this.height = value;
    } else if (this.TYPE === 'weight') {
      this.weight = value;
    }
  },
  fillFormData(data) {
    this.id = data.id;
    this.cardNo = data.cardNo;
    this.height = data.height;
    this.weight = data.weight;
    this.bloodTypeIndex = data.bloodType;
    this.smokingIndex = data.smoking;
    this.drinkIndex = data.drink;
  },
  ...mapActions([
    'insertHealthList',
    'selectHealthList'
  ])
};

export default controllers;
