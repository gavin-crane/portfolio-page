
import React from 'react';
import './overview.css';
import SocialsBar from '../socialsBar/socialsBar';
import Social from '../social/social';
import ProfilePicture from '../profilePicture/profilePicture';
function Overview() {
  return (
    <span className = "overview">
      <div className = "insideOverview">
        <div className = "content">
        <ProfilePicture/>
        </div>
       
        <SocialsBar />
      </div>
    </span>
  );
}
export default Overview;