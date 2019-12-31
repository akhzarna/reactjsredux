import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addDataFunction} from '../Actions/actions';
import TodoClass from '../Classes/todoClass';
 class headerFile extends Component {
     state={
        task:""
    };
    render() {
        console.log(this.state.task);
        return (
            <React.Fragment>
                <div>
                    <input type="text" placeholder="Enter the Text " onChange={(event)=>this.setState({
                        task:event.target.value
                    })} />
                    <br/>
                    <button
                        onClick={
                            ()=> this.props.addDataFunction(
                                new TodoClass(
                                    this.state.task,
                                    Math.random()*1000*Math.random()
                                )
                            )
                        }
                    >
                        Add Task
                    </button><br/>
                </div>
            </React.Fragment>
        )
    }
}
export default connect (null,{addDataFunction}) (headerFile);