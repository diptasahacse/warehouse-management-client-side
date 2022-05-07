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

    const deleteProductHandler =(id) =>{
        // console.log(id)
        const deleteStatus = window.confirm('Are you sure want to delete this item..?')
        if(deleteStatus){
            // console.log('Have to delete')
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const rest = myProducts.filter(product => product._id !== id)
                    setMyProducts(rest)

                }
                
            })
        }

    }
    // console.log(myProducts)
    return (
        <Container className='py-3'>
            <h3>My Products</h3>
            {
                myProducts.length > 0 ?
                    <div>
                        <Table responsive="lg" striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Email</th>
                                    <th>Product Image</th>
                                    <th>Supplier Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myProducts.map((product, index) => <MyItemTableRow deleteProductHandler={deleteProductHandler} index={index} product={product} key={product._id}></MyItemTableRow>)
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