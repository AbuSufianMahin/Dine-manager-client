import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import LoadingSpinner from '../Components/Common/LoadingSpinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (!user) {
        return <Navigate state={location.pathname} to='/authentication/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;