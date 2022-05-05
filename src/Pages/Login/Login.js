import React, { useRef } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorMessage;
    const loginOnSubmitHandler = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
        if (!user?.user?.emailVerified) {
            await sendEmailVerification();

        }




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
    else {
        // navigate(from, { replace: true });
    }
    if (error1) {
        errorMessage = error1.message
    }
    if (error2) {
        errorMessage = error2.message
    }
    console.log(errorMessage)
    return (
        <Row xs={1} md={2} className='m-0'>
            <Col>
                <div>
                    <h3>Looks you are new here Signin</h3>
                </div>
            </Col>
            <Col>
                <div>
                    <h3>Login</h3>
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
                            <Button variant="primary" type="submit">
                                Signin
                            </Button>
                        </Form>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Login;