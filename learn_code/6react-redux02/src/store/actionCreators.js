import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE} from './actionTypes';

export const getChangeInputValue = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
});

export const getHandleBtnClick = () => ({
    type:ADD_ITEM
});

export const getHandleDelete = (index)  => ({
    type:DELETE,
    index
})