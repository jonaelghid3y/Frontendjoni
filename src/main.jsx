import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Root from './pages/Root'

import Hemcontainer from './pages/Hemcontainer'
import Projects from './pages/Projects'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    children: [
      {
        path: "/",
        element: < Hemcontainer/>,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "/About",
        element: <About/>,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
    
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
