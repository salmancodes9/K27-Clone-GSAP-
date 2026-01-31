import './App.css'
import React from 'react'
import{ Outlet, Route,Routes} from 'react-router-dom'
// import Video from './components/Vedio'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'
import PageTrans from './components/PageTrans.jsx'



function App() {

  return (
    <>
    <Routes>

      <Route element = {<PageTrans/>}>
      
      <Route index  element={<Home/>}/>
      <Route path='/agence' element={<Agence/>}/>
      </Route>
    </Routes>

    </>
  )
}
export default App


//here we will define the routing path etc