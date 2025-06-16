import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import LoadingSpinner from '../Components/Common/LoadingSpinner';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
    
    if (!user){
        return <Navigate to='/authentication/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;