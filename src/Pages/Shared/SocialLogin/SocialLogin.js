import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const SocialLogin = () => {
    return (
        <div>

            <SectionTitle title='Sign in with' color='#212529'></SectionTitle>
            <div className='d-flex justify-content-center m-2'>
                <div role='button' style={{ height: "40px", width: "40px", border:"1px solid #86BA09" }} className=' rounded-circle p-1 m-1'>
                    <img className='img-fluid' src='https://i.ibb.co/1ZqJvmW/google.png' alt="Google" />

                </div>
                <div role='button' style={{ height: "40px", width: "40px", border:"1px solid #86BA09" }} className=' rounded-circle p-1 m-1'>
                    <img className='img-fluid' src='https://i.ibb.co/KW4rvpJ/facebook.png' alt="Google" />

                </div>
            </div>

        </div>
    );
};

export default SocialLogin;