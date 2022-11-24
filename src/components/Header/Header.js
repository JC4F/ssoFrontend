import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (  
        <>
            <Navbar bg='light' expand='lg'>
                <Container>
                    <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <NavLink to='/' className='nav-link'>Home</NavLink>
                            <NavLink to='/about' className='nav-link'>About</NavLink>
                        </Nav>
                        <Nav>
                            <NavDropdown title='Settings' id='basic-nav-dropdown'>
                                <NavDropdown.Item href='#action/3.1'>Login</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;