import React, { useState, Fragment } from 'react';

const Todo = () => {
    const initialState = "";
    const [todoName, settodoName] = useState(initialState);
    const [todoList, settodoList] = useState([]);

    const inputChangeHanddler = (event) => {
        settodoName(event.target.value);
    }

    const todoAddHandler = () => {
        settodoList(todoList.concat(todoName));
    }
    return (
        <Fragment>
            <input type="text" value={todoName} onChange={inputChangeHanddler} />
            <button type="button" onClick={todoAddHandler}> Add </button>
            <ul>
                {todoList.map(todo => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </Fragment>
    );
};

export default Todo;