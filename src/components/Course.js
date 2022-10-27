import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useLoaderData, Link } from 'react-router-dom';
import Pdf from 'react-to-pdf'
const Course = () => {
    const course = useLoaderData();
    const ref = React.createRef();
    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref} style={{ width: "500px" }} className='mx-auto text-center p-5'>
                <h4>{course.title}</h4>
                <Image style={{ width: '500px' }} rounded src={course.img}></Image>
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