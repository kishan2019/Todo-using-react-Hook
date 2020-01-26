import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';

const Todo = () => {
        const [todoState, setTodoState] = useState({userInput:"", todoList: [] });

    const inputChangeHanddler = event => {
        setTodoState({
            ...todoState,
            userInput: event.target.value
        });
    }

    useEffect(() => {
        axios.get('https://todo-b218c.firebaseio.com/todos.json').then(res => {
            console.log(res);
            const todoData = res.data;
            const todos = [];
            for(let key in todoData){
                todos.push({id: key, name: todoData[key].name});
            }
            setTodoState({
                ...todoState,
                 todoList: todos
                });
        });
    });

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
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>
        </Fragment>
    );
};

export default Todo;