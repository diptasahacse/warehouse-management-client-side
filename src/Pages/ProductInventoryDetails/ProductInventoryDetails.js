import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductInventoryDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id])
    console.log(product)

    return (
        <Container className='py-3'>
            <Row xs={1} md={2} >
                <Col>
                    <h3>Product Details</h3>
                    <div className='p-3'>

                        <div className='d-flex justify-content-center mb-2'>
                            <div style={{ height: "150px", width: "150px" }}>
                                <img className='w-100 rounded-circle' src={product?.productImageLink} alt="" />
                            </div>

                        </div>


                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <td>{product?._id}</td>
                                    </tr>
                                    <tr>
                                        <th>Name</th>
                                        <td>{product?.productName}</td>
                                    </tr>
                                    <tr>
                                        <th>Description</th>
                                        <td>{product?.productDes}</td>
                                    </tr>
                                    <tr>
                                        <th>Price</th>
                                        <td>{product?.productPrice}</td>
                                    </tr>
                                    <tr>
                                        <th>Quantity</th>
                                        <td>{product?.productQuantity}</td>
                                    </tr>
                                    <tr>
                                        <th>Supplier</th>
                                        <td>{product?.supplierName}</td>
                                    </tr>

                                </thead>

                            </Table>
                        </div>

                    </div>

                </Col>
                <Col>
                    <h3>Update</h3>

                    <div className='border mt-4 p-2 rounded'>
                        <h5>Deliver the Product</h5>
                        <button className='btn mt-3 btn-sm btn-danger'>Delivered</button>

                    </div>

                    <div className='border mt-4 p-2 rounded'>
                        <h5>Restock the Product</h5>
                        <div className='mt-3'>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicQuantity">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Quantity" />

                                </Form.Group>
                                <Button variant="primary" size='sm' type="submit">
                                    Restock
                                </Button>
                            </Form>
                        </div>

                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default ProductInventoryDetails;