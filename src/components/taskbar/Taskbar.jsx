import React from 'react';
import { useForm } from 'react-hook-form';
import "./taskbar.css"
const Taskbar = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='main'>
            <div className='main-header'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='input-field' type="text" {...register("taskName", { required: true })} placeholder="Add Task" />
                    <button className='btn' type='submit'>Add</button>
                </form>
            </div>
        </div>
    );
};

export default Taskbar;