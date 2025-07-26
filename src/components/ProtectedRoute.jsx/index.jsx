import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
    const { user } = useUser();
      useEffect(() => {
    if (!user) {
      toast.success('Sign in to proceed to cart.');
    }
  }, [user]);
    return (
        <div>{
            user ? children : <Navigate to="/" />}</div>
    )
}

export default ProtectedRoute