import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { Toaster } from 'react-hot-toast'

const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className=''>
          <Outlet></Outlet>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
        <Footer></Footer>
    </div>
  )
}

export default Root