import React, { useState } from 'react';
import './image.css';
import carr from './carrrr.jpg';

function ImageMani() {
  const [hei, setHei] = useState(100);
  const [wid, setWid] = useState(100); 
  const [rot, setRot] = useState(0); 
  const [chaBack, setChaBack] = useState(false); 

  const handleHeight = () => {
    setHei((prevHei) => prevHei + 5); 
  };

  const handleWidth = () => {
    setWid((prevWid) => prevWid + 50);
  };

  const handleRotate = () => {
    setRot((prevRot) => prevRot + 30);
  };

  const handleBackground = () => {
    setChaBack((prevChaBack) => !prevChaBack);
  };

  return (
    <div
      className="imageCard">
      <div className="catdiv" style={{ backgroundColor: chaBack ? 'lightblue' : 'white' }}>
        <img src={carr} height={hei} style={{transform: `rotate(${rot}deg)`,backfaceVisibility: "hidden"}} width={wid}  alt="Car"/>
      </div>
      <div className="buttondiv" style={{marginTop: 80, display: 'flex'}}>
        <button onClick={handleHeight}>Enhance Height</button>
        <button onClick={handleWidth}>Enhance Width</button>
        <button onClick={handleRotate}>Rotate</button>
        <button onClick={handleBackground}>Change Background</button>
      </div>
    </div>
  );
}

export default ImageMani;
