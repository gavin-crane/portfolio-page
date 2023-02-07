import React, { useEffect, useState } from 'react';
import './card.css';

import monki from './tenor_1.gif';



export default function Card({gifUrl}) {
    const [isHovered, setIsHovered] = useState(false);
    const cardStyles = {
        position: 'relative',
        background: isHovered ? `#C9CACA url(${gifUrl}) no-repeat` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
    
      return (
        <div
          class="card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={cardStyles}
        >
          <div class="card-content">
            <div class="card-image">
              <i class="fa-duotone fa-apartment"></i>
            </div>
            <div class="card-info-wrapper">
              <div class="card-info">
                <i class="fa-duotone fa-apartment"></i>
                <div class="card-info-title">
                  <h3>I used chatgpt fight me</h3>
                  <h4>fight me</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}
