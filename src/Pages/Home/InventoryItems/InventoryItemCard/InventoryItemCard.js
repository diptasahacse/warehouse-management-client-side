import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const InventoryItemCard = ({ product }) => {
    const { _id, email, productImageLink, productDes, productName, productPrice, productQuantity, supplierName } = product;
    const navigate = useNavigate();


    const stockUpdateHandleListener = (id) =>{
        navigate(`inventory/${id}`)
        

    }
    return (
        <Col>
            <Card className='inventory-product-card h-100 position-relative'>
                <span className="badge bg-warning text-dark position-absolute top end-0  mt-2 me-2">{supplierName}</span>
                <Card.Img variant="top" src={productImageLink} />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                    <Card.Text>
                        <div>
                            <p>
                                {
                                    productDes.length > 80 ? productDes.slice(0, 80) + "..." : productDes
                                }
                            </p>
                            <div className='d-flex justify-content-between'>
                                <p>Price: ${productPrice}</p>
                                <p>Quantity: {productQuantity}</p>
                            </div>

                        </div>

                    </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-transparent border-0 text-end'>
                    <button onClick={()=>stockUpdateHandleListener(_id)} className='btn btn-success btn-sm'>Stock update</button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default InventoryItemCard;