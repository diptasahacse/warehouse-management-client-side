import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { BadgeCheckIcon, HashtagIcon, LockClosedIcon } from '@heroicons/react/solid'
import useProducts from '../../../hooks/useProducts';


const Counter = () => {
    const [allProducts] = useProducts();

    const allEmails = [];
    allProducts.map(product => {
        if (!allEmails.includes(product?.email)) {
            allEmails.push(product?.email)
        }
    })
    

    return (
        <div style={{ 'backgroundImage': `url("https://i.ibb.co/6F6Cd2Z/banner1.jpg")`, "backgroundRepeat": "no-repeat", backgroundSize: 'cover', backgroundAttachment: "fixed" }}>
            <div className='py-3' style={{ backgroundColor: "rgb(23 78 23 / 67%)" }}>
                <Container>
                    <SectionTitle color="white" title="Interesting Fact"></SectionTitle>
                    <div className='py-3' >
                        <Row xs={1} md={3}>
                            <Col>
                                <div className='d-flex align-items-center text-white justify-content-center'>
                                    <span>
                                        <HashtagIcon style={{ height: "65px", width: "65px" }} className="text-blue-500" />
                                    </span>
                                    <div>
                                        <h2 style={{ fontSize: "50px", color: '#86BA09' }}>{allProducts.length - 1}+</h2>
                                        <p>Total Products available</p>
                                    </div>

                                </div>

                            </Col>
                            <Col>
                                <div className='d-flex align-items-center text-white justify-content-center'>
                                    <span>
                                        <LockClosedIcon style={{ height: "65px", width: "65px" }} className="text-blue-500" />
                                    </span>
                                    <div>
                                        <h2 style={{ fontSize: "35px", color: '#86BA09' }}>Secured</h2>
                                        <p>This system is secure</p>
                                    </div>

                                </div>


                            </Col>
                            <Col>
                                <div className='d-flex align-items-center text-white justify-content-center'>
                                    <span>
                                        <BadgeCheckIcon style={{ height: "65px", width: "65px" }} className="text-blue-500" />
                                    </span>
                                    <div>
                                        <h2 style={{ fontSize: "50px", color: '#86BA09' }}>{allEmails.length - 1}+</h2>
                                        <p>Authentic Users</p>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default Counter;