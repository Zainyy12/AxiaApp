import React from 'react'
import Header from './pages/Header'
import { Outlet } from 'react-router'
import Footer from './pages/footer'

function Root() {
  return (

  <div>
<Header/>
<Outlet/>
<Footer/>
  </div>

  )
}

export default Root