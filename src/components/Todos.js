import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Todo from './Todo';
import { toggle } from '../redux/store';

const TodoList = styled.ul`
    margin-top: 2em;
    height: 40vh;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Todos = ({ toggleTodo, todos }) => {
    const [todolist, setTodolist] = useState(todos);

    const setTodo = (id) => {
        toggleTodo(id);
    };

    const removeTodo = (id) => {
        setTodolist(todolist?.filter((todo) => todo.id !== id));
    };

    return (
        <TodoList>
            {todos.map((t) => (
                <Todo key={t.id} id={t.id} title={t.title} isDone={t.isDone} date={t.date} setTodo={setTodo} removeTodo={removeTodo} />
            ))}
        </TodoList>
    );
};

function mapStateToProps(state, ownProps) {
    return { todos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        toggleTodo: (id) => dispatch(toggle(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
