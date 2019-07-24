import React from 'react';
import TodoItem from './TodoItem';
import { Button } from 'semantic-ui-react'



 const TodoList = (props)  => {
    
    return (
        <div className="todo-list">
            {props.todoData.todoList.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />
                ))}
            <Button primary onClick={props.clearCompleted}>
                Clear Completed Todo
            </Button>
        </div>
    )
}
export default TodoList;