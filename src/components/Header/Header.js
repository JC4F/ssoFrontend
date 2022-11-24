import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = () => {

    const handleLogin = ()=> {
        //redirect to sso
        window.location.href = `${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`
    }

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
                                <NavDropdown.Item onClick={()=>handleLogin()}>Login</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;