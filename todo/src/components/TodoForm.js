import React, { useState } from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';


const TodoForm = props =>  {
    const [inputForm, setInput] = useState({ item: '' })

    const handleChange = e => {
        setInput({ ...inputForm, [e.target.name]: e.target.value })
    };

    const submitTodo = e => {
        e.preventDefault();
        props.addTodo(e, inputForm.item);
        setInput( { item: '' } );
    };
    
    return (
        <Form onSubmit={submitTodo} >
            <Form.Field>
                <input
                type='text'
                value={inputForm.item}
                name='item'
                placeholder="Add Todo"
                onChange={handleChange}
                /> 
            </Form.Field>
           
            <Button primary className="add-btn" >Add Todo</Button>
            <Divider hidden />
        </Form>
    )
}
export default TodoForm;