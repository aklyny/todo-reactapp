import React,{Component} from "react";
import TodoHeader from "./TodoHeader";
import TodosListItem from "./TodoItems";

export default class TodosList extends Component {
    renderItems () {
        return this.props.todos.map((c, index) => {
            if(c.isCompleted ===false){
            return (
                <TodosListItem
                    key={index}
                    {...c}
                    id={index}
                    toggleTask={this.props.toggleTask}
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                />
            ) }
            return null
        });
    }
    renderItems1 () {
        return this.props.todos.map((c, index) => {
            if(c.isCompleted){
            return (
                <TodosListItem
                    key={index}
                    {...c}
                    id={index}
                    toggleTask={this.props.toggleTask}
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                />
            )}
            return null
        });
    }
    render () {
        if (!this.props.todos.length) {
            return <p className="tutorial">Create your first todo! :)</p>;
        }
        return (
            <table>
                <TodoHeader />
                <tbody>
                    {this.renderItems()}
                    <h1>Completed task</h1>
                    {this.renderItems1()}
                </tbody>
                
            </table>
        )
    }
}
