import React, { useState } from 'react';
import styled from 'styled-components';
import Todo from './Todo';

const todos = [
    {
        id: 1,
        title: 'todo1',
        isDone: false,
        date: '2021.01.09',
    },
    {
        id: 2,
        title: 'todo2',
        isDone: false,
        date: '2021.01.09',
    },
    {
        id: 3,
        title: 'todo3',
        isDone: true,
        date: '2021.01.09',
    },
    {
        id: 4,
        title: 'todo4',
        isDone: false,
        date: '2021.01.09',
    },
];

const TodoList = styled.ul`
    margin-top: 2em;
    height: 40vh;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Todos = ({}) => {
    const [todolist, setTodolist] = useState(todos);

    const setTodo = (id) => {
        setTodolist(todolist?.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    const removeTodo = (id) => {
        setTodolist(todolist?.filter((todo) => todo.id !== id));
    };

    return (
        <TodoList>
            {todolist.map((t) => (
                <Todo key={t.id} id={t.id} title={t.title} isDone={t.isDone} date={t.date} setTodo={setTodo} removeTodo={removeTodo} />
            ))}
        </TodoList>
    );
};

export default Todos;
