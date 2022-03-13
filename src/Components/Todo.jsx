import React, { useState } from 'react';
import "./Todo.css";
import { addTodo, deleteTodo, removeAllTodo } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';

// react icons
import { AiOutlinePlus } from 'react-icons/ai';
import { BsTrash } from "react-icons/bs";

const Todo = ({ title }) => {
    const [inputData, setInputData] = useState("");
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();

    const addTodoList = () => {
        dispatch(addTodo(inputData));
        setInputData("");
    };

    return (
        <>
            <div className="container my-5">
                <h1 className='text-center'>{title}</h1>
            </div>

            <div className="container d-flex justify-content-center align-items-center">
                <input
                    type="text"
                    placeholder='✍️ Enter Todo'
                    className='form-control'
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <AiOutlinePlus
                    className='plus'
                    onClick={addTodoList}
                />
            </div>

            <div className="container removeAll">
                <button className='btn btn-danger my-3' onClick={() => dispatch(removeAllTodo())}>Remove All</button>
            </div>

            <div className="container list my-3">

                {
                    list.map((elem) => {
                        return (
                            <div className="eachItem mb-3" key={elem.id}>
                                <p>{elem.data}</p>
                                <BsTrash
                                    className='trash mb-2'
                                    onClick={() => dispatch(deleteTodo(elem.id))}
                                />
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Todo