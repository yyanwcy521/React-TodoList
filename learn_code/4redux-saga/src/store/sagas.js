import { takeEvery,put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import {initListAction} from './actionCreators';
function* getInitList() {
    try {
        const res = yield axios.get('/api/list');
        const action = initListAction(res.data);
        yield  put(action);
    }catch(e) {
        console.log('list.json 网络请求i失败');
    }
   
}

//generator 函数
function* todoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
export default todoSagas;