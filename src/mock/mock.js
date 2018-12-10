import Mock from 'mockjs';
import apis from '../apis';
import data from './data';
import {
  pagination
} from '../utils';

Mock.setup({
  timeout: 1000
});

Mock.mock(apis.selectDefaultCard.url, 'post', function (request) {
  const resData = parseInt(Math.random() * 100) % 3 === 0 ? null : data.data1;
  return resData;
});
Mock.mock(apis.insertVisitorList.url, 'post', function (request) {
  const resData = parseInt(Math.random() * 100) % 3 === 0 ? null : data.data3;
  return resData;
});
Mock.mock(apis.deleteVisitorList.url, 'post', function (request) {
  const resData = parseInt(Math.random() * 100) % 3 === 0 ? null : data.data3;
  return resData;
});
Mock.mock(apis.updateVisitorList.url, 'post', function (request) {
  const success = (parseInt(Math.random() * 100)) % 3 === 0 ? false : true;
  const resData = {success: success, ...data.data3};
  return resData;
});
Mock.mock(apis.selectVisitorList.url, 'post', function (request) {
  const params = JSON.parse(request.body);
  const pageCode = parseInt(params['value']);
  const pageSize = 10;
  const filterData = pagination(data.data2(22), pageCode, pageSize);
  const success = (parseInt(Math.random() * 100)) % 3 === 0 ? false : true;
  const resData = {data: {rows: filterData.data}, success: success};
  return resData;
});
Mock.mock(apis.selectRegisterList.url, 'post', function (request) {
  const params = JSON.parse(request.body);
  const pageCode = parseInt(params['pageIndex']);
  const pageSize = parseInt(params['pageSize']);
  return pagination(data.data4(20), pageCode, pageSize);
});
Mock.mock(apis.selectSubscribeList.url, 'post', function (request) {
  const params = JSON.parse(request.body);
  const pageCode = parseInt(params['pageIndex']);
  const pageSize = parseInt(params['pageSize']);
  return pagination(data.data5(20), pageCode, pageSize);
});
Mock.mock(apis.selectPaymentRecord.url, 'post', function (request) {
  const params = JSON.parse(request.body);
  const payStatus = parseInt(params['payStatus']);
  const pageCode = parseInt(params['pageIndex']);
  const pageSize = parseInt(params['pageSize']);
  const size = payStatus ? 0 : 21;
  return pagination(data.data6(size), pageCode, pageSize);
});
Mock.mock(apis.selectDoctorList.url, 'post', function (request) {
  const params = JSON.parse(request.body);
  console.log(params);
  const date = parseInt(params['date']);
  const pageCode = parseInt(params['pageIndex']);
  const pageSize = parseInt(params['pageSize']);
  const size = date * 5 + parseInt(Math.random() * 100);
  const resData = parseInt(Math.random() * 100) % 3 === 0 ? null : pagination(data.data7(size), pageCode, pageSize);
  return resData;
});
