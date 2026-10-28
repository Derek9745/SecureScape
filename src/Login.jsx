import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import './email_phishing.css'
import email1 from './assets/p_email_Ex1.jpg'
import email2 from './assets/p_email_Ex2.jpg'
import email3 from './assets/p_email_Ex3.jpg'
import email4 from './assets/emailex4.jpg'

export default function Email_phishing() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


  return (
    <div className="LoginPage">
      <header className="LoginHeader">
        <h1>Securescape</h1>

        <Button
          className="LoginButton"
          onClick={() => navigate('/')}
        >
          Sign Up
        </Button>
      </header>

      <main className="LoginContent">
        <h2>Log In to your Securescape Account</h2>
        <p className="LoginSubtitle">
          Enter your credentials here:
        </p>
       
      </main>
    </div>
  )
}
