import React,{ Component ,Fragment} from 'react';
import './style.css';

class App extends Component {
   constructor(props){
       super(props);
       this.handleToggle = this.handleToggle.bind(this);
       this.state = {
           show:true
       }
   }
   render() {
       return(
           <Fragment>
                <div className={this.state.show ? "show" : "off"}>hello</div>
                <button onClick={this.handleToggle}>toggle</button> 
           </Fragment>
       ) 
   }
   handleToggle() {
        this.setState({
            show: this.state.show ? false : true
        })
   }

}
export default App;