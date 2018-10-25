const controllers = {
  showMenus: function (type) {
    this.type = type;
    this.popupPicker.show = true;
    if (type === '性别') {
      this.popupPicker.data = [['男', '女']];
    } else if (type === '民族') {
      this.popupPicker.data = [[
        '汉族', '蒙古族', '回族', '藏族', '维吾尔族', '苗族', '彝族', '壮族', '布依族',
        '朝鲜族', '满族', '侗族', '瑶族', '白族', '土家族', '哈尼族', '哈萨克族', '傣族',
        '黎族', '僳僳族', '佤族', '畲族', '高山族', '拉祜族', '水族', '东乡族', '纳西族',
        '景颇族', '柯尔克孜族', '土族', '达斡尔族', '仫佬族', '羌族', '布朗族', '撒拉族',
        '毛南族', '仡佬族', '锡伯族', '阿昌族', '普米族', '塔吉克族', '怒族', '乌孜别克族',
        '俄罗斯族', '鄂温克族', '德昂族', '保安族', '裕固族', '京族', '塔塔尔族', '独龙族',
        '鄂伦春族', '赫哲族', '门巴族', '珞巴族', '基诺族'
      ]];
    }
  },
  handlerChange: function (value) {
    if (this.type === '性别') {
      this.gender = value[0];
    } else if (this.type === '民族') {
      this.nation = value[0];
    }
  },
  checkNotEmpty: function () {
    if (this.name && this.number &&
      this.gender && this.nation) {
      this.status = '';
    } else {
      this.status = 'disabled';
    }
  },
  handlerBtnClick: function () {
    if (!this.status) {
      this.$router.push({
        path: this.$routes.SFYZ.path
      });
    }
  }
};

export default controllers;
