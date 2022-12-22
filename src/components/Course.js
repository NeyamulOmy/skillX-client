import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useLoaderData, Link } from 'react-router-dom';
import Pdf from 'react-to-pdf'
const Course = () => {
    const course = useLoaderData();
    const ref = React.createRef();
    return (
        <div className='text-center'>
            <Pdf targetRef={ref} filename="Course.pdf">
                {({ toPdf }) => <Button variant='danger' onClick={toPdf}>Generate Pdf</Button>}
            </Pdf><br />
            <Image style={{ width: '100vw', marginTop: '10px' }} rounded src={course.img}></Image>
            <div ref={ref} style={{ width: "100vw" }} className='mx-auto text-center p-5'>
                <h4>{course.title}</h4>

                <p className='mt-5'>{course.description}</p>
                <div className=' justify-content-center  '>
                    <div className=''>Instructor: {course.instructor}</div>
                    <div>Time: {course.time}</div>
                    <div>Rating: {course.star}</div>
                    <div>Price: {course.price}</div>
                </div>
                <Button as={Link} to={`/checkout/${course.id}`} className='mt-2' variant='outline-success'>Get premium access</Button>
            </div>
        </div>
    );
};

export default Course;