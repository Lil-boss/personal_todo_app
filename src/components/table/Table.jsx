import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Table = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://mysterious-sea-46191.herokuapp.com/api/all")
            .then(res => { setData(res.data) })
    }, [data])
    return (
        <div className='w-4/5 mx-auto'>
            <div className="overflow-x-auto mt-10">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th className='bg-secondary text-white'>Task Name</th>
                            <th className='bg-secondary text-white'>Description</th>
                            <th className='bg-secondary text-white'>Time/Date</th>
                            <th className='bg-secondary text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => <tr key={index}>
                                <td>{item.taskName}</td>
                                <td>{item.description}</td>
                                <td>{item.taskDate}</td>
                                <td>button</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;