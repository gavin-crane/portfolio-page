
import React from 'react';
import './social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Social({href, icon}) {
  return (
    <span>
         <a href={href} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} className="social-icon" />
        </a>
    </span>
  );
}
export default Social;