import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddItem = () => {
    const productNameRef = useRef('');
    const productDescriptionRef = useRef('');
    const productPriceRef = useRef('');
    const productQuantityRef = useRef('');
    const productImageRef = useRef('');
    const supplierNameRef = useRef('');
    const [user] = useAuthState(auth);
    const [isChecked, setIsChecked] = useState(false);
    const addProductHandleListener = event => {
        event.preventDefault();
        const email = user?.email;
        const productName = productNameRef.current.value;
        const productDes = productDescriptionRef.current.value;
        const supplierName = supplierNameRef.current.value;
        const productPrice = productPriceRef.current.value;
        const productQuantity = productQuantityRef.current.value;
        const productImageLink = productImageRef.current.value;
        const productDetails = {
            email,
            productName,
            productDes,
            productPrice,
            productQuantity,
            productImageLink,
            supplierName
        }

        fetch(`https://agile-waters-08057.herokuapp.com/products`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)


        })
            .then(res => res.json())
            .then(result => {
                if (result?.acknowledged) {
                    event.target.reset()

                }
            })

        // console.log(productDetails)

    }
    const addItemCheckHandler = (event) => {
        if (event.target.checked) {
            setIsChecked(true)
        }
        else {
            setIsChecked(false)
        }

    }

    return (

        <div style={{ 'backgroundColor': "#F7F8FD" }} className="overflow-hidden">
            <Container className='my-4 p-5' style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }}>
                <div>
                    <h2>Add Item</h2>
                </div>
                <div>
                    <div>
                        <Form onSubmit={addProductHandleListener}>


                            <Row xs={1} lg={2}>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={user?.email} readOnly />
                                    </Form.Group>

                                </Col>
                                <Col>


                                    <Form.Group className="mb-3" controlId="formBasicProductSupplierName">
                                        <Form.Label>Supplier Name</Form.Label>
                                        <Form.Control ref={supplierNameRef} type="text" placeholder="Supplier Name" required />
                                    </Form.Group>

                                </Col>

                            </Row>

                            <Row xs={1} lg={2}>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicProductName">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control ref={productNameRef} type="text" placeholder="Product Name" required />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicProductImageLink">
                                        <Form.Label>Product Image Link</Form.Label>
                                        <Form.Control ref={productImageRef} type="text" placeholder="Product Image Link" required />
                                    </Form.Group>

                                </Col>

                            </Row>

                            <Row xs={1} lg={2}>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicProductPrice">
                                        <Form.Label>Product Price</Form.Label>
                                        <Form.Control ref={productPriceRef} type="number" placeholder="Product Price" required />
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicProductQuantity">
                                        <Form.Label>Product Quantity</Form.Label>
                                        <Form.Control ref={productQuantityRef} type="number" placeholder="Product Quantity" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formBasicProductDescription">
                                <Form.Label>Product Description</Form.Label>
                                <Form.Control ref={productDescriptionRef} as="textarea" rows={3} placeholder="Product Description" required />

                            </Form.Group>



                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check onChange={addItemCheckHandler} type="checkbox" label="All info are correct" />
                            </Form.Group>

                            <button disabled={!isChecked} className='primary-custom-button'>Add Product</button>
                        </Form>
                    </div>
                </div>

                
            </Container>
        </div>
    );
};

export default AddItem;