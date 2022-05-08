import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div style={{ 'backgroundColor': "#F7F8FD" }} className="overflow-hidden">
            <Container className='my-4 p-5' style={{ 'backgroundColor': "#FFF", "borderRadius": "15px" }}>
                <h3 className='mb-3'>About</h3>
                <h4 className="mt-3">
                    Purpose of this website
                </h4>
                <p>
                    This website is about manage product for authenticate user. In home page, user can visit login and register on this website to access inventory items. in this page user can see banner, inventory item section in inventory items section, counter section and footer. in inventory section user can see 6 product with manage button. when user click on the button then user will visit product details route (if user logged in other wise user will go login page). in product details section user can modify any product. in the bottom on the inventory section user will see manage inventory button. when user click on that button user will go to manage inventory route. that route will show all products details with manage and delete button. if user click on the manage button user will visit product details page and if user click delete button then that product will delete from database. on navbar user see a route link name my items. user can only see his uploaded product. user also modify and delete his product on that page.
                </p>
                <p>Home Page : In the Home page, You will see Header, Banner, Inventory Item section, Counter section and Footer. Header part contain site name and nav link, Banner part contain Image slider, Inventory Section contain 6 Product with modify button, Counter section contain product details and footer part contain some Copyright text.</p>
                <p>Manage Inventory Page: In this page authenticate user can see all products and he can modify or delete any products.</p>
                <p>Add new Page: In this page authenticate user can upload product.</p>
                <p>Login Page : In this page user can login.</p>
                
                

            </Container>

        </div>
    );
};

export default About;