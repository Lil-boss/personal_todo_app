import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import Taskbar from '../../components/taskbar/Taskbar';
import auth from '../auth/firebase/firebase.init';

const Home = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <div className='sticky top-0 z-10 bg-secondary text-white'>
                <div className='w-4/5 mx-auto'>
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className='text-4xl  text-center p-4'>Personal <span className='text-violet-700 font-bold'>TODO</span> App</h1>
                        {
                            user ? <button onClick={logout} className='text-2xl'><Link to="/">Logout</Link></button>
                                : <h1 className='text-2xl'><Link to="/login">Login</Link></h1>
                        }
                    </div>
                </div>
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