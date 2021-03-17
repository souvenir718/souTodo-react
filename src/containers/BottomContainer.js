import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BottomView from '../components/BottomView';
import { addTodo } from '../redux/modules/store';

const TodosContainer = () => {
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();

    const onCreate = (text) => dispatch(addTodo(text));

    return <BottomView todos={todos} onCreate={onCreate} />;
};

export default TodosContainer;
