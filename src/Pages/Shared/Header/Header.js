import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user, loading, error] = useAuthState(auth); 
    // user?.emailVerified
    
    return (
        <Navbar bg="light" expand="lg" className='bg-white border-bottom border-primary'>
            <Container>
                <Link className='navbar-brand' to='/'>
                    <h4>Grocery Management</h4>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className='nav-link' to='/'>Home</CustomLink>
                        {
                            user?.emailVerified && <><CustomLink className='nav-link' to='/manageinventory'>Manage Inventory</CustomLink>
                            <CustomLink className='nav-link' to='/additem'>Add Item</CustomLink>
                            <CustomLink className='nav-link' to='/myitems'>My Item</CustomLink></>
                        }
                        <CustomLink className='nav-link' to='/blogs'>Blogs</CustomLink>
                        
                        {user?.emailVerified || <><CustomLink className='nav-link' to='/register'>Register</CustomLink>
                        <CustomLink className='nav-link' to='/login'>Login</CustomLink></> 
                        }


                        {user?.emailVerified && <NavDropdown title={user.displayName} id="basic-nav-dropdown">
                            <Link to='/userprofile' className='dropdown-item'>Profile</Link>
                            <NavDropdown.Divider />
                            <div className='dropdown-item'>
                                <button onClick={()=>signOut(auth)} className='btn btn-sm btn-danger'>Logout</button>
                            </div>
                        </NavDropdown>}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;