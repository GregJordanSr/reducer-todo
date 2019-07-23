import React, { useReducer} from 'react';
import { reducer, initialState } from './reducers/reducer';



import './App.css';
import TodoList from './components/TodoList';

function App() {

  const  [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (e, todo) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO' , payload: todo });
  };

  const toggleTodo = todoItem => {
    e.preventDefault();
    dispatch({ type: 'TODO_ITEM', payload: todoItem });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_TODO' })
  };


  
  return (
    <div className="App">
      <div className="todo-header">
        <h1>Todo List</h1>
          <TodoForm addTodo={addTodo} />
      </div>
      <TodoList 
          todoData={state.todoData} 
          toggleTodo={toggleTodo}
          clearCompleted={clearCompleted} 
        />
    </div>
  );
}

export default App;
