import React from 'react'
import { signOut } from "next-auth/react"
function logout() {
  return (
    <div>
        <h2>
            you sure wnat to logout??
            <input type="button" value="yes" onClick={()=>signOut({ callbackUrl: 'http://localhost:3000/auth/login' })}/>
        </h2>
    </div>
  )
}

export default logout