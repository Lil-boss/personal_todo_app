import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Complete = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://mysterious-sea-46191.herokuapp.com/api/complete")
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
                                <td><s>{item.taskName}</s></td>
                                <td><s>{item.description}</s></td>
                                <td><s>{item.taskDate}</s></td>
                                <td>
                                    <button className='btn btn-error ml-3 text-white' onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Complete;