import axios from 'axios'
import React, { useEffect } from 'react'
import { API_BAse } from '../GlobalApi'

const PrivateRoute = () => {
  useEffect(()=>{
const checktoken=async()=>{
  const res=await axios.get(`${API_BAse}/auth/privateRoute`,{withCredentials:true})
  console.log(res.data)
}
checktoken()
  },[])
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute