import React from 'react'
import logo from "./../logo.png"
import { Link } from 'react-router-dom'
import {RiSearch2Line} from "react-icons/ri"

export default function Navbar() {
  return (
    <nav className='header'>
      <img src={logo} alt=".." />
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/tvshows">Movies</Link>
        <Link to="/tvshows">Recently Added</Link>
        <Link to="/tvshows">My List</Link>
      </div>
      <RiSearch2Line/>
    </nav>
  )
}
