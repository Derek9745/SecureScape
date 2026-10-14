import { useNavigate } from 'react-router-dom'
import './UserProfile.css'

export default function UserProfile() {
  const navigate = useNavigate()

  return (
    <div className="profilePage">
      <header className="profileHeader">
        <h1>Securescape</h1>

        <button
          className="profileButton"
          onClick={() => navigate('/')}
        >
          Return to Game
        </button>
      </header>

      <main className="profileContent">
        <h2>Your User Profile</h2>
        <p className="profileSubtitle">
          Player Information
        </p>

        <section className="profileCard">
          <div className="avatar">JD</div>
          <h3>Jane Doe</h3>
          <p>@cool_player445</p>
        </section>

        <section className="statsGrid">
          <div className="statCard">
            <h3>0</h3>
            <p>Level</p>
          </div>

          <div className="statCard">
            <h3>0</h3>
            <p>Achivement Points</p>
          </div>

          <div className="statCard">
            <h3>0</h3>
            <p>Challenges Completed</p>
          </div>
        </section>
      </main>
    </div>
  )
}