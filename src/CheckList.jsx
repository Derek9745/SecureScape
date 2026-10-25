import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './CheckList.css';

const ChallengesList = [
  { id: '1', label: 'Puzzle1' },
  { id: '2', label: 'Puzzle2' },
  { id: '3', label: 'Puzzle3' },
  { id: '4', label: 'Puzzle4' },
  { id: '5', label: 'Puzzle5' }
];



function CheckList() {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState(
    { 1: false, 
      2: false, 
      3: false, 
      4: false, 
      5: false }
    );

  const togglePuzzleSelection = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="viewWrapper">
      <button className="returnButton menuButton" onClick={() => navigate('/')}>
        Return To Game
      </button>

      <div className="puzzleListContainer">
        {ChallengesList.map((puzzle) => {
          const isChecked = checkedItems[puzzle.id] || false;
          return (
            <div key={puzzle.id} className="puzzleItem">
              <div className="puzzleHeaderRow">
                <div className="puzzleLabel">
                  <input type="checkbox" checked={isChecked} readOnly />
                  <span>{puzzle.label}</span>
                </div>
            
              </div>
              <div className="puzzleDescription">
                <p>...default puzzle description of a challenge...</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default CheckList;
