import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
    render() {
        const {task} = this.props;

        return <p className="red">
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>  
            <button onClick={this.props.deleteTask.bind(this, task.id)}>
                X
            </button>  
        </p>        
    }
}

export default Task;