import React, { useState, Fragment } from 'react';

const Todo = () => {
        const [todoState, setTodoState] = useState({userInput:"", todoList: [] });

    const inputChangeHanddler = event => {
        setTodoState({
            userInput: event.target.value, 
            todoList: todoState.todoList
        });
    }

    const todoAddHandler = () => {
       setTodoState({
           userInput: todoState.userInput,
           todoList: todoState.todoList.concat(todoState.userInput)
       })
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