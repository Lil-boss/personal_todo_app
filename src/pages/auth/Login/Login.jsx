import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.init';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state ? location.state.from : { pathname: '/' };
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleLogin = () => {
        try {
            signInWithGoogle()
        } catch (e) {
            console.log(e)
        }
    }

    if (user) {
        navigate(from || '/', { replace: true });
    }
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    return (
        <div className='flex justify-center items-center mt-10'>
            <button onClick={handleLogin} class="btn btn-outline btn-success">Login With Google</button>
        </div>
    );
};

export default Login;