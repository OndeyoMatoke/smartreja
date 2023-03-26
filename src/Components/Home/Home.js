import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


export default function Home() {
  return (




    <div className='homediv'>
      <h1>CONNECTING RETAILERS</h1>
      <h1> TRANSFORMING LIVES </h1>

      <br/>

      <p>Our POS solution transforms how you manage your <br/>
        inventory and run your businesses. You do not need to <br/>
        acquire any sophisticated equipment or have IT <br/>
        knowledge to use it 
      </p>

      <br/>

      <div className='signup-signin'>

        <button><Link to=''>Sign Up</Link></button>

      

      <p>Or Log In if you already have an account</p>

      </div>

      
    </div>
  )
}
