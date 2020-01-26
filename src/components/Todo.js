import React, { useState, Fragment } from 'react';
import axios from 'axios';

const Todo = () => {
        const [todoState, setTodoState] = useState({userInput:"", todoList: [] });

    const inputChangeHanddler = event => {
        setTodoState({
            ...todoState,
            userInput: event.target.value
        });
    }

    const todoAddHandler = () => {
       setTodoState({
           ...todoState,
           todoList: todoState.todoList.concat(todoState.userInput)
       })
       axios.post('https://todo-b218c.firebaseio.com/todos.json', {name: todoState.userInput})
       .then(res => console.log(res))
       .catch(err => console.log(err))
    }
    
    return (
        <Fragment>
            <input type="text" value={todoState.userInput} onChange={inputChangeHanddler} />
            <button type="button" onClick={todoAddHandler}> Add </button>
            <ul>
                {todoState.todoList.map(todo => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </Fragment>
    );
};

export default Todo;