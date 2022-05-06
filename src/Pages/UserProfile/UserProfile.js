import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <Container className='py-3'>
            <div>
                <h3>
                    Hello, {user.displayName}
                </h3>
                <p>{user.email}</p>
            </div>
        </Container>
    );
};

export default UserProfile;