import React from 'react';

import './css/style.css';

const GridLights = () => {
  return (
    <div className="grid-lights">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
        <div className="grid-lights-box" id={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default GridLights;
