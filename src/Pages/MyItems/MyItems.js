import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@fat</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default MyItems;