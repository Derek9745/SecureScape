import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Signup.css'
import { supabase } from './supabase.js'


export default function Signup() {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [statmess, setStatmess] = useState('')


    const handleSave = async (e) => {
      e.preventDefault()
      console.log('Form submitted:', { username, email })
      setStatmess('')
    

    const { data, error } = await supabase
      .from('profile')
      .insert([
        {
          username:username, 
          email: email, 
          password: password
        }
      ])
      .select()

      console.log('Supabase data:', data)
      console.log('Supabase error:', error)



      if (error) {
        console.error('Error saving user:', error)
        setStatmess(`Error saving: ${error.message}`)
      } else {
        setStatmess('Success!')

        setUsername('')
        setEmail('')
        setPassword('')
      }
    }



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
          <Form onSubmit={handleSave}>
            {statmess && <p>{statmess}</p>}
            <Form.Group className='email_box'>
              <Form.Label>Email:</Form.Label>
              <Form.Control 
                type="email"
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='username_box'>
              <Form.Label>Username:</Form.Label>
              <Form.Control 
              type="text"
              placeholder='Enter Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              />
            </Form.Group>
            <Form.Group className='password_box'>
              <Form.Label>Password:</Form.Label>
              <Form.Control 
              type="password"
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </Form.Group>

            <Button 
            type="submit"
            className="SubmitSignupButton"
            >
              Create Account
            </Button>

          </Form>
        </section>

        <section>
          <Button
          className="SubmitSignupButton"
          onClick={() => navigate('/Login')}
        >
          Go back to Log in
        </Button>
        </section>
       
      </main>
    </div>
  )
}
