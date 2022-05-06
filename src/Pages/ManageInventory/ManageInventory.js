import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import ManageInventoryTableRow from './ManageInventoryTableRow/ManageInventoryTableRow';

const ManageInventory = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    console.log(allProducts)
    return (
        <Container className='py-3'>
            <h3>All Products</h3>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Email</th>
                            <th>Supplier Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts.map((product, index) => <ManageInventoryTableRow key={product._id} index={index} product={product}></ManageInventoryTableRow>)
                        }
                        {/* <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr> */}

                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default ManageInventory;