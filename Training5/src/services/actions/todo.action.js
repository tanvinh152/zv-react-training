import {
    ADD_TODO,
    CLOSE_MODAL,
    DELETE_TODO,
    FILTER_TODO,
    GET_TODO_LIST,
    OPEN_MODAL,
    SEARCH_TODO,
    UPDATE_TODO,
} from "../constants/todoConstants";

export const getTodoList = (todos) => {
    return {
        type: GET_TODO_LIST,
        payload: todos,
    };
};

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
};

export const updateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        payload: todo,
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };
};

export const searchTodo = (name) => {
    return {
        type: SEARCH_TODO,
        payload: name,
    };
};

export const filterTodo = (boolean) => {
    return {
        type: FILTER_TODO,
        payload: boolean,
    };
};
