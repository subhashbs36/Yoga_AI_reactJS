import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div class="header">
    <a href="http://localhost:3000/" class="logo">Yoga Ai</a>
    <div class="header-right">
        <Link to="/" class="active" >Home</Link>
        <Link to="/about">About</Link>
        <Link  to="/contact">SignUp</Link>
    </div>
    </div>
  )
}
