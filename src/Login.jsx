import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css'


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
          onClick={() => navigate('/Signup')}
        >
          Sign Up
        </Button>
      </header>

      <main className="LoginContent">
        <h2>Log In to your Securescape Account</h2>
        <p className="LoginSubtitle">
          Enter your credentials here:
        </p>

        <section>
          <Form>
            <Form.Group className='username_box'>
              <Form.Label>Username:</Form.Label>
              <Form.Control placeholder='Enter Username'/>
            </Form.Group>
            <Form.Group className='password_box'>
              <Form.Label>Password:</Form.Label>
              <Form.Control placeholder='Enter Password'/>
            </Form.Group>
          </Form>
        </section>

        <section>
          <Button
          className="SubmitLoginButton"
          onClick={() => navigate('/profile')}
        >
          Log in
        </Button>
        </section>
       
      </main>
    </div>
  )
}
