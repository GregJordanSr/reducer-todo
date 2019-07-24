import React from 'react';
import { Divider } from 'semantic-ui-react';


 const TodoItem = (props) => {
   console.log(props)
    return (
      <React.Fragment >   
          <div 
            className={props.todo.completed ? 'complete' : ' '}
            onClick={() => props.toggleTodo(props.todo.id)}
          >
              <h4>{props.todo.item}</h4>  
            <Divider hidden />
          </div>
      </React.Fragment>
     
    )
}
export default TodoItem;