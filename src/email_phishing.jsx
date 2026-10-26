import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import './email_phishing.css'
import email1 from './assets/p_email_Ex1.jpg'
import email2 from './assets/p_email_Ex2.jpg'
import email3 from './assets/p_email_Ex3.jpg'



export default function Email_phishing() {
  const navigate = useNavigate()

  return (
    <div className="challengePage">
      <header className="challengeHeader">
        <h1>Securescape</h1>

        <button
          className="challengeButton"
          onClick={() => navigate('/')}
        >
          Return to Game
        </button>
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
            </Carousel>
        </section>


      </main>
    </div>
  )
}
