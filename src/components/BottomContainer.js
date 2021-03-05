import React, { useState } from 'react';
import styled from 'styled-components';

const TodoBottom = styled.div`
    height: 8vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-top: 0.1px solid rgba(125, 140, 255, 0.25);
`;

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(125, 140, 255);
`;

const TodoTotal = styled.span`
    font-weight: bold;
`;

const Input = styled.input`
    float: right;
    width: 10rem;
    height: 35%;
    border-radius: 2rem;
    padding: 0.5rem;
    padding-left: 1.5rem;
    border: 0.1px solid rgba(125, 140, 255, 0.5);
    color: rgb(125, 140, 255);
    outline: none;
    &::placeholder {
        color: rgb(125, 140, 255);
    }
`;

const AddTodo = styled.div`
    width: 12rem;
    font-weight: bold;
    cursor: pointer;
`;

const BottomContainer = () => {
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true);
    };
    const closeModal = () => {
        setVisible(false);
    };
    return (
        <TodoBottom>
            <Container>
                <p style={{ fontWeight: 'bold' }}>
                    Task : <TodoTotal></TodoTotal>
                </p>
                <Input type="text" placeholder="Write a Todo" />
                <AddTodo onClick={openModal}>Add Task 💬</AddTodo>
            </Container>
        </TodoBottom>
    );
};

export default BottomContainer;
