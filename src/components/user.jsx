import React from "react";
import { useDispatch } from "react-redux";
import { add, Delete } from "../redux/todoSlice";
import { useSelector } from "react-redux";

const User = () => {
    const dispatch = useDispatch();
    const arr = useSelector((myRedux) => myRedux.peopleSlice.users)

    const handleDelete = (id) => {
        dispatch(Delete({ id: id }));
    }
    return (<>
        <div>user</div>
        {arr.map((item) => {
            return (<>
                <div>{item.name}</div>
                <button onClick={(() => { handleDelete(item.id) })}>מחיקה</button>
            </>)
        })}
    </>


    )
}

export default User;