import Navbar from '@/components/modules/Navbar/Navbar'
import Register from '@/components/template/register/Register'
import connectDB from '@/config/db'
import { authUser } from '@/utils/serverHelpers';
import React from 'react'

async function page() {
  await connectDB();
  const user = await authUser()
  return (
    <>
    <Navbar user={user}/>
    <Register/>
    </>
  )
}

export default page