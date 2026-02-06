import './App.css'
import React from 'react'
import{ Route,Routes} from 'react-router-dom'
// import Video from './components/Vedio'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'



function App() {

  return (
    <>
    <Routes>

      {/* <Route element = {}> */}
      
      <Route path='/'  element={<Home/>}/>
      <Route path='/agence' element={<Agence/>}/>
      {/* </Route> */}
    </Routes>

    </>
  )
}
export default App


//here we will define the routing path etc