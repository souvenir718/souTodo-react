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

const initialState = todosTemp;

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
