import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({ service }) => {
    const { img, title, details, price } = service;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" className="rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
                {/* <img src={img} alt="" className="rounded-xl" /> */}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <h1 className='font-semibold'>Price:{price}</h1>
                <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;