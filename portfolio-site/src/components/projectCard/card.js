import React, { useEffect, useState } from 'react';
import './card.css';

import MotionDiv from '../../components/motionDiv/motionDiv'
import monki from './tenor_1.gif';

let expandedContent = '<div><h2>Hello Modal</h2></div>';

export default function Card({gifUrl, title, subTitle, data}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const [clickedTilePosition, setClickedTilePosition] = useState({x: 0, y: 0});

    const handleClick = (event) => { 
      setIsClicked(!isClicked);
    }
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
      <>
        {isClicked && isHovered ? 
          (<div>
            <div className="modal" 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {/* setIsClicked(false)*/}}
            >
              <div onClick={(event) => handleClick(event)} className="overlay"></div>
            </div>
            <MotionDiv data={data}/>
            <div
            className="card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(event) => handleClick(event)}
            style={cardStyles}
            >
            <div className="card-content" style={cardContentStyles}>
              <div className="card-image">
                <i className="fa-duotone fa-apartment"></i>
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <i className="fa-duotone fa-apartment"></i>
                  <div className="card-info-title">
                    <h3>{title}</h3>
                    <h4>{subTitle}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>) :
          (<div
            className="card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={(event) => handleClick(event)}
            style={cardStyles}
          >
            <div className="card-content" style={cardContentStyles}>
              <div className="card-image">
                <i className="fa-duotone fa-apartment"></i>
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <i className="fa-duotone fa-apartment"></i>
                  <div className="card-info-title">
                    <h3>{title}</h3>
                    <h4>{subTitle}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </>);
}
