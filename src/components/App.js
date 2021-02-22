import React from 'react';
import TodoContainer from './TodoContainer';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(to right, rgb(234, 176, 194), rgb(172, 125, 199));
`;

const App = () => {
    return (
        <Container>
            <TodoContainer />
        </Container>
    );
};

export default App;
