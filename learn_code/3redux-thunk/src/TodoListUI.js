import React , { Fragment } from 'react';
import { Input,List,Button } from 'antd';
import 'antd/dist/antd.css';

const TodoListUI = (props) => {
    return (
        <Fragment>
        <Input 
            style = {{width:"300px",margin:"10px"}}
            placeholder = "please input"
            value = {props.inputValue}
            onChange = {props.handleInputChange}
            />
        <Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
        <List 
            style = {{width:"300px",margin:'10px'}}
            bordered
            dataSource={props.list}
            renderItem={(item,index) => (<List.Item onClick={() => {props.handleItemDelete(index)}} >{item}</List.Item>)}
        />
    </Fragment>                                                                      
    )
}
export default TodoListUI;

// class TodoListUI extends Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return(
//             <Fragment>
//             <Input 
//                 style = {{width:"300px",margin:"10px"}}
//                 placeholder = "please input"
//                 value = {this.props.inputValue}
//                 onChange = {this.props.handleInputChange}
//                 />
//             <Button type="primary" onClick={this.props.handleBtnClick}>Submit</Button>
//             <List 
//                 style = {{width:"300px",margin:'10px'}}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item,index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}} >{item}</List.Item>)}
//             />
//         </Fragment>                                                                      
//         )
//     }
// }
