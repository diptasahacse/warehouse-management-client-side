import React from 'react';
import { Container } from 'react-bootstrap';
import { ChevronLeftIcon } from '@heroicons/react/solid'

const NotFound = () => {
    return (
        <div style={{ 'backgroundColor': "#F7F8FD" }} className="overflow-hidden">
            <Container className='my-4 p-5' style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }}>
                <div className='text-center'>
                    <img className='img-fluid w-50' src="https://i.ibb.co/QmyBpxZ/not-found.png" alt="not found" />
                </div>
                <div className='text-center my-2'>
                    <h4 className='text-danger'>The Page you are looking for can not be found.</h4>
                    <button className='bg-transparent border-0 text-danger fs-4 fw-bold mt-4'>
                        <ChevronLeftIcon style={{ height: "25px", width: "25px" }} />
                        <span className='ms-1'>Back</span>
                    </button>
                </div>
            </Container>

        </div>





    );
};

export default NotFound;