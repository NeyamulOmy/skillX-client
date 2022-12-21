import React from 'react';
import ReactTooltip from 'react-tooltip';
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
import { Button, Image } from 'react-bootstrap';
const NavigationBar = () => {
    const { theme, toggleTheme } = useContext(LDContext)
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(request => { })
            .catch(error => { console.error(error) })
    }
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
                    <Nav className='ms-auto '>
                        <Nav.Link as={Link} to="faq">FAQ</Nav.Link>

                        {user?.uid ?
                            <><Navbar.Text className='ms-3 userImage'>{
                                user?.photoURL ?
                                    <><Image data-tip data-for='userName' referrerPolicy="no-referrer" style={{ height: '30px' }} roundedCircle src={user.photoURL}></Image><ReactTooltip id='userName'> {user.displayName}</ReactTooltip></> : <FaUserCircle size={30}></FaUserCircle>
                            }

                            </Navbar.Text>
                                <Button onClick={handleLogOut} variant='outline-danger' className='ms-2'>Log out</Button>
                            </> :
                            <><Nav.Link as={Link} to="login">Login</Nav.Link></>}
                        <Navbar.Text className=' me-1'>{theme} Mode</Navbar.Text>
                        <Navbar.Text><ReactSwitch onChange={toggleTheme} checked={theme === 'Dark'} /></Navbar.Text>




                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavigationBar;