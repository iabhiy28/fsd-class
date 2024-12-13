import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link> | </li>
            <li><Link to="/registration">Registration</Link> |</li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        <Outlet />
      </nav>

  )
}



