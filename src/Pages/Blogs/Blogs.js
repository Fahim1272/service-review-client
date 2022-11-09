import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-14'>Blogs</h1>
            <div className="card card-side bg-base-100 shadow-xl w-3/4 mx-auto mt-10 ">
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <div>
                        <h1 className='font-semibold'>SQL</h1>
                        <p>SQL databases are vertically scalable</p>
                        <p>SQL databases are table-based</p>
                        <p>SQL databases are better for multi-row transactions</p>
                        <p>SQL is Slower than NoSQL databases</p>
                    </div>
                    <div>
                        <h1 className='font-semibold'>NoSQL</h1>
                        <p>NoSQL databases are horizontally scalable</p>
                        <p> NoSQL databases are document, key-value, graph, or wide-column stores.</p>
                        <p>NoSQL is better for unstructured data like documents or JSON</p>
                        <p>NoSQL is faster than SQL databases</p>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl w-3/4 mx-auto mt-10 ">
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p>JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server (to secure its APIs). Looking for a breakdown for JSON Web Tokens (JWTs) You're in the right place.</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl w-3/4 mx-auto mt-10 ">
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <div>
                        <h1 className='font-semibold'>Javascript</h1>
                        <p>Javascript is a programming language that is used for writing scripts on the website. </p>
                        <p>Javascript can only be run in the browsers.</p>
                        <p>It is basically used on the client-side.</p>
                        <p>Javascript is capable enough to add HTML and play with the DOM.</p>
                        <p>Javascript is used in frontend development.</p>
                    </div>
                    <div>
                        <h1 className='font-semibold'>NodeJS</h1>
                        <p>NodeJS is a Javascript runtime environment.</p>
                        <p> We can run Javascript outside the browser with the help of NodeJS.</p>
                        <p>It is mostly used on the server-side.</p>
                        <p>Nodejs does not have capability to add HTML tags.</p>
                        <p>Nodejs is used in server-side development.</p>
                    </div>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl w-3/4 mx-auto my-10 ">
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>JWTs or JSON Web Tokens are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server (to secure its APIs). Looking for a breakdown for JSON Web Tokens (JWTs) You're in the right place.</p>
                </div>
            </div>


        </div>
    );
};

export default Blogs;