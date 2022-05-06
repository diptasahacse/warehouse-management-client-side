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

        fetch(`http://localhost:5000/products`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)


        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
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
        <Container className='py-3'>

            <Row className='m-0' md={2} xs={1}>
                <Col>
                    <div>
                        <h2>Add Item</h2>
                    </div>
                </Col>
                <Col>
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
                            <Button disabled={!isChecked} variant="primary" type="submit">
                                Add Product
                            </Button>
                        </Form>
                    </div>

                </Col>

            </Row>
        </Container>
    );
};

export default AddItem;