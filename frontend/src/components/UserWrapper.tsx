import axios from 'axios'
import React, { createContext, useLayoutEffect, useState } from 'react'
import { apiurl } from '../apiurl'



export const userContext =  createContext({user:{uid:'',email:''},setUser:(prev:any)=>prev})
const UserWrapper = ({children}:React.PropsWithChildren) => {
    const [user, setuser] = useState({uid:'',email:''})
    useLayoutEffect(() => {
      const uid = localStorage.getItem("uid")
      axios.get(`${apiurl}/user/${uid}`).then((res)=>{
        setuser({email:res.data.email,uid:uid!})
      }).then((err)=>{
        console.log(err)
      })
    }, [])
  return (
    <userContext.Provider value={{user:user,setUser:setuser}}>
        {children}
    </userContext.Provider>
  )
}

export default UserWrapper