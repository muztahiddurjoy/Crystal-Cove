import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import ContactPage from './pages/ContactPage'
const HomePage = React.lazy(()=>import('./pages/HomePage'))
const LoginPage = React.lazy(()=>import('./pages/LoginPage'))
const BookingPage = React.lazy(()=>import('./pages/BookingPage'))
const RoomPage = React.lazy(()=>import('./pages/RoomPage'))
const SearchPage = React.lazy(()=>import('./pages/SearchPage'))
const ProfilePage = React.lazy(()=> import('./pages/ProfilePage'))
const CommonErrorPage = React.lazy(()=>import('./pages/CommonErrorPage'))
const SignupPage = React.lazy(()=> import('./pages/SignupPage'))
export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/signup',
        element:<SignupPage/>
    },
    {
        path:'/book/:id',
        element:<BookingPage/>
    },
    {
        path:'/room/:id',
        element:<RoomPage/>
    },
    {
        path:'/search',
        element:<SearchPage/>
    },
    {
        path:'/user/:id',
        element: <ProfilePage/>
    },
    {
        path:'/contact',
        element:<ContactPage/>
    },
    {
        path:'*',
        element:<CommonErrorPage/>,
        errorElement:<CommonErrorPage/>
    }
])