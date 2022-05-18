import React from 'react';
import { Link } from 'react-router-dom';
import Taskbar from '../../components/taskbar/Taskbar';

const Home = () => {
    return (
        <div>
            <div className='sticky top-0 z-10'>
                <h1 className='text-4xl bg-secondary text-white text-center p-4'>Personal <span className='text-violet-700 font-bold'>TODO</span> App</h1>
            </div>
            <Taskbar />
            <div className='w-4/5 mx-auto bg-primary text-white'>
                <div className='flex justify-center items-center mt-8 p-4'>
                    <Link to="/task" className='mr-10 font-bold text-2xl'>Task</Link>
                    <Link to="/complete" className='font-bold text-2xl'>Complete</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;