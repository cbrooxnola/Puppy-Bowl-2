import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Nav from './Nav'
import {Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Puplist from './components/Puplist'

function App() {
  const [pups, setPups] = useState([]);
  useEffect(() => {
    const fetchPups = async () => {
      const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players');
      const data = await response.data();
      setPups(data);
    }
  fetchPups();
  }, []);

  return (
    <>
    <h1>Welcome To The Puppy Bowl(again)!</h1>
    <hr />
    <Nav/>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/pups' element={<Puplist/>} />
    </Routes>
      <div>
        <ul>
          {
          pups.map(pup => {
            return (
              <li key={ pups.id }>
                { pup.name }
              </li>
          );
        })
      }
        </ul> 
      </div>
  
    </>
  )
}

export default App
