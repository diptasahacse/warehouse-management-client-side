import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'

const ProductInventoryDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const quantityRef = useRef(0);
    const reduceQuantityRef = useRef(0);
    let currentQuantity = Number(product.productQuantity);
    const [isQuantityUpdate, setIsQuantityUpdate] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [isQuantityUpdate])

    // console.log(product)


    const onDeliverHandler = () => {
        currentQuantity -= 1;

        const productUpdatedData = {
            email: product?.email,
            productDes: product?.productDes,
            productImageLink: product?.productImageLink,
            productName: product?.productName,
            productPrice: product?.productPrice,
            productQuantity: currentQuantity.toString(),
            supplierName: product?.supplierName
        }

        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(productUpdatedData)


        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    setIsQuantityUpdate(isQuantityUpdate + 1);
                }
            })


    }
    const reStockHandler = event => {
        event.preventDefault();
        const inputQuantity = Number(quantityRef.current.value);
        let totalQuantity = inputQuantity + currentQuantity;
        const productUpdatedData = {
            email: product?.email,
            productDes: product?.productDes,
            productImageLink: product?.productImageLink,
            productName: product?.productName,
            productPrice: product?.productPrice,
            productQuantity: totalQuantity.toString(),
            supplierName: product?.supplierName
        }

        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(productUpdatedData)


        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    setIsQuantityUpdate(isQuantityUpdate + 1);
                    event.target.reset();

                }
            })
    }
    const onQuantityIncreaseHandler = () => {
        currentQuantity += 1;

        const productUpdatedData = {
            email: product?.email,
            productDes: product?.productDes,
            productImageLink: product?.productImageLink,
            productName: product?.productName,
            productPrice: product?.productPrice,
            productQuantity: currentQuantity.toString(),
            supplierName: product?.supplierName
        }

        fetch(`http://localhost:5000/products/${id}`, {
            method: "PUT",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(productUpdatedData)


        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    setIsQuantityUpdate(isQuantityUpdate + 1);
                }
            })

    }
    const reduceStockHandler = (event) => {
        event.preventDefault();
        const inputQuantity = Number(reduceQuantityRef.current.value);
        // console.log(currentQuantity, inputQuantity)
        if (currentQuantity >= inputQuantity) {
            let totalQuantity = currentQuantity - inputQuantity;
            const productUpdatedData = {
                email: product?.email,
                productDes: product?.productDes,
                productImageLink: product?.productImageLink,
                productName: product?.productName,
                productPrice: product?.productPrice,
                productQuantity: totalQuantity.toString(),
                supplierName: product?.supplierName
            }

            fetch(`http://localhost:5000/products/${id}`, {
                method: "PUT",
                headers: { 'content-type': "application/json" },
                body: JSON.stringify(productUpdatedData)


            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged) {
                        setIsQuantityUpdate(isQuantityUpdate + 1);
                        event.target.reset();

                    }
                })


        }
        else {
            event.target.reset();
            console.log('Quantity is not available')


        }

    }


    return (
        <div style={{ 'backgroundColor': "#F7F8FD" }} className="overflow-hidden">
            <Container className='my-4 p-5' style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }}>
                <div className=''>
                    <h4 className='mb-4' style={{ color: "#86BA09" }}>{product?.productName}</h4>
                    <Row xs={1} md={2} >
                        <Col>
                            <div className='d-flex justify-content-center overflow-hidden align-items-center'>
                                <img className='w-100 img-fluid product-details-image' src={product?.productImageLink} alt="" />

                            </div>

                        </Col>
                        <Col>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h3>${product?.productPrice}</h3>
                                {
                                    product?.productQuantity > 0 ? <div className='d-inline py-1 px-2' style={{ backgroundColor: '#e5f8ed', color: "#00b853", borderRadius: "5px" }}>Available</div> : <div className='d-inline py-1 px-2' style={{ backgroundColor: 'rgb(255 5 5 / 47%)', color: "rgb(189 13 13)", borderRadius: "5px" }}>Out of Stock</div>
                                }

                            </div>

                            <h6>{product?.supplierName}</h6>


                            <p className='mt-2'>Id: {product?._id}</p>
                            <p>{product?.productDes}</p>

                            <div>
                                <div className='d-flex align-items-center  h-100'>
                                    <div className='d-flex align-items-center'>

                                        <div onClick={onDeliverHandler} role="button" className={`${product?.productQuantity == 0 ? 'invisible' : 'visible'} quantity-button rounded-circle`}>
                                            <span>
                                                <MinusSmIcon style={{ height: "25px", width: "25px" }} className="text-blue-500" />
                                            </span>
                                        </div>
                                        <p style={{ margin: "0 15px" }}>{product?.productQuantity}</p>
                                        <div onClick={onQuantityIncreaseHandler} role="button" className=' quantity-button rounded-circle'>
                                            <span>
                                                <PlusSmIcon style={{ height: "25px", width: "25px" }} className="text-blue-500" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Row xs={1} lg={2}>
                                <Col>
                                    <div className='border mt-2 p-2 rounded'>
                                        <h5>Reduce the Product</h5>
                                        <div className='mt-3'>
                                            <Form className='d-flex align-items-center' onSubmit={reduceStockHandler}>
                                                <Form.Group controlId="formBasicQuantity">
                                                    <Form.Control required ref={reduceQuantityRef} type="number" placeholder="Enter Quantity" />

                                                </Form.Group>
                                                <Button disabled={product?.productQuantity == 0 ? true : false} className='ms-2' variant="primary" size='sm' type="submit">
                                                    Reduce
                                                </Button>
                                            </Form>
                                        </div>

                                    </div>


                                </Col>
                                <Col>
                                    <div className='border mt-2 p-2 rounded'>
                                        <h5>Restock the Product</h5>
                                        <div className='mt-3'>
                                            <Form className='d-flex align-items-center' onSubmit={reStockHandler}>
                                                <Form.Group controlId="formBasicQuantity">
                                                    <Form.Control required ref={quantityRef} type="number" placeholder="Enter Quantity" />

                                                </Form.Group>
                                                <Button className='ms-2' variant="primary" size='sm' type="submit">
                                                    Restock
                                                </Button>
                                            </Form>
                                        </div>

                                    </div>

                                </Col>
                            </Row>



                            <div className='my-3 d-flex align-items-center'>
                                <h3>Total Price:</h3>
                                <h5 className='ms-2'> ${Number(product?.productPrice) * Number(product?.productQuantity)}
                                    <span style={{ color: "rgb(192 193 195)" }} className='ms-2'>(${product?.productPrice} x {product?.productQuantity})</span>
                                </h5>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ProductInventoryDetails;