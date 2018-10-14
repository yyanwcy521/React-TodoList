import { CHANGE_INPUT_VALUE,ADD_LIST,DELETE_LIST,INIT_LIST } from './actionTypes';
import axios from 'axios';
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    inputValue: value
});
export const addListAction = () => ({
    type: ADD_LIST
});
export const deleteListAction = (index) => ({
    type: DELETE_LIST,
    index
});
export const initListAction = (data) => ({
    type: INIT_LIST,
    data
});
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/list').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            console.log(data);
            dispatch(action);
        })
    }
};