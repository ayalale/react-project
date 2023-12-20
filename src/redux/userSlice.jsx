import { createSlice } from "@reduxjs/toolkit";

const initUsers = {
    users: [
        { id:0, name: "avi"},
        { id:1, name: "yossi" },
        { id:2, name: "dani" },
        { id:3, name: "meni"},
        { id:4, name: "nati" }
    ]
}

const peopleSlice=createSlice({
    name: "userArray",
    initialState: initUsers,
    reducers:{
        add: (state, actions) => {
            state.users.push(actions.payload.users)
        },
        Delete: (state, actions) => {
            state.users = state.users.filter((item) => {
                return (actions.payload.id !== item.id)
            });
        },
    }
});

export const { add,Delete} = peopleSlice.actions
export default peopleSlice.reducer