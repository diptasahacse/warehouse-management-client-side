import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Counter = () => {
    return (
        <div className='py-3' style={{ 'backgroundColor': "#F7F8FD" }}>
            <Container>
                <SectionTitle  title="Interesting Fact"></SectionTitle>
                <Row></Row>
            </Container>
            
        </div>
    );
};

export default Counter;