import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import './email_phishing.css'

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
                    <div className="emailSlide">
                        <h3>Example Email 1</h3>
                    </div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="emailSlide">
                        <h3>Example Email 2</h3>
                    </div>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="emailSlide">
                        <h3>Example Email 3</h3>
                    </div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                            </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>


      </main>
    </div>
  )
}
