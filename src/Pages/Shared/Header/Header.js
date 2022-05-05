import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='bg-white border-bottom border-primary'>
            <Container>
                <Link className='navbar-brand' to='/'>Grocery Management</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className='nav-link' to='/'>Home</CustomLink>
                        <CustomLink className='nav-link' to='/manageitems'>Manage Items</CustomLink>
                        <CustomLink className='nav-link' to='/additem'>Add Item</CustomLink>
                        <CustomLink className='nav-link' to='/myitems'>My Item</CustomLink>
                        <CustomLink className='nav-link' to='/blogs'>Blogs</CustomLink>


                        <NavDropdown title="Dipta" id="basic-nav-dropdown">
                            <Link to='/userprofile' className='dropdown-item'>Profile</Link>
                            <NavDropdown.Divider />
                            <div className='dropdown-item'>
                                <button className='btn btn-sm btn-danger'>Logout</button>
                            </div>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;