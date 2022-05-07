import React from 'react';
import Banner from './Banner/Banner';
import Counter from './Counter/Counter';
import InventoryItems from './InventoryItems/InventoryItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Counter></Counter>

            
            
        </div>
    );
};

export default Home;