import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/login/Login'
import SignUp from '../pages/SingUp/SingUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      
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
