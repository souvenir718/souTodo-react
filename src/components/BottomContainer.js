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
        font-weight: bold;
    }
    display: ${(props) => (props.visible ? '' : 'none')};
`;

const AddTodo = styled.div`
    width: 12rem;
    font-weight: bold;
    cursor: pointer;
`;

const TaskText = styled.p`
    font-weight: bold;
    width: 10rem;
    display: ${(props) => (props.visible ? 'none' : '')};
`;

const BottomContainer = () => {
    const [visible, setVisible] = useState(false);

    const show = () => {
        setVisible((visible) => !visible);
        console.log(visible);
    };

    return (
        <TodoBottom>
            <Container>
                <Input visible={visible} type="text" placeholder="Write a Todo" />
                <TaskText visible={visible}>
                    Task : <TodoTotal></TodoTotal>
                </TaskText>
                <AddTodo onClick={show}>Add Task 💬</AddTodo>
            </Container>
        </TodoBottom>
    );
};

export default BottomContainer;
