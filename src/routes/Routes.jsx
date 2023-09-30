import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Login from '../pages/login/Login'
import SignUp from '../pages/SingUp/SingUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../pages/Dashboard/AddRoom'
import { getRoom } from '../api/room'
import MyBookings from '../pages/Dashboard/MyBookings'
import MyListings from '../pages/Dashboard/MyLIstings'
import ManageBooking from '../pages/Dashboard/ManageBooking'
import Profile from '../pages/Profile/Profile'

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
        element:<PrivateRoute><RoomDetails/></PrivateRoute>,
        loader: ({params})=>{
          return getRoom(params.id)
        }

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
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
    children:[
      {
        path:'/dashboard',
        element:<MyBookings/>
      },
      
      {
      path:'/dashboard/add-room',
      element:<AddRoom/>
    },
    {
      path:'/dashboard/my-bookings',
      element:<MyBookings/>
    },
    {
      path:'/dashboard/my-listings',
      element:<MyListings/>
    },
    {
      path:'/dashboard/manage-Bookings',
      element:<ManageBooking/>
    },
    {
      path:'/dashboard/profile',
      element:<Profile/>
    }
    ]
  }
])
