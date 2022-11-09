import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service=><ServicesCard key={service._id} service ={service}></ServicesCard>)
                }
            </div>
            <Link to='/services'><button className="btn btn-outline btn-accent sm:btn-sm md:btn-md lg:btn-lg">See More</button></Link>
        </div>
    );
};

export default Services;