import { CHANGE_INPUT_VALUE,ADD_LIST,DELETE_LIST,INIT_LIST } from './actionTypes';
//reducer必须是纯函数，给定固定的输入，就一定会有固定的输出，不能有任何副作用
const defaultState = {
    inputValue:"",
    list:[]
}

export default (state = defaultState , action) => {

    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue;
        return newState;
    }
    if(action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    if(action.type === ADD_LIST) {
        const newState =  JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    if(action.type === DELETE_LIST) {
        const newState =  JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }

    return state;
}