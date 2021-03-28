import React,{Component} from "react";

export default class CreateTodo extends Component {
    render () {
        return (
            <form onSubmit={(e)=>this.onSubmit(e)} className="create-todo-form">
                <input type="text" placeholder="Task" ref="taskMessage" autoFocus/>
                <button>Add</button>
            </form>
        );
    }
    onSubmit (e) {
        this.props.createTask(this.refs.taskMessage.value);
        this.refs.taskMessage.value = "";
        e.preventDefault();
    }
}
