import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, Delete } from "../redux/todoSlice";
import { useSelector } from "react-redux";
import { CheckBox } from "@mui/icons-material";

const Todo = () => {
    const dispatch = useDispatch();
    const arr = useSelector((myRedux) => myRedux.tasksSlice.todos)
    console.log(arr);


    // const handleDelete = (id) => {
    //     dispatch(Delete({ id: id }));
    // }
    const handleDone = (isDone) => {
        dispatch(({ isDone: !isDone }));
    }

    return (<>

        <div>To do</div>
        {arr.map((item) => {
            return (<>
                <div>{item.name}</div>
                <input type="checkbox" onClick={(() => { handleDone(item.isDone) })} /><label>האם הושלם</label>

                {/* <button onClick={(() => { handleDelete(item.id) })}>מחיקה</button> */}
            </>)

        })}
    </>
    )
}

export default Todo;