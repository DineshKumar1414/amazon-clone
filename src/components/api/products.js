import { apiRequest } from './utils';


function getProductsList() {
  return apiRequest('GET', '/products');
}

function getProduct(id) {
  return apiRequest('GET', '/products/' + id);

}
function register(request) {
  return apiRequest('POST', '/users/' , request);

}
function login(request) {
  return apiRequest('POST', '/auth/login' , request);

}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: getProductsList,
  getProduct: getProduct,
  register:register,
  login:login
};
