import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import UserProfile from './UserProfile.jsx'
import Email_phishing from './email_phishing.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import CheckList from './CheckList'; 
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Load from './Load.jsx';
import Game from './Game.jsx'
import Challenge from './Challenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/email_phishing" element={<Email_phishing />} />
        <Route path="/CheckList" element={<CheckList/>} />
        <Route path ="/Load" element = {<Load/>}/>
        <Route path="/Game" element={<Game />} />
        <Route path="/challenge/:id" element={<Challenge />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
