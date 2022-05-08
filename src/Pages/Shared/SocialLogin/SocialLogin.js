import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SectionTitle from '../SectionTitle/SectionTitle';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let navigate = useNavigate();
    let location = useLocation();
    let errorMessage;
    let from = location.state?.from?.pathname || "/";



    const signInWithGoogleHandler = () => {
        signInWithGoogle();

    }
    if (loading) {
        return <Loading></Loading>

    }
    if (user) {
        navigate(from, { replace: true });

    }
    if (error) {
        errorMessage = error?.message
    }
    return (
        <div>

            <SectionTitle title='Sign in with' color='#212529'></SectionTitle>
            <div className='d-flex justify-content-center m-2'>
                
                <button onClick={signInWithGoogleHandler} className='  p-1 m-1 border-0 bg-transparent'>
                    <div style={{ height: "40px", width: "40px", border: "1px solid #86BA09" }} className='rounded-circle'>
                        <img className='img-fluid' src='https://i.ibb.co/1ZqJvmW/google.png' alt="Google" />

                    </div>
                </button>
                <div style={{ height: "40px", width: "40px", border: "1px solid #86BA09" }} className=' rounded-circle p-1 m-1'>
                    <img className='img-fluid' src='https://i.ibb.co/KW4rvpJ/facebook.png' alt="Google" />

                </div>
            </div>
            <div className='text-center'>
                <p className='text-danger'>{errorMessage ? errorMessage : ''}</p>
            </div>

        </div>
    );
};

export default SocialLogin;