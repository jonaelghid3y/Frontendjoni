import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Root from './pages/Root'

import Hemcontainer from './pages/Hemcontainer'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Projectinfo1 from './pages/Projectinfo1'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hemcontainer/>,
      },
     
      
    ],
  },
  {
    path: "/Projectinfo1",
    element: <Projectinfo1/>,
    
  }
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
