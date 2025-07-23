import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Root from './Root.jsx'
import Home from "./pages/Home.jsx"



const router=createBrowserRouter(
  createRoutesFromElements(

<Route path='/' element={<Root/>}>
<Route path="" element={<Home/>}/>

</Route>













  )
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router}/>
  
  </React.StrictMode>,
)
