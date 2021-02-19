import React from 'react';
import Date from './DateContainer';
import styled from 'styled-components';

const ContentsBox = styled.div`
    width: 27rem;
    height: 60vh;
    text-align: center;
    background-color: white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: 0.1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3%;
    position: relative;
`;

const TodoContainer = () => {
    return (
        <ContentsBox>
            <Date />
            <div>TodoList</div>
            <div>bottomContainer</div>
        </ContentsBox>
    );
};

export default TodoContainer;
