
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const ServiceCardDetails = ({ params }) => {
    
    const serviceDetails = useLoaderData();
    const {user} = useContext(AuthContext)
    const {_id, img, title, details } = serviceDetails;
    console.log(serviceDetails);
    const handleReview =event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`
        const email = form.email.value || 'user nai';
        const reviewMessage = form.textarea.value;

        const review = {
            service : _id,
            customer: name,
            serviceName : title,
            reviewMessage,
            email
        }
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknoledged) {
                alert('Review submitted ')
                form.reset();
            }
        })
        .catch(er => console.log(er))

    }
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            {/* Review Section */}
            <div>
                <form onSubmit={handleReview}>
                    <div className="hero  bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <h1>Add a review for {title}</h1>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" defaultValue={user?.email} readOnly />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Your Review</span>
                                        </label>
                                        <textarea name='textarea'  className="textarea textarea-bordered h-36 w-full" placeholder="Review"></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceCardDetails;