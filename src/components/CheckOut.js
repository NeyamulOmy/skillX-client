import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    const order = useLoaderData()
    return (
        <div className='text-center mt-5'>

            <div className='text-success'><h3>You have successfully purchased <span className='text-danger'>{order.title}</span></h3></div>
            <Image className='mt-5' rounded src={order.img}></Image><br />


        </div>
    );
};

export default CheckOut;