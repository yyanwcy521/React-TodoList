import React,{ Component } from 'react';
import {Input,Button,List} from 'antd';
import 'antd/dist/antd.css';
import store from "./store/index";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return(
        <div style={{marginTop:"10px",marginLeft:"10px"}}>
        <Input 
            value={this.state.inputValue}
            placeholder="pleace input" 
            style={{width:"300px"}}
            onChange={this.handleInputChange}
        />,
        
        <Button 
            type='primary' 
            style={{marginLeft:"10px"}}
            onClick={this.handleBtnClick}
        >提交</Button>
        <List
            style={{width:"300px",marginTop:"10px"}}
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>
        ) 
    }
    handleInputChange(e) {
        const action = {
            type: "change_input_value",
            value: e.target.value
        }
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleBtnClick() {
        const action = {
            type: 'add_todo_item'
        };
        store.dispatch(action);
    }
}

export default TodoList;