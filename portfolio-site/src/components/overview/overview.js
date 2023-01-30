
import React from 'react';
import './overview.css';
import SocialsBar from '../socialsBar/socialsBar';

function Overview() {
  return (
    <span className = "overview">
      <div className = "insideOverview">
        <div className = "content">
            Contents of the side bar
        </div>
        <SocialsBar />
      </div>
    </span>
  );
}
export default Overview;