import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const{addTodo, changeHandler, newTask} = this.props;

        return (
            <form onSubmit={ addTodo }>
                <input 
                onChange={ changeHandler }
                type="text" 
                name="new-task" 
                className="add-task"
                defaultValue={ newTask } 
                placeholder="+ Add a task"/>
          </form>
        )
    }
}

export default Form;