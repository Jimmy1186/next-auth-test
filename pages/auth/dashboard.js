import { useSession } from 'next-auth/react'
import React from 'react'

function dashboard() {
    const { data: session, status } = useSession()
    console.log(session,status)


  return (
      <>
      <h1>Dashboard</h1>

      {status=="authenticated"?(<h4>my mail = {session.user.email}</h4>):(<h4>go login first</h4>)}
      </>
    
  )
}

export default dashboard