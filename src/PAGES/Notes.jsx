import React, { useState } from 'react';

export function Notes({ setMinNotes, setMaxNotes }) {
  const [showLinks, setShowLinks] = useState(false);
  const [cross, setCross] = useState(false);
  const [minNotes, setMinNotesLocal] = useState("0");
  const [maxNotes, setMaxNotesLocal] = useState("5");

  const handleShowlinks = () => {
    setShowLinks(!showLinks);
    crossToggle();
  };

  const crossToggle = () => {
    setCross(!cross);
  };

  const handleMinNotes = (e) => {
    setMinNotesLocal(e.target.value);
    setMinNotes(e.target.value);
  };

  const handleMaxNotes = (e) => {
    setMaxNotesLocal(e.target.value);
    setMaxNotes(e.target.value);
  };

  return (
    <div>
      <div className='prix'>
        <div className='ButtonToggleContent'>
          <h2>Notes </h2>
          <span className={`cross ${cross ? "cross" : "hiddencross"}`} onClick={handleShowlinks}></span>
        </div>
        <div className={`Prixlabel ${showLinks ? "Prixlabel" : "hidden-Prixlabel"}`}>
          <div>
            <label >Notes Min</label>
            <input
              placeholder='0'
              type="number"
              min={1}
              max={5}
              className="InputPageContent"
              value={minNotes}
              onChange={handleMinNotes}
            ></input>
          </div>
          <div>
            <label >Notes Max</label>
            <input
              placeholder='10'
              type="number"
              min={5}
              max={5}
              className="InputPageContent"
              value={maxNotes}
              onChange={handleMaxNotes}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}