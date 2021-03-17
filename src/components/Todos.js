import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Todo from './Todo';

const TodoList = styled.ul`
    margin-top: 2em;
    height: 40vh;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Todos = ({ onToggle, todos }) => {
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

// function mapStateToProps(state, ownProps) {
//     console.log(state.ownProps);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Todos);
export default Todos;
