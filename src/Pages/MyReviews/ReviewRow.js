import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review }) => {
    const { _id, serviceName, customer, reviewMessage, email, service } = review;
    const [reviewService, setreviewService] = useState({})
    useEffect(()=>{
        fetch(` https://service-review-server-navy-nine.vercel.app/${[service.id]}`)
        .then(res=>res.json())
        .then(data =>  setreviewService(data));

    },[service])

    const handleDelete = id =>{
        const confirmDel = window.confirm('Are you sure to delete?');
        if (confirmDel) {
            fetch(`http://localhost:5000/reviews/${[id]}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
            
        }
    }
    return (
        <tr>
            <th>
                <label>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                              reviewService?.img && 
                              <img src={reviewService.img} alt=''/>  
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm "><p>{reviewMessage}</p></div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>Red</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ReviewRow;