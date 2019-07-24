import React from 'react'

 const TodoItem = (props) => {
   console.log(props)
    return (
      <div 
        className={props.todo.completed ? 'complete' : ' '}
        onClick={() => props.toggleTodo(props.todo.id)}
      >
     
          <p>{props.todo.item}</p>
      </div>
    )
}
export default TodoItem;