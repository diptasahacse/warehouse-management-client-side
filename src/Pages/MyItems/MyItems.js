import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemTableRow from './MyItemTableRow/MyItemTableRow';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [])
    console.log(myProducts)
    return (
        <Container className='py-3'>
            <h3>My Products</h3>
            {
                myProducts.length > 0?
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Email</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myProducts.map((product, index) => <MyItemTableRow index={index} product={product} key={product._id}></MyItemTableRow>)
                            }
                        </tbody>
                    </Table>
                </div>
                :
                <p className='text-center'>Data Not found</p>
            }
        </Container>
    );
};

export default MyItems;