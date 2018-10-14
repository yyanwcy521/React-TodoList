import React  from 'react';
import { connect } from 'react-redux';

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
            const action = {
                type: "change_input_value",
                value: e.target.value
            }
            console.log(e.target.value);
             dispatch(action);
        },
        handleBtnClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleDelete(index) {
            const action = {
                type: 'delete_item',
                index
            }
            dispatch(action);
        }
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);


// class TodoList extends Component {
//     render() {
//         const { inputValue,changeInputValue,handleBtnClick,handleDelete } = this.props;
//         return (
//             <div>
//                 <div>
//                     <input  
//                         value={inputValue}
//                         onChange={changeInputValue}
//                         />
//                     <button onClick={handleBtnClick}>提交</button>
//                 </div>
//                 <ul>
//                     {this.props.list.map((item,index) => {
//                         return <li onClick={handleDelete} key={index}>{item}</li>
//                     })}
//                 </ul>
//             </div>  
//         )
//     }
    
// }
// const mapStateToProps = (state) => {
//     return {
//         inputValue: state.inputValue,
//         list:state.list
//     }
// }
// //store.dispatch.props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeInputValue(e) {
//             const action = {
//                 type: "change_input_value",
//                 value: e.target.value
//             }
//             console.log(e.target.value);
//              dispatch(action);
//         },
//         handleBtnClick() {
//             const action = {
//                 type: 'add_item'
//             }
//             dispatch(action);
//         },
//         handleDelete() {
//             const action = {
//                 type: 'delete_item'
//             }

//         }
        
//         }
//     }

// export default connect(mapStateToProps,mapDispatchToProps)(TodoList);