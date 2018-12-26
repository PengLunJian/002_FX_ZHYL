/**
 * 自定义日期格式化
 * @param offsetTime
 * @param format
 * @returns {string}
 */
export const dateFormat = (offsetTime, format) => {
  let str = '';
  const date = typeof offsetTime === 'number'
    ? new Date(offsetTime) : offsetTime;
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  month = month > 9 ? month : '0' + month;
  day = day > 9 ? day : '0' + day;
  hours = hours > 9 ? hours : '0' + hours;
  minutes = minutes > 9 ? minutes : '0' + minutes;
  seconds = seconds > 9 ? seconds : '0' + seconds;
  switch (format) {
    case 'yyyy-mm-dd':
      str = year + '-' + month + '-' + day;
      break;
    case 'yyyy/mm/dd':
      str = year + '/' + month + '/' + day;
      break;
    case 'yyyy-mm-dd hh:mm':
      str = year + '-' + month + '-' + day +
        ' ' + hours + ':' + minutes;
      break;
    case 'yyyy/mm/dd hh:mm':
      str = year + '/' + month + '/' + day +
        ' ' + hours + ':' + minutes;
      break;
    case 'yyyy-mm-dd hh:mm:ss':
      str = year + '-' + month + '-' + day +
        ' ' + hours + ':' + minutes + ':' + seconds;
      break;
    case 'yyyy/mm/dd hh:mm:ss':
      str = year + '/' + month + '/' + day +
        ' ' + hours + ':' + minutes + ':' + seconds;
      break;
    default:
      str = year + '-' + month + '-' + day;
      break;
  }
  return str;
};
/**
 * 模拟返回分页数据
 * @param data
 * @param pageCode
 * @param pageSize
 * @returns {{data: Array}}
 */
export const pagination = (data, pageCode, pageSize) => {
  const newData = data.data.filter((item, index) => {
    if ((index >= (pageCode - 1) * pageSize) &&
      index < pageCode * pageSize) {
      return item;
    }
  });
  return {data: newData || []};
};
/**
 * 获取请求路径参数
 * @param name
 * @returns {*}
 */
export const getQueryParams = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};
/**
 *
 * @param params
 * @returns {string}
 */
export const getBaseUrl = (params) => {
  let url = window.location.href.split(params)[0];
  url = url.substr(0, url.length - 2);
  return url;
};
/**
 * 获取元素阿紫数组中的位置
 */
export const getIndexOf = (arr, item) => {
  if (Array.prototype.indexOf) {
    return arr.indexOf(item);
  } else { // 是在IE
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i; // 返回相应的下标
      }
    }
  }
  return -1; // 找不到返回-1
};
/**
 *
 * @param url
 * @returns {string}
 */
export const getUriPath = (url) => {
  const arrUrl = url.split('//');
  var start = arrUrl[1].indexOf('/');
  var relUrl = arrUrl[1].substring(start);
  return relUrl;
};
/**
 *
 * @param data
 * @param isPre
 * @returns {*}
 */
export const parseData = (data, isPre) => {
  const tempWeek = [];
  const weeks = parseInt(isPre) ? 7 : 1;
  for (let i = 0; i < weeks; i++) {
    tempWeek[i] = {};
    tempWeek[i].schedulDay = [];
    for (let j = 0; j < 2; j++) {
      const noonCode = j + 1 + '';
      const obj = getObj(i, noonCode);
      tempWeek[i].schedulDay.push(obj);
    }
    const offsetTime = i * 24 * 60 * 60 * 1000;
    let date = new Date(new Date().getTime() + offsetTime);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const mm = month > 9 ? '' + month : '0' + month;
    const dd = day > 9 ? '' + day : '0' + day;
    let weekIndex = (date.getDay()) % 7;
    weekIndex = weekIndex === 0 ? 7 : weekIndex;
    const week = parseWeek(weekIndex);
    tempWeek[i].week = week;
    tempWeek[i].seeDate = mm + '-' + dd;
    date = null;
  }

  let {schedulWeek} = data || {};
  schedulWeek = schedulWeek || [];
  const newSchedulWeek = distinct(schedulWeek);
  const length = newSchedulWeek.length <= 7 ? newSchedulWeek.length : 7;
  if (newSchedulWeek.length) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < tempWeek.length; j++) {
        if (newSchedulWeek[i].seeDate === tempWeek[j].seeDate) {
          for (let k = 0; k < tempWeek[j].schedulDay.length; k++) {
            for (let g = 0; g < newSchedulWeek[i].schedulDay.length; g++) {
              const tempWeekNoonCode = tempWeek[j].schedulDay[k].noonCode;
              const schedulWeekNoonCode = newSchedulWeek[i].schedulDay[g].noonCode;
              if (tempWeekNoonCode === schedulWeekNoonCode) {
                tempWeek[j].schedulDay[k] = newSchedulWeek[i].schedulDay[g];
              }
            }
          }
        }
      }
    }
  }

  data.schedulWeek = tempWeek;
  return data;
};
/**
 *
 * @param data
 * @param noonCode
 * @returns {{classId: string, noonCode: *, totalFee: string, week: string, isRegister: string, seeDate: string, timeSolt: string}}
 */
const getObj = (weeks, noonCode) => {
  const index = parseInt(noonCode) - 1;
  const timeSlot = ['07:00-12:00', '13:00-17:00'];
  const tempObj = {
    classId: '无',
    totalFee: '0',
    isRegister: '0',
    noonCode: noonCode,
    timeSolt: timeSlot[index]
  };
  return tempObj;
};
/**
 *
 * @param number
 * @returns {string}
 */
export const parseWeek = (number) => {
  const weeks = [
    '星期一', '星期二',
    '星期三', '星期四',
    '星期五', '星期六',
    '星期天'
  ];
  return weeks[parseInt(number) - 1];
};

export const distinct = (schedulWeek) => {
  const newSchedulWeek = [];
  if (schedulWeek.length) {
    let result = false;
    newSchedulWeek.push(schedulWeek[0]);
    schedulWeek.map((item1) => {
      newSchedulWeek.map((item2) => {
        if (item1.seeDate === item2.seeDate) {
          result = true;
        }
      });
      if (!result) {
        newSchedulWeek.push(item1);
      }
      result = false;
    });
  }
  return newSchedulWeek;
};
