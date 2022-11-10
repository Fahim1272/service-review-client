import React, { useEffect, useState } from 'react';
import ServicesCard from '../Services/ServicesCard';

const ServiceRoute = () => {
    const [servicesRoute, setServicesRoute] = useState([]);
    useEffect(() => {
        fetch(' https://service-review-server-navy-nine.vercel.app')
            .then(res => res.json())
            .then(data => setServicesRoute(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    servicesRoute.map(service=><ServicesCard key={service._id} service ={service}></ServicesCard>)
                }
            </div>
            
        </div>
    );
};

export default ServiceRoute;