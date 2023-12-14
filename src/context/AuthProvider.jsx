


import React from 'react'
import { AuthContext } from './createAuthContext'

const AuthProvider = ({children}) => {
    const [auth, setauth] = React.useState({})
    const value={
auth,
setauth
    }
  return (
    <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider