import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './Screen/About'
import Contact from './Screen/Contact'
import FrontScreen from './Screen/FrontScreen'
import LoginScreen from './Screen/LoginScreen'
import Register from './Screen/Register'

const Navigation = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<FrontScreen />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={< LoginScreen />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    )
}

export default Navigation
