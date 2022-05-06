import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='py-3 border-top border-primary'>
            <div className='text-center'>
                <Container>
                    <p className='m-0'>&copy; Copyright {new Date().getFullYear()} by Dipta Saha. All Rights Reserved</p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;