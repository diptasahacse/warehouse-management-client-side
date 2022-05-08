import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
    console.log(errorMessage)
    return (
        <div className="overflow-hidden" style={{ backgroundColor: "#F7F8FD" }}>
            <Container style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }} className='my-4 p-4'>
                <div>
                    <div className='mb-3 d-flex justify-content-between align-items-center'>
                        <h3 className='m-0'>Login</h3>
                        <Link style={{ textDecoration: 'none' }} to='/register'>New here.?</Link>

                    </div>
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

                            {
                                errorMessage ? <p className='text-danger'>{errorMessage}</p> : ''
                            }
                            <div className='d-flex justify-content-between'>
                                <input type="submit" className='primary-custom-button' value="Signin" />
                                <Link style={{ textDecoration: 'none' }} to='/resetpassword'>Forgot password..?</Link>
                            </div>

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