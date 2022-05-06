import React from 'react';
import { Container } from 'react-bootstrap';
import afterLogo from '../../../images/logos/afterlogo.png'

const InventoryItems = () => {
    return (
        <Container className='py-3'>
            <div className='text-center'>
                <h3 className='fw-bold m-0'>Inventory Items</h3>
                <img src={afterLogo} alt="logo" />
            </div>
            <div>
                
            </div>

        </Container>
    );
};

export default InventoryItems;