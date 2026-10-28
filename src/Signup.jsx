import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Signup.css'


export default function Email_phishing() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


  return (
    <div className="SignupPage">
      <header className="LoginHeader">
        <h1>Securescape</h1>

        <Button
          className="SignupButton"
          onClick={() => navigate('/')}
        >
          Sign Up
        </Button>
      </header>

      <main className="SignupContent">
        <h2>Sign up to Securescape!</h2>
        <p className="SignupSubtitle">
          Enter your information here:
        </p>

        <section>
          <Form>
            <Form.Group className='email_box'>
              <Form.Label>Email:</Form.Label>
              <Form.Control placeholder='Enter Email'/>
            </Form.Group>
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
          className="SubmitSignupButton"
          onClick={() => navigate('/Login')}
        >
          Log in
        </Button>
        </section>
       
      </main>
    </div>
  )
}
