import React, { useState, useEffect } from 'react';
import Occupado from '../Components/Occupado';
import './HeaderContainer.css';

const HeaderContainer = () => {
  const [occupado, setOccupado] = useState(true);

  let description;
  if (occupado === true) {
    description = (
      <div>
        <i className="fa fa-times-circle" /> <span> Occupado!</span>{' '}
      </div>
    );
  } else if (occupado === false) {
    description = (
      <div>
        <i className="fas fa-check-circle" /> <span> Open!</span>{' '}
      </div>
    );
  }

  return (
    <div className="fluid-container gray">
      <div className="fluid-inner">
        <div className="inner-flex-desktop">
          <h1>ReservationSmith</h1>
          <div className="occupied-indicator">
            <Occupado />
          </div>
        </div>
        <div className="inner-flex-mobile">
          <div>
            <div>
              <i className="fas fa-bars icon-margin-left" />
              <h1 className="inline">RS</h1>
            </div>
          </div>
          <i className="fa fa-times-circle" />
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
