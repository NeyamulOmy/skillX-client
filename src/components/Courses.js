import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllCourses from './AllCourses';
import SideBar from './SideBar';

const Courses = () => {
    return (
        <Container fluid>
            <Row>
                <Col className='ms-5'>
                    <SideBar></SideBar>
                </Col>
                <Col>
                    <AllCourses></AllCourses>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;