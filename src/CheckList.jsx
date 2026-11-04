import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './CheckList.css';
import { challenges, getCompleted } from './challenges';

function CheckList() {
  const navigate = useNavigate();
  const [completed] = useState(getCompleted);

  return (
    <div className="viewWrapper">
      <button className="returnButton menuButton" onClick={() => navigate('/')}>
        Return To Game
      </button>

      <div className="puzzleListContainer">
        {challenges.map((puzzle) => {
          const isChecked = completed.includes(puzzle.id);
          return (
            <div key={puzzle.id} className="puzzleItem">
              <div className="puzzleHeaderRow">
                <div className="puzzleLabel">
                  <input type="checkbox" checked={isChecked} readOnly />
                  <span>{puzzle.title}</span>
                </div>

              </div>
              <div className="puzzleDescription">
                <p>{puzzle.concept}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default CheckList;
