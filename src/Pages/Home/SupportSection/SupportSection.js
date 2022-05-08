import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PhoneIcon } from '@heroicons/react/solid'
const SupportSection = () => {
    return (
        <div className='py-3'>
            <div className="row m-0">
                <div className="col-12 col-md-4">
                    <div className='d-flex align-items-center h-100 justify-content-center my-3'>
                        <span>
                            <PhoneIcon style={{ height: "25px", width: "25px" }} className="text-blue-500" />
                        </span>
                        <div className='ms-3'>
                            <h5 className='m-0'>8 800 555-55</h5>
                            <span className='text-muted fw-light'>Working 8:00 - 22:00</span>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-8">
                    <div className='d-flex justify-content-center my-3'>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className='text-center '>
                                    <h5 className='m-0'>Download App on Mobile</h5>
                                    <span className='text-muted fw-light'>15% discount on your first purchase</span>
                                </div>

                            </div>
                            <div className="col-12 col-md-6">
                                <div className='d-flex align-items-center justify-content-center h-100'>
                                    <img className='me-2' src="https://i.ibb.co/vLtMFzg/google-play.png" alt="google play store" />
                                    <img src="https://i.ibb.co/xCkRQpN/app-store.png" alt="google play store" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SupportSection;