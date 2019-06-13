import React from 'react';
import './HeaderContainer.css';
import Occupado from '../Components/Occupado';

const HeaderContainer = () => {
  return (
    <div className="fluid-container gray">
      <div className="fluid-inner">
        <div className="inner-flex-desktop">
          <h1>ReservationSmith</h1>
          <div className="occupied-indicator">
            <i className="fa fa-times-circle" />
            <span>
              <Occupado />
            </span>
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
