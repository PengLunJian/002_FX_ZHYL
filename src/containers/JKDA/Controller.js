const controllers = {
  showMenus: function (type) {
    this.type = type;
    this.popupPicker.show = true;
    if (type === 'blood') {
      this.popupPicker.data = [['A型', 'B型', 'AB型', 'O型']];
    } else if (type === 'smoke') {
      this.popupPicker.data = [['有', '无']];
    } else if (type === 'wine') {
      this.popupPicker.data = [['有', '无']];
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
  handlerBtnSave: function () {
    console.log(1);
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
  }
};

export default controllers;
