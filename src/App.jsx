import './App.css'
import React from 'react'
import{ Route,Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'


function App() {

  return (
    <>
    <Routes>

      
      <Route path='/'  element={<Home/>}/>
      <Route path='/agence' element={<Agence/>}/>
    </Routes>

    </>
  )
}
export default App


// here we will define the routing path etc


