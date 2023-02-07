
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
        
        <ProfilePicture/>
        {/* <div>
          <p>WWU Comp Sci student learning to code. I love to learn new things, then try to make something with the acquired knowledge, and then never finish it.</p>
        </div> */}
       
        
        <LanguageBar language={"Python"} percentage={90}/>
        <LanguageBar language={"Java"} percentage={80}/>
        <LanguageBar language={"javaScript"} percentage={70}/>
        <LanguageBar language={"SQL"} percentage={65}/>
        <LanguageBar language={"C"} percentage={60}/>
      
       
        <SocialsBar />
      </div>
    </span>
  );
}
export default Overview;