import React from 'react';
import TodoItem from './TodoItem';



 const TodoList = (props)  => {
    
    return (
        <div className="todo-list">
            {props.todoData.todoList.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
                ))}
            <button className="clr-btn" onClick={props.clearCompleted}>
                Clear Completed Todo
            </button>
        </div>
    )
}
export default TodoList;