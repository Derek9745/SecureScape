import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './email_phishing.css'
import './Challenge.css'
import { getChallenge, markCompleted } from './challenges'

export default function Challenge() {
  const { id } = useParams()
  const navigate = useNavigate()
  const challenge = getChallenge(id)

  const [index, setIndex] = useState(0)
  const [tried, setTried] = useState([])
  const [firstTry, setFirstTry] = useState(0)
  const [missed, setMissed] = useState(false)
  const [finished, setFinished] = useState(false)

  if (!challenge || !challenge.questions) {
    return (
      <div className="challengePage">
        <main className="challengeContent">
          <h2>Challenge not found</h2>
          <Button className="challengeButton" onClick={() => navigate('/Game')}>
            Back to challenges
          </Button>
        </main>
      </div>
    )
  }

  const total = challenge.questions.length
  const question = challenge.questions[index]
  const answered = tried.some((i) => question.options[i].correct)

  const choose = (i) => {
    if (answered) return
    setTried((t) => [...t, i])
    if (!question.options[i].correct) setMissed(true)
  }

  const next = () => {
    if (!missed) setFirstTry((n) => n + 1)
    if (index + 1 < total) {
      setIndex(index + 1)
      setTried([])
      setMissed(false)
    } else {
      markCompleted(challenge.id)
      setFinished(true)
    }
  }

  return (
    <div className="challengePage">
      <header className="challengeHeader">
        <h1>Securescape</h1>
        <Button className="challengeButton" onClick={() => navigate('/Game')}>
          Back to challenges
        </Button>
      </header>

      <main className="challengeContent">
        <h2>{challenge.title}</h2>
        <p className="challengeSubtitle">{challenge.intro}</p>

        {finished ? (
          <section className="challengeCard result">
            <h3>Challenge complete!</h3>
            <p>
              You answered {firstTry} of {total} correctly on the first try.
            </p>
            <h4>Key takeaways</h4>
            <ul className="takeaways">
              {challenge.takeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <Button className="challengeButton" onClick={() => navigate('/Game')}>
              Choose another challenge
            </Button>
          </section>
        ) : (
          <section className="challengeCard">
            <p className="questionCount">
              Question {index + 1} of {total}
            </p>
            {question.scenario && <p className="scenario">{question.scenario}</p>}
            <h3>{question.prompt}</h3>

            <div className="options">
              {question.options.map((opt, i) => {
                const isPicked = tried.includes(i)
                const state = isPicked ? (opt.correct ? 'right' : 'wrong') : ''
                return (
                  <div key={opt.text} className={`option ${state}`}>
                    <button
                      className="optionButton"
                      disabled={answered || isPicked}
                      onClick={() => choose(i)}
                    >
                      {opt.text}
                    </button>
                    {isPicked && (
                      <p className="feedback">
                        {!opt.correct && <strong>Not quite. </strong>}
                        {opt.feedback}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>

            {answered && (
              <Button className="challengeButton nextButton" onClick={next}>
                {index + 1 < total ? 'Next question' : 'Finish'}
              </Button>
            )}
          </section>
        )}
      </main>
    </div>
  )
}
