import React from "react";
import { useDispatch } from "react-redux";
import { add, Delete } from "../redux/postSlice";

import { useSelector } from "react-redux";


const Post = () => {
    const dispatch = useDispatch();
    const arr = useSelector((myRedux) => myRedux.textSlice.posts)

    const handleDelete = (id) => {
        dispatch(Delete({ id: id }));
    }
    return (
        <>
            <div>post</div>
            {arr.map((item) => {
                return (<>
                    <div>{item.text}</div>
                    <button onClick={(() => { handleDelete(item.id) })}>מחיקה</button>
                </>)
            })}
        </>
    )
}

export default Post;