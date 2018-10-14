import React  from 'react';
import { connect } from 'react-redux';
import { getChangeInputValue,getHandleBtnClick,getHandleDelete } from './store/actionCreators'; 
const TodoList = (props) => {
    const { inputValue,list,changeInputValue,handleBtnClick,handleDelete } = props;
    return (
        <div>
            <div>
                <input  
                    value={inputValue}
                    onChange={changeInputValue}
                    />
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {list.map((item,index) => {
                    return <li onClick={() => handleDelete(index)} key={index}>{item}</li>
                })}
            </ul>
        </div>  
    )
}
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list:state.list
    }
}
//store.dispatch.props
const mapDispatchToProps = (dispatch) => {
    return {
         changeInputValue(e) {
             const action = getChangeInputValue(e.target.value);
             dispatch(action)
         },
        handleBtnClick() {
            const action = getHandleBtnClick();
            dispatch(action);
        },
        handleDelete(index) {
            const action = getHandleDelete(index);
            dispatch(action);
        }
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
