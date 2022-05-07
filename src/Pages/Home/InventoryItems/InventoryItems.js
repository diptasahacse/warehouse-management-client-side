import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import afterLogo from '../../../images/logos/afterlogo.png'
import InventoryItemCard from './InventoryItemCard/InventoryItemCard';

const InventoryItems = () => {
    const [allProducts, setAllProducts] = useProducts();
    return (
        <Container className='py-3'>
            <div className='text-center'>
                <h3 className='fw-bold m-0'>Inventory Items</h3>
                <img src={afterLogo} alt="logo" />
            </div>
            <div className='py-3'>
                <Row xs={1} md={3} className="g-4">
                    {
                        allProducts.slice(0, 6).map(product => <InventoryItemCard key={product._id} product={product}></InventoryItemCard>)
                    }
                </Row>
                <div className='text-center'>
                    <Link to='/manageinventory' className='btn btn-success my-3 btn-sm'>Manage Inventories</Link>
                </div>

            </div>

        </Container>
    );
};

export default InventoryItems;