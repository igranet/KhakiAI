import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import WelcomePage from './Pages/WelcomePage'

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />}></Route>
                <Route path="/signup" element={<SignUpPage />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/home" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App
