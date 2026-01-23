import './App.css'
import React from 'react'
// import Video from './components/Vedio'
import Home from './pages/Home.jsx'
import{ Route,Routes} from 'react-router-dom'

function App() {

  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
 
      
    </>
  )
}

export default App


//here we will define the routing path etc