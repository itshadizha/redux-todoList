import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/Login'
import Todos from '../pages/Todos'

const AppRouter = () => {
const router = createBrowserRouter([{
    path: "/",
    element: <PrivateRouter fallBackPath='/login'/>
},
{
    path: "/login",
    element: <Login/>
},
{
    path: "/todos",
    element: <Todos/>
},
])

  return <RouterProvider router={router}/>
}

export default AppRouter
