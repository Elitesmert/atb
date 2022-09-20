import React from 'react'
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();
  console.log(currentUser)
  return <div>This route is protected</div>
}

export default Dashboard