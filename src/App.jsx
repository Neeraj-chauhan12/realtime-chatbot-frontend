import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
    </Routes>
      <Toaster />
    </>
  )
}

export default App
