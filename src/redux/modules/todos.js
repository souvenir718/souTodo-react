const tempTodo = {
    id: 1,
    title: '예시',
    isDone: false,
    date: new Date(),
};

const initialState = [tempTodo];

let nextId = 1;

// Action Type 정의
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

export const addTodo = (title) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        title,
        isDone: false,
        date: new Date(),
    },
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

//reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map((todo) => (todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo));
        default:
            return state;
    }
};
export default todos;
