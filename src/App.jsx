import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Nav from './Nav'
import {Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Puplist from './components/Puplist'
import SinglePup from './components/SinglePup'

function App() {
  const [pups, setPups] = useState([]);
 
  return (
    <>
    <h1>Welcome To The Puppy Bowl(again)!</h1>
    <hr />
    <Nav/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/pups' element={<Puplist/>} />
      <Route path='/pups/:id' element={<SinglePup/>} />
    </Routes>
      <div>
        
      </div>
  
    </>
  )
}

export default App
