import './App.css'
import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <div className='p-4 h-screen w-screen flex flex-wrap items-center justify-center' id='main-container'>
      {/* <Signup/> */}
      {/* <Login/> */}
      <Home/>
    </div>
    </>
  )
}

export default App
