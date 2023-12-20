import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    todos: [
        { id:0, name: "wash", isDone: false },
        { id:1, name: "dance", isDone: false },
        { id:2, name: "eat", isDone: false },
        { id:3, name: "cook", isDone: false },
        { id:4, name: "study", isDone: false }
    ]
}

const tasksSlice = createSlice({
    name: "todoArray",
    initialState: initValue,
    reducers: {
        add: (state, actions) => {
            state.todos.push(actions.payload.todos)
        },
        Delete: (state, actions) => {
            state.todos = state.todos.filter((item) => {
                return(actions.payload.id !== item.id)
            });
        },
    }
});
export const { add,Delete} = tasksSlice.actions
export default tasksSlice.reducer