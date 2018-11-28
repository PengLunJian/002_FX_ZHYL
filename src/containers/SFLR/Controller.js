import {mapActions} from 'vuex';

const controllers = {
  showMenus(type) {
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
    } else if (type === '关系') {
      this.popupPicker.data = [[
        '本人', '夫妻', '子女（就诊人是我的子女）',
        '父母（就诊人是我的父母）', '亲属'
      ]];
    }
  },
  checkNotEmpty() {
    this.phone = this.phone ? this.phone : '请输入';
    if (this.name && this.number &&
      this.gender && this.nation &&
      this.phone && this.relation &&
      this.gender !== '请选择' &&
      this.nation !== '请选择' &&
      this.phone !== '请输入' &&
      this.relation !== '请选择') {
      this.status = '';
    } else {
      this.status = 'disabled';
    }
  },
  showKeyBoard(type) {
    this.isShow = true;
    this.TYPE = type;
    if (this.TYPE === 'phone') {
      this.initValue = this.phone === '请输入' ? '' : this.phone;
    }
  },
  writeNumber(value) {
    if (this.TYPE === 'phone') {
      this.phone = value;
    }
  },
  handlerChange(value) {
    if (this.type === '性别') {
      this.gender = value[0];
    } else if (this.type === '民族') {
      this.nation = value[0];
    } else if (this.type === '关系') {
      this.relation = value[0];
    }
  },
  exeInsertVisitorList() {
    if (!this.status) {
      const data = {
        name: this.name,
        idCardNo: this.number,
        sex: this.gender,
        nation: this.nation,
        releation: this.relation,
        phone: this.phone
      };
      this.insertVisitorList(data)
        .then((res) => {
          const {data, success} = res;
          if (data && success) {
            this.$vux.toast.show({
              text: '操作成功'
            });
            this.clearFormData();
            this.$router.back();
          } else {
            this.$vux.toast.show({
              text: '操作失败'
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  clearFormData() {
    this.name = '';
    this.number = '';
    this.phone = '请输入';
    this.gender = '请选择';
    this.nation = '请选择';
    this.relation = '请选择';
  },
  ...mapActions([
    'insertVisitorList',
    'updateVisitorList'
  ])
};

export default controllers;
