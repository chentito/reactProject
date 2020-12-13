import React, { Component } from 'react';

class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {        
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder="Write a task" 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                    name="description"
                    placeholder="Description" 
                    onChange={this.onChange} 
                    value={this.state.description}>                        
                </textarea>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}

export default TaskForm;