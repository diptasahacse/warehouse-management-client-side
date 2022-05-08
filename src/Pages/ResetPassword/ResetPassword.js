import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    let errorMessage;

    const resetOnSubmitHandler = async(event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
        if (!error) {
            toast('Sent password reset email')

        }

    }
    if (sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorMessage = error.message

    }
    return (
        <div style={{ 'backgroundColor': "#F7F8FD" }} className="overflow-hidden">
            <Container className='my-4 p-5' style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }}>

                <h3 className='mb-3'>Reset Password</h3>
                <div>
                    <Form onSubmit={resetOnSubmitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                        </Form.Group>


                        <input type="submit" className='primary-custom-button' value="Signin" />

                    </Form>

                </div>
                <ToastContainer />


            </Container>
        </div>
    );
};

export default ResetPassword;