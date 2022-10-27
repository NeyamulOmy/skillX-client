import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center'>

            <Image className='my-5 sm-w-50' fluid src='https://img.freepik.com/free-vector/flat-business-employees-meeting-teamwork-training-teaching_88138-990.jpg'></Image>
            <p className='m-5 p-5'>
                SkillX is a popular platform to learn and teach useful skills online.<br />
                Thousands of people use this platform daily to learn/ teach courses they are interested in. <Link to='register'>Sign up</Link> today to learn useful skills to make yourself job-ready. May you succed in your endeavour. Live long and prosper.
            </p>
        </div>
    );
};

export default Home;