import React from "react";
import './ListToDo.scss'
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';


class ListToDo extends React.Component {

    state = {
        listTodos: [
            {id: "MH1", title: "Hello1 >>>>>>>"},
            {id: "MH2", title: "Hello2 <<<<<<<"},
            {id: "MH3", title: "Hello3 >>>>>>>"},
        ],
        editTodo: {}
    }

    addNewToDo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("wow so easy!")
    }

    handleDeleteToDo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id !==todo.id)
        toast.success("Delete success")

        this.setState({
            listTodos: currentTodos
            
        })
    }

    handleEditTodo = (todo) => {
        let {editTodo, listTodos} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodos];

            let objIndex = listTodoCopy.findIndex(item => item.id === todo.id);
            listTodoCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
            })
            toast.success("Update success")
            return;
        } 

        this.setState({
            editTodo: todo
        })

    }

    handleOnchangeEditTodo = (e) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = e.target.value 
        this.setState({
            editTodo : editTodoCopy
        })
    }

    render() {
        let {listTodos, editTodo} =this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log("<<<<>>>>>>",isEmptyObj);

        return(
            <div className="list-todo-container">
                <AddToDo addNewToDo={this.addNewToDo}></AddToDo>
                <div className="list-todo-content">
                    { listTodos && listTodos.length > 0 && 
                        listTodos.map((item, index) => {
                            return(
                                <div className="todo-child" key={item.id}>
                                    { isEmptyObj === true ? 
                                        <span>{index + 1} - {item.title}</span> 
                                        :
                                        <>
                                            {editTodo.id === item.id ? 
                                                <span> {index + 1} <input value={editTodo.title} 
                                                onChange={(e) => this.handleOnchangeEditTodo(e)}
                                                /> </span>
                                                : 
                                                <span>{index + 1} - {item.title}</span> 
                                            }
                                        </>
                                    }
                                    <button className="custom-btn" onClick={() => this.handleEditTodo(item)}>
                                        { isEmptyObj === false && editTodo.id === item.id ? 
                                            "Save" : "Edit"
                                        }
                                    </button>
                                    <button className="custom-btn" onClick={() => this.handleDeleteToDo(item)}>Delete</button>
                                </div>
                            )
                        })
                    }
                    
                </div>

            </div>
        )
    }
}

export default ListToDo;