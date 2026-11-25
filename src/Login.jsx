import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css'
import { supabase } from './supabase'


export default function Login() {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [statmess , setStatmess] = useState('')

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleLogin = async (e) => {
      e.preventDefault()
      setStatmess('')

      const { data, error } = await supabase
        .from('profile')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .maybeSingle()

      if (error) {
            console.error('Login error:', error)
            setStatmess('Something went wrong. Please try again.')
        }
        else if (!data) {
            setStatmess('Incorrect username or password.')
        }
        else {
            // Login successful
            console.log('Logged in:', data)

            navigate('/profile', {
                state: { user: data }
            })
        }


    }


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
          <Form onSubmit={handleLogin}>
            {statmess && <p>{statmess}</p>}
            <Form.Group className='username_box'>
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group className='password_box'>
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Button
                type="submit"
                className="SubmitLoginButton"
              >
                Log in
              </Button>
            </Form.Group>
          </Form>
        </section>

        
       
      </main>
    </div>
  )
}
