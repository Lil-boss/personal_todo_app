import React from 'react';
import { useForm } from 'react-hook-form';
const Taskbar = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center items-center mt-20'>
            <div className="card mx-w-lg bg-base-100 shadow-xl">
                <div className="card-body ">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                        <input type="text" {...register("taskName", { required: true })} placeholder="Task Name" className="input input-bordered input-sm w-56 max-w-xs" />
                        <textarea {...register("taskName", { required: true })} className="textarea textarea-bordered mt-4" placeholder="Description"></textarea>
                        <button type='submit' className=' btn-secondary mt-8 w-full text-white h-9 rounded-md'>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Taskbar;