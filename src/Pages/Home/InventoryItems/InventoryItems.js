import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import InventoryItemCard from './InventoryItemCard/InventoryItemCard';

const InventoryItems = () => {
    const [allProducts, setAllProducts] = useProducts();
    return (
        <Container className='py-3'>
            <SectionTitle color='black' title="Inventory Items"></SectionTitle>
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