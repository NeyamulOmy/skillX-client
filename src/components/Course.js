import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    return (
        <div className='text-center p-5'>
            <h4>{course.title}</h4>
            <Image src={course.img}></Image>
            <p className='mt-5'>{course.description}</p>
            <div className=' justify-content-center  '>
                <div className=''>Instructor: {course.instructor}</div>
                <div>Time: {course.time}</div>
                <div>Rating: {course.star}</div>
                <div>Price: {course.price}</div>
            </div>
            <Button className='mt-2' variant='outline-success'>Checkout</Button>
        </div>
    );
};

export default Course;