import Navbar from '@/components/modules/Navbar/Navbar'
import Login from '@/components/template/login/Login'
import connectDB from '@/config/db'
import { authUser } from '@/utils/serverHelpers';
import React from 'react'

async function page() {
  await connectDB();
  const user = await authUser();
  return (
    <>
    <Navbar user={user}/>
    <Login/>
    </>
  )
}

export default page