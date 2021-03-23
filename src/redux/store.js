import { configureStore, createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const TODOS_LS = 'TODO_LIST';

const initialState = localStorage.getItem(TODOS_LS) ? JSON.parse(localStorage.getItem(TODOS_LS)) : [];

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: initialState,
    reducers: {
        add(state, action) {
            state.push({
                title: action.payload,
                id: Math.random().toString(36).slice(2),
                isDone: false,
                date: moment().format('YYYY.MM.DD'),
            });
        },
        toggle: (state, action) => state.map((todo) => (todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)),
        deleteTodo: (state, action) => state.filter((todo) => todo.id !== action.payload),
    },
});

const store = configureStore({ reducer: toDos.reducer });
store.subscribe(() => localStorage.setItem(TODOS_LS, JSON.stringify(store.getState())));
export const { add, toggle, deleteTodo } = toDos.actions;
export default store;
