import React, { useState } from 'react';

export function Prix({ setMinPrice, setMaxPrice }) {
  const [showLinks, setShowLinks] = useState(false);
  const [cross, setCross] = useState(false);
  const [minPrice, setMinPriceLocal] = useState("0");
  const [maxPrice, setMaxPriceLocal] = useState("10");

  const handleShowlinks = () => {
    setShowLinks(!showLinks);
    crossToggle();
  };

  const crossToggle = () => {
    setCross(!cross);
  };

  const handleMinPrice = (e) => {
    setMinPriceLocal(e.target.value);
    setMinPrice(e.target.value);
  };

  const handleMaxPrice = (e) => {
    setMaxPriceLocal(e.target.value);
    setMaxPrice(e.target.value);
  };

  return (
    <div>
      <div className='prix'>
        <div className='ButtonToggleContent'>
          <h2>Prix </h2>
          <span className={`cross ${cross ? "cross" : "hiddencross"}`} onClick={handleShowlinks}></span>
        </div>
        <div className={`Prixlabel ${showLinks ? "Prixlabel" : "hidden-Prixlabel"}`}>
          <div>
            <label >Prix Min</label>
            <input
              placeholder='0'
              type="number"
              min={0}
              max={5}
              className="InputPageContent"
              value={minPrice}
              onChange={handleMinPrice}
            ></input>
          </div>
          <div>
            <label >Prix Max</label>
            <input
              placeholder='10'
              type="number"
              min={5}
              max={10}
              className="InputPageContent"
              value={maxPrice}
              onChange={handleMaxPrice}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}