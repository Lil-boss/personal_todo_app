import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://mysterious-sea-46191.herokuapp.com/api/all")
            .then(res => { setData(res.data) })
    }, [data]);

    const handleDelete = (id) => {
        try {
            axios.delete(`https://mysterious-sea-46191.herokuapp.com/api/tasks/${id}`)
                .then(res => toast.success("Task deleted successfully"))
        } catch (err) {
            console.log(err);
        }
    }
    const handleSuccess = (id) => {
        try {
            axios.put(`https://mysterious-sea-46191.herokuapp.com/api/tasks/${id}`,
                {
                    isCompleted: true
                })
                .then(res => toast.success("Task successfully completed"))
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='w-4/5 mx-auto'>
            <div className="overflow-x-auto mt-10 mb-10">
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
                            data.map((item, index) => item.isCompleted === false ?
                                <tr key={index}>
                                    <td>{item.taskName}</td>
                                    <td>{item.description}</td>
                                    <td>{item.taskDate}</td>
                                    <td>
                                        <button className='btn btn-error text-white' onClick={() => handleDelete(item._id)}>Delete</button>
                                        <button className='btn btn-success ml-3 text-white' onClick={() => handleSuccess(item._id)}>Success</button>
                                    </td>
                                </tr> : null)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;