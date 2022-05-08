import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PhoneIcon } from '@heroicons/react/solid'

const Footer = () => {
    return (
        <footer className='py-3'>


            <Container>
                
                <hr />
                <div className='text-center py-3'>
                    <p className='m-0'>&copy; Copyright {new Date().getFullYear()} by Dipta Saha. All Rights Reserved</p>
                </div>
            </Container>

        </footer>
    );
};

export default Footer;