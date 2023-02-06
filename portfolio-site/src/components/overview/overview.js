
import React from 'react';
import './overview.css';
import SocialsBar from '../socialsBar/socialsBar';
import Social from '../social/social';
import ProfilePicture from '../profilePicture/profilePicture';
import LanguageBar from '../languageBar/languageBar'
function Overview() {
  return (
    <span className = "overview">
      <div className = "insideOverview">
        <div className = "content">
        <ProfilePicture/>
        </div>
        
        <LanguageBar/>
      
       
        <SocialsBar />
      </div>
    </span>
  );
}
export default Overview;