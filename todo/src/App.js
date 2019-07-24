import React, { useReducer} from 'react';
import { reducer, initialState } from './reducers/reducer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Container, Segment, Header, Divider } from 'semantic-ui-react';

import './App.css';

function App() {

  const  [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (e, todo) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO' , payload: todo });
  };

  const toggleTodo = todoItem => {
    dispatch({ type: 'TOGGLE_TODO', payload: todoItem });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_TODO' })
  };


  return (
    <Container>
      <div className="App">
        <Divider hidden />
          <Segment >
              <Header as='h1' inverted color='blue'>
                 Todo List
              </Header>
                <TodoForm addTodo={addTodo} />
            
            <TodoList 
                todoData={state} 
                toggleTodo={toggleTodo}
                clearCompleted={clearCompleted} 
              />
          </Segment>
      </div>
        
    </Container>
   
  );
}

export default App;
