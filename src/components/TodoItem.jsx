import React from "react";

const TodoItem = props => {
const todo = props.todoProps
const markComplete = props.markCompleteFunc
const deleteTodo = props.deleteTodoFunc
  //Style
   const todoItemStyle = {
     background: '#f4f4f4',
     padding: '10px',
     borderBottom: '1px #ccc dotted',
     textDecoration: props.todoProps.completed ? 'line-through' : 'none'
   }

   const deleteButtonStyle = {
     background: '#ff0000',
     color: '#fff',
     border: 'none',
     padding: '5px 9px',
     borderRadius: '50%',
     cursor: 'pointer',
     float: 'right'
   }
  // Return
    return (
      <p style={todoItemStyle}> 
        <input type="checkbox"
         onChange={markComplete.bind(this,todo.id)}
         checked={todo.completed}
         />
        {todo.title}
        <button 
         style={deleteButtonStyle}
         onClick={deleteTodo.bind(this, todo.id)}
         >Delete</button>
      </p>
    )
}

export default TodoItem