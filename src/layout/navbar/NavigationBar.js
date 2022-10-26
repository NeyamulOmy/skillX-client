import React from 'react';
import './NavigationBar.css'
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiBrain } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';
import { LDContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaUserCircle } from 'react-icons/fa'
const NavigationBar = () => {
    const { theme, toggleTheme } = useContext(LDContext)
    const { user } = useContext(AuthContext)

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><GiBrain /> SkillX</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="courses">Courses</Nav.Link>
                        <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                    </Nav>
                    <Nav className='ms-auto align-items-center'>
                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                        <Nav.Link as={Link} to="faq">FAQ</Nav.Link>
                        <Navbar.Text className='ms-4 me-1'>{theme} Mode</Navbar.Text>
                        <Navbar.Text><ReactSwitch onChange={toggleTheme} checked={theme === 'Dark'} /></Navbar.Text>
                        <Navbar.Text className='ms-3 userImage'>{user ? <img alt="" src={user.photoURL} /> : <FaUserCircle size={30} />}</Navbar.Text>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavigationBar;