import React from 'react';

const Blog = () => {
    return (
        <div className='px-2 '>
            <div className='mx-2'>
                <div className='my-5'>
                    <h2>What is cors?</h2>
                    <p className='px-5'>CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

                        The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.</p>
                </div>
                <div className='my-5'>
                    <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Firebase can be seen as a server-less backend for your mobile apps, web apps, etc. It is a service provided by Google. As an Android developer I use Firebase in most of my projects. It has many features like Realtime database, Cloud functions, Analytics, Crashlytics, Cloud Firestore, etc.</p>
                    <h6>Alternatives to Firebase:</h6>
                    <ul>
                        <li>AWS</li>
                        <li>Back4App</li>
                        <li>backendless</li>
                        <li>deployd</li>
                    </ul>
                </div>
                <div className='my-5'>
                    <h3>How does the private route work?</h3>
                    <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                    </p>
                </div>
                <div className='my-5'>
                    <h3>What is Node? How does Node work?</h3>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    <p>Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;