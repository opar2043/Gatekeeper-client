import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className=''>
          <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Root