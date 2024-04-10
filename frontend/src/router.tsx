import {createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import BookingPage from './pages/BookingPage'
import RoomPage from './pages/RoomPage'
import SearchPage from './pages/SearchPage'
import ProfilePage from './pages/ProfilePage'
import CommonErrorPage from './pages/CommonErrorPage'
export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/join',
        element:<LoginPage/>
    },
    {
        path:'/book',
        element:<BookingPage/>
    },
    {
        path:'/room/:id',
        element:<RoomPage/>
    },
    {
        path:'/search/:query',
        element:<SearchPage/>
    },
    {
        path:'/user/:id',
        element: <ProfilePage/>
    },
    {
        path:'*',
        element:<CommonErrorPage/>,
        errorElement:<CommonErrorPage/>
    }
])