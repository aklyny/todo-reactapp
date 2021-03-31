import React,{Component} from "react";

export default class TodosListItem extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderActionSection () {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={()=>this.editTask()}>Save</button>
                    <button className="cancel-btn" onClick={this.setEditState.bind(this,false)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={()=>this.setEditState(true)}>Edit</button>
                <button className="delete-btn" onClick={(e)=>this.deleteTask(e)}>Delete</button>
            </td>
        );
    }
    setEditState (isEditing) {
        this.setState({
            isEditing
        });
    }

    toggleTask () {
        this.props.toggleTask(this.props.id);
    }

    editTask (e) {
        this.props.editTask(this.props.id, this.refs.task.value);
        this.setState({
            isEditing: false
        });
        e.preventDefault();
    }

    deleteTask () {
        this.props.deleteTask(this.props.id);
    }

    renderTask () {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            cursor: "pointer"
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={(e)=>this.editTask(e)}>
                        <input ref="task" defaultValue={task} autoFocus />
                    </form>
                </td>
            );
        }
        

        return (
            <>
            <td onClick={()=>this.toggleTask(task.id)} style={taskStyle}>{task}</td>
            </>
        );
    }

    render () {
        const { isCompleted } = this.props;
        return (
            <tr className={"todo-" + (isCompleted ? "completed" : "not-completed") }>
                {this.renderTask()}
                {this.renderActionSection()}
            </tr>
        )
    }

}
