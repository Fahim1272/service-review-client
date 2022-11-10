import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceCardDetails = ({ params }) => {
    const serviceDetails = useLoaderData();
    const { img, title, details } = serviceDetails;
    console.log(serviceDetails);
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl container">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardDetails;