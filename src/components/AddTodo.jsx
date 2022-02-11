import React, { useState } from "react";

const AddTodo = props => {
    const addTodo = props.addTodoFunc 
    const [title, setTitle] = useState('')

    const changeTitle = event => {
        setTitle(event.target.value)
    }
    const addSingleTodo = event => {
        event.preventDefault()
        if ( title !== '') addTodo(title)
    }
    //style
    const addTodoFormStyle = {
        display: 'flex'
    }
    const addTodoInputStyle = {
        flex: '10',
        padding: '5px'
    }
    const addTodoSubmitStyle = {
        flex: '1'
    }
    return (
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input 
             style={addTodoInputStyle} 
             type="text" 
             name="title" 
             onChange={changeTitle}
             placeholder="Them viec" />
            <input 
             style={addTodoSubmitStyle} 
             type="submit"
             value="them" 
            />
        </form>
    )
}

export default AddTodo