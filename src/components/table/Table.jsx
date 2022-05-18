import React from 'react';
const Table = () => {
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
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;