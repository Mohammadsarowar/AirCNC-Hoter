import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/login/Login'
import SignUp from '../pages/SingUp/SingUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/room/:id',
        element:<PrivateRoute><RoomDetails/></PrivateRoute>

      }
      
    ]
    
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
   element:<SignUp/>
  }
])
