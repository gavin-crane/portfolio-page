
import React from 'react';
import './socialsBar.css';
import Social from '../social/social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faHireAHelper} from '@fortawesome/free-brands-svg-icons'

function SocialsBar() {
  return (
    <div className = "socials">
        <Social href={"https://github.com/gavin-crane"} icon={faGithub}/>
        <Social href={"https://github.com/gavin-crane"} icon={faLinkedin}/>
        <Social href={"https://github.com/gavin-crane"} icon={faHireAHelper}/>
    </div>
  );
}
export default SocialsBar;