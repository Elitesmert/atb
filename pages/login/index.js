import React from 'react'
import { AuthProvider } from '../../components/AuthContext';
import Login from "../../components/Login";
import { useAuth } from "../../components/AuthContext"
import Dashboard from '../../components/Dashboard';

export default function Home() {

  const { currentUser } = useAuth();



  return (
    <>
      {!currentUser && <Login />}
      {currentUser && <Dashboard />}
    </>

  )
}
