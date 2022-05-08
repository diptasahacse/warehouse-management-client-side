import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorMessage;
    const loginOnSubmitHandler = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)





    }

    if (loading) {
        return <Loading></Loading>
    }

    if (!user?.user) {
        errorMessage = '';
    }
    else if (!user?.user?.emailVerified) {
        errorMessage = 'Please verify your email address before login';
    }

    if (user?.user?.emailVerified) {
        navigate(from, { replace: true });
    }
    if (error1) {
        errorMessage = error1.message
    }
    if (error2) {
        errorMessage = error2.message
    }
    console.log(errorMessage)
    return (
        <div className="overflow-hidden" style={{ backgroundColor: "#F7F8FD" }}>
            <Container style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }} className='my-4 p-4'>
                <div>
                    <h3 className='mb-3'>Login</h3>
                    <div>
                        <Form onSubmit={loginOnSubmitHandler}>
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
                            {
                                errorMessage ? <p className='text-danger'>{errorMessage}</p> : ''
                            }
                            <input type="submit" className='primary-custom-button' value="Signin" />

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

export default Login;