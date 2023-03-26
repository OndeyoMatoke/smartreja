import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (


    <div>
      <nav className='header'>

        <h4 className='headerh3'>SMART REJA</h4>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/retailers'>Retailers</Link>
            </li>

            <li>
                <Link to='/fmcgs'>FMCGs</Link>
            </li>

            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}
