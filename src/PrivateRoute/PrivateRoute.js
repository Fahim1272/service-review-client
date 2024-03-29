import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location =useLocation();
    if(loading){
        return <button className="btn loading disabled">loading</button>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} replace ></Navigate>
};

export default PrivateRoute;