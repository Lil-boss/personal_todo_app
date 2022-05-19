import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
const Taskbar = () => {
    const { register, handleSubmit } = useForm();
    const [date, setDate] = useState(new Date());
    const onSubmit = data => {
        try {
            const taskName = data.taskName;
            const description = data.description;
            const taskDate = date.toDateString();
            axios.post('https://mysterious-sea-46191.herokuapp.com/api/tasks', {
                taskName,
                description,
                taskDate,
                isCompleted: false
            })
                .then(res => toast.success("Task added successfully")
                );
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div className='flex justify-center items-center mt-20'>
                <div className="card mx-w-lg bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                            <input type="text" {...register("taskName", { required: true })} placeholder="Task Name" className="input input-bordered input-sm w-56 max-w-xs" />
                            <textarea {...register("description", { required: true })} className="textarea textarea-bordered mt-4" placeholder="Description"></textarea>
                            <button type='submit' className=' btn-secondary mt-8 w-full text-white h-9 rounded-md'>Add</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Taskbar;