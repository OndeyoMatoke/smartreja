import React from 'react'
import './Routers.css'
import { Route, Routes } from 'react-router-dom'
import Fmcgs from '../FMCGs/Fmcgs'
import Retailers from '../Retailers/Retailers'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'

export default function Routers() {
  return (
    <div>  

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/retailers' element={<Retailers/>}/>
            <Route path='fmcgs' element={<Fmcgs/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Routes>
    
    </div>
  )
}
