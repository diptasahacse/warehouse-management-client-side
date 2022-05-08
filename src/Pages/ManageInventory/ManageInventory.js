import React, { createContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ManageInventoryTableRow from './ManageInventoryTableRow/ManageInventoryTableRow';

const ManageInventory = () => {
    const [allProducts, setAllProducts] = useProducts();
    const deleteProductHandler = (id) => {
        // console.log(id)
        const deleteStatus = window.confirm('Are you sure want to delete this item..?')
        if (deleteStatus) {
            // console.log('Have to delete')
            fetch(`https://agile-waters-08057.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const rest = allProducts.filter(product => product._id !== id)
                        setAllProducts(rest)

                    }

                })
        }

    }

    return (
        <div style={{ 'backgroundColor': "#F7F8FD" }} className="overflow-hidden">
            <Container className='my-4 p-5' style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }}>
                <div className='d-flex align-items-center justify-content-between'>
                    <h3>All Products</h3>
                    <div className='text-center my-3'>
                        <Link className='primary-custom-button' to='/additem'>Add new item</Link>
                    </div>
                </div>
                <div>
                    <Table responsive="lg" striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Email</th>
                                <th>Product Image</th>
                                <th>Supplier Name</th>
                                <th>Quantity</th>
                                <th>Price/kg</th>
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allProducts.map((product, index) => <ManageInventoryTableRow deleteProductHandler={deleteProductHandler} key={product._id} index={index} product={product}></ManageInventoryTableRow>)
                            }


                        </tbody>
                    </Table>
                </div>
            </Container>

        </div>


    );
};

export default ManageInventory;