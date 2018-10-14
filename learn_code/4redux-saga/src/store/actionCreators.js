import { GET_INIT_LIST,CHANGE_INPUT_VALUE,ADD_LIST,DELETE_LIST,INIT_LIST } from './actionTypes';

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
export const getInitList = () => ({
    type:GET_INIT_LIST
})
