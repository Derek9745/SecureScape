import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './email_phishing.css'
import './Challenge.css'
import { challenges, getCompleted } from './challenges'

export default function Game() {
  const navigate = useNavigate()
  const completed = getCompleted()

  return (
    <div className="challengePage">
      <header className="challengeHeader">
        <h1>Securescape</h1>
        <Button className="challengeButton" onClick={() => navigate('/')}>
          Home
        </Button>
      </header>

      <main className="challengeContent">
        <h2>Escape Room</h2>
        <p className="challengeSubtitle">
          Solve each security challenge to unlock the way out. {completed.length} of{' '}
          {challenges.length} complete.
        </p>

        <div className="hubGrid">
          {challenges.map((c) => {
            const done = completed.includes(c.id)
            return (
              <div key={c.id} className={`hubCard ${done ? 'done' : ''}`}>
                <h3>{c.title}</h3>
                <p className="concept">{c.concept}</p>
                {done && <span className="badge-done">Completed</span>}
                <Button className="challengeButton" onClick={() => navigate(c.route)}>
                  {done ? 'Play again' : 'Start'}
                </Button>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
