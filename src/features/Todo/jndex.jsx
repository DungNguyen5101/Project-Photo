import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { Link } from 'react-router-dom';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id:1,
            title: 'Eat',
            status: 'new'
        },
        {
            id:2,
            title: 'Code',
            status: 'completed'
        },
        {
            id:3,
            title: 'Sleep',
            status: 'new'
        },

    ]

    const [todoList, setTodoList] = useState(initTodoList)

    const handleTodoClick = (todo, idx) => {
        //clone
        const newTodoList = [...todoList]

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }

        setTodoList(newTodoList)
    }


    const handleOnSubmit = (value) => {
        const newTodo = {
            id: todoList.length + 1,
            title: value.title,
            status: 'new'
        }

        const newTodoList = [...todoList, newTodo]

        setTodoList(newTodoList)
    }
    
    return (
        <div>
            <TodoForm onSubmit={handleOnSubmit} />
            <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoFeature;