import React from "react"
import { AuthContext } from "./createAuthContext"



export const useAuth=()=>{
    return React.useContext(AuthContext)
}