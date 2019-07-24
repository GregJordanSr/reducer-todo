import React, { useState } from 'react';


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
        <form onSubmit={submitTodo} >
            <input
                type='text'
                value={inputForm.item}
                name='item'
                placeholder="Add Todo"
                onChange={handleChange}
                />
            <button>Add Todo</button>
        </form>
    )
}
export default TodoForm;