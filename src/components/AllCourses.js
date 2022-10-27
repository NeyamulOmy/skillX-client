import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const AllCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://skill-x-server.vercel.app/courses/')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className='row me-5'>
            {courses.map(course => <Card bg='info' className='col-6 mx-2 my-4' key={course.id} style={{ width: '18rem' }}>
                <Card.Img style={{ height: '200px' }} variant="top" src={course.img} />
                <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text className='text-truncate'>
                        {course.description}
                    </Card.Text>
                    <Button as={Link} to={`../course/${course.id}`} variant="primary">Go to course</Button>
                </Card.Body>
            </Card>)}

        </div>
    );
};

export default AllCourses;