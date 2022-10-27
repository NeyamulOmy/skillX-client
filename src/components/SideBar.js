import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://skill-x-server.vercel.app/courses/')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className=''>
            <h5>Courses: {courses.length}</h5>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/course/${course.id}`}>{course.title}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideBar;