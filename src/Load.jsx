import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Load.css';

const saveSlots = [
  { id: '1', label: 'Save Slot 1' },
  { id: '2', label: 'Save Slot 2' },
  { id: '3', label: 'Save Slot 3' },
];


function SaveSlots() {
const navigate = useNavigate();

return (
<div className="viewWrapper">
<button
className="returnButton menuButton"
onClick={() => navigate('/')}
>
Return To Game
</button>

  <div className="saveListContainer">
    {saveSlots.map((saveFile) => (
      <div key={saveFile.id} className="saveItem">
        <div className="saveHeaderRow">
          <div className="saveLabel">
            <span>{saveFile.label}</span>
          </div>
        </div>

        <div className="saveDescription">
          <p>Default save slot</p>
        </div>
        <button>Load File</button>
        <button>Save Game</button>
      </div>
    ))}
  </div>
</div>

);
}

export default SaveSlots;