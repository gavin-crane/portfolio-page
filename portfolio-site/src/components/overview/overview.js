
import React from 'react';
import './overview.css';
import SocialsBar from '../socialsBar/socialsBar';

function Overview() {
  return (
    <div className = "overview">
      <div className = "insideOverview">
        <div className = "content">
            Contents of the side bar
        </div>
        <SocialsBar className = "socials"/>
      </div>
    </div>
  );
}
export default Overview;