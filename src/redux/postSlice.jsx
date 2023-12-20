import { createSlice } from "@reduxjs/toolkit";

const initPost = {
    posts:[
        { id: 0, text:"aaaaaaaaaaaaaaaaaaaaaaaaa"},
        { id: 1, text:"bbbbbbbbbbbbbbbbbbbbbbbbb"},
        { id: 2, text:"ccccccccccccccccccccccccc"} ,
        { id: 3, text:"ddddddddddddddddddddddddd"},
        { id: 4, text:"eeeeeeeeeeeeeeeeeeeeeeeee"}
//////
    ]
}

const textSlice=createSlice({
    name:"postArray",
    initialState: initPost,
    reducers:{
        add: (state, actions) => {
            state.posts.push(actions.payload.posts)
        },
        Delete: (state,actions)=>{
            state.posts=state.posts.filter((item)=>{
                return(actions.payload.id!==item.id)
            })
        }
    }
});

export const { add,Delete} = textSlice.actions
export default textSlice.reducer