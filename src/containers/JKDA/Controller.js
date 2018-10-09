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
    if (this.height && this.weight &&
      this.blood && this.smoke && this.wine) {
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
  }
};

export default controllers;
