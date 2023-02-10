import React, { useEffect, useState } from 'react';
import './card.css';

import monki from './tenor_1.gif';



export default function Card({gifUrl, title, subTitle}) {
    const [isHovered, setIsHovered] = useState(false);
    const cardStyles = {
      position: 'relative',
      backgroundImage: isHovered ? `url(${gifUrl})` : "none",
      zIndex: 11,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }
    const cardContentStyles = {
      backgroundColor: isHovered ? "transparent" :'rgb(40, 41, 51)',
      borderRadius: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      inset: 1,
      padding: 10,
      position: 'absolute',
      zIndex: 2,
    }
    
    
      return (
        <div
          class="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={cardStyles}
        >
          <div class="card-content" style={cardContentStyles}>
            <div class="card-image">
              <i class="fa-duotone fa-apartment"></i>
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-apartment"></i>
                <div class="card-info-title">
                  <h3>{title}</h3>
                  <h4>{subTitle}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
