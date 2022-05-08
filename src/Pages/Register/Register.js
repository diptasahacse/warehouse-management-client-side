import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let infoMessage;
    let errorMessage;
    const [updateProfile, updating, error2] = useUpdateProfile(auth);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const signUpOnSubmitHandler = async (event) => {
        infoMessage = '';
        errorMessage = '';
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })


    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error1 || error2) {
        errorMessage = error1 ? error1.message : error2.message;
    }
    console.log(error1)
    console.log(error2)

    if (user) {
        infoMessage = 'A Verify link is sent your email address. please verify it.'
    }
    console.log(user)
    return (
        <div className="overflow-hidden" style={{ backgroundColor: "#F7F8FD" }}>
            <Container style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }} className='my-4 p-4'>
                <div>
                    <h3 className='mb-3'>SignUp</h3>
                    <div>
                        <Form onSubmit={signUpOnSubmitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Enter Full Name</Form.Label>
                                <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                            <div>
                                {
                                    infoMessage ? <p className='text-success'>{infoMessage}</p> : ''
                                }
                            </div>
                            <div>
                                {
                                    errorMessage ? <p className='text-danger'>{errorMessage}</p> : ''
                                }
                            </div>
                            <input className='primary-custom-button' type="submit" value="Register" />

                        </Form>
                    </div>
                </div>
            </Container>
            <Container style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }} className='my-4 p-4'>
                <SocialLogin></SocialLogin>

            </Container>
        </div>
    );
};

export default Register;