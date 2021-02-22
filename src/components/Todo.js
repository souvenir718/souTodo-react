import React from 'react';
import styled from 'styled-components';

const TodoLi = styled.li`
    padding-left: 2rem;
    color: rgb(125, 140, 255);
    text-align: start;
    font-weight: 500;
    padding-bottom: 2rem;
    color: ${(props) => (props.isDone ? 'gray' : 'rgb(125, 140, 255)')};
    text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`;

const DateText = styled.span`
    float: right;
    padding-right: 1rem;
    font-size: 0.8rem;
    line-height: 1rem;
`;

const DelBtn = styled.span`
    cursor: pointer;
    padding-right: 2rem;
    float: right;
`;

const Check = styled.input`
    margin-right: 1rem;
    cursor: pointer;
`;

const Title = styled.span`
    font-weight: bold;
`;

const Todo = ({ id, title, isDone, date, setTodo, removeTodo }) => {
    return (
        <TodoLi isDone={isDone}>
            <Check type="checkbox" checked={isDone} onChange={() => setTodo(id)} />
            <Title>{title}</Title>
            <DelBtn onClick={() => removeTodo(id)}>❌</DelBtn>
            <DateText>{date}</DateText>
        </TodoLi>
    );
};

export default Todo;
