import React from 'react';
import Banner from './Banner/Banner';
import Counter from './Counter/Counter';
import InventoryItems from './InventoryItems/InventoryItems';
import SupportSection from './SupportSection/SupportSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Counter></Counter>
            <SupportSection></SupportSection>

            
            
        </div>
    );
};

export default Home;