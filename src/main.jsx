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
import Projectinfo2 from './pages/projectinfo2'
import Projectinfo4 from './pages/Projectinfo4'
import Projectinfo5 from './pages/Projectinfo5'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hemcontainer/>,
      },
      {
        path: "/Projectinfo1",
        element: <Projectinfo1/>,
        
      },
      {
        path: "/Projectinfo2",
        element: <Projectinfo2/>,
        
      },
      {
        path: "/Projectinfo4",
        element: <Projectinfo4/>,
        
      },
      {
        path: "/Projectinfo5",
        element: <Projectinfo5/>,
        
      }
     
     
      
    ],
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
