import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllCourses from './AllCourses';
import SideBar from './SideBar';

const Courses = () => {
    return (
        <Container className='pt-5' fluid>
            <Row>
                <Col className='ms-5 col-4'>
                    <SideBar></SideBar>
                </Col>
                <Col className='ms-5'>
                    <AllCourses></AllCourses>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;