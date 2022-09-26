import React from 'react'
import { useAuth } from "../../components/AuthContext"
import Dashboard from '../../components/Dashboard';
import Login from '../../components/Login';

export default function Profile() {

  const { currentUser } = useAuth();
  


  return (
    <div className='h-screen'>
      {!currentUser && <Login />}
      {currentUser && <Dashboard />}
    </div>

  )
}
