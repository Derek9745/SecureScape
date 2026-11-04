import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import './email_phishing.css'
import email1 from './assets/p_email_Ex1.jpg'
import email2 from './assets/p_email_Ex2.jpg'
import email3 from './assets/p_email_Ex3.jpg'
import email4 from './assets/emailex4.jpg'
import { OffcanvasBody } from 'react-bootstrap'
import { markCompleted } from './challenges'

export default function Email_phishing() {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [gotClicked1, setClicked1] = useState(false)
    const [gotClicked2, setClicked2] = useState(false)
    const [gotClicked3, setClicked3] = useState(false)
    const [gotClicked4, setClicked4] = useState(false)


    const handleClick1 = () => setClicked1(true)
    const handleClick2 = () => setClicked2(true)
    const handleClick3 = () => setClicked3(true)
    const handleClick4 = () => {
        setClicked4(true)
        markCompleted('email_phishing')
    }



  return (
    <div className="challengePage">
      <header className="challengeHeader">
        <h1>Securescape</h1>

        <Button
          className="challengeButton"
          onClick={() => navigate('/')}
        >
          Return to Game
        </Button>
      </header>

      <main className="challengeContent">
        <h2>Email Phishing</h2>
        <p className="challengeSubtitle">
          Learn how to detect social engineering through email!
        </p>

        <section className="challengeCard">
          <h3>You've Got Mail!</h3>
        </section>

        <section className="emails">
            <Carousel slide={false}>
                <Carousel.Item>
                    <img 
                    className="emailSlide"
                    src={email1}
                    alt="Phisihing Email"    
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="emailSlide"
                    src={email2}
                    alt="Phisihing Email"    
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="emailSlide"
                    src={email3}
                    alt="Phisihing Email"    
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="emailSlide"
                    src={email4}
                    alt="Phisihing Email"    
                    />
                </Carousel.Item>
            </Carousel>
        </section>
        <section className="quiz">
            <button className="challengeButton" onClick={handleShow}>
            Take the Quiz!
            </button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Email Phishing Quiz</Offcanvas.Title>
                </Offcanvas.Header>
                <OffcanvasBody>
                    Which Email was Legitimate?
                    <section>
                    <Button className='quizchoice' size="lg" 
                    disabled={gotClicked1}
                    onClick={handleClick1}>
                        {gotClicked1 ? 'Phishing. Legitimate companies will not ask you to confirm account details through a link in an email. Go to the site directly instead.' : 'Email 1'}
                    </Button>
                    </section>
                    <section>
                    <Button className='quizchoice' size="lg" 
                    disabled={gotClicked2}
                    onClick={handleClick2}>
                        {gotClicked2 ? 'Phishing. Threats like "your account will be closed" push you to act before you think. Urgency is a classic pressure tactic.' : 'Email 2'}
                    </Button>
                    </section>
                    <section>
                    <Button className='quizchoice' size="lg" 
                    disabled={gotClicked3}
                    onClick={handleClick3}>
                        {gotClicked3 ? 'Phishing. The IRS first contacts people by postal mail and does not demand payment or personal details by email. Impersonating an authority is a common trick.' : 'Email 3'}
                    </Button>
                    </section>
                    <section>
                    <Button className='quizchoice' size="lg" 
                    disabled={gotClicked4}
                    onClick={handleClick4}>
                        {gotClicked4 ? 'Correct! This email makes no urgent threat and does not ask you for sensitive details. Still, verify through the official site if in doubt.' : 'Email 4'}
                    </Button>
                    </section>
                    
                </OffcanvasBody>
            </Offcanvas>
        </section>


      </main>
    </div>
  )
}
