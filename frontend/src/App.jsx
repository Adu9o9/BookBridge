import './App.css'
import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'

function App() {

  return (
    <>
    <div className='p-4 h-screen w-screen flex flex-wrap items-center justify-center' id='main-container'>
      <Signup/>
      {/* <Login/> */}
    </div>
      
    </>
  )
}

export default App
