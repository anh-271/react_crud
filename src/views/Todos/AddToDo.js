import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {

    state= {
        title: ''
    }

    handleOnChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleAddTodo = (e) => {
        e.preventDefault()
        if (!this.state.title) {
            toast.error("Missing Error!")
            return;
        }
        this.props.addNewToDo({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
        })

        this.setState({
            title: '',
        })
    }

    render() {

        let { title } = this.state

        return(
            <div className="add-todo">
                <input 
                    type="texxt" 
                    value={title} 
                    onChange={(e) => this.handleOnChange(e)}
                ></input>
                <button type="button" style={{margin: "15px 10px" }} onClick={(e) => this.handleAddTodo(e)}>Add</button>
            </div>
        )
    }
}

export default AddToDo;