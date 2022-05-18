import React from 'react';
import Table from '../../components/table/Table';
import Taskbar from '../../components/taskbar/Taskbar';

const Home = () => {
    return (
        <div>
            <Taskbar />
            <Table />
        </div>
    );
};

export default Home;