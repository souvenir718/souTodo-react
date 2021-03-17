import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosTemp = [
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

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: todosTemp,
    reducers: {
        add: (state, action) => {
            state.push({ title: action.payload, id: Math.random().toString(36).slice(2), isDone: false, date: new Date() });
        },
        toggle: (state, action) => state.map((todo) => (todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)),
    },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, toggle } = toDos.actions;
export default store;
