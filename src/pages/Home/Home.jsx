import React from 'react';
import Table from '../../components/table/Table';
import Taskbar from '../../components/taskbar/Taskbar';

const Home = () => {
    return (
        <div>
            <div className='sticky top-0 z-10'>
                <h1 className='text-4xl bg-secondary text-white text-center p-4'>Personal <span className='text-violet-700 font-bold'>TODO</span> App</h1>
            </div>
            <Taskbar />
            <Table />
        </div>
    );
};

export default Home;