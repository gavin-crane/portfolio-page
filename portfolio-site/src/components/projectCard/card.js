import React, { useEffect, useLayoutEffect, useState } from 'react';
import './card.css';

import MotionDiv from '../../components/motionDiv/motionDiv'
import monki from './tenor_1.gif';
import IconSolarSystem from './iconSolarSystem';

let expandedContent = '<div><h2>Hello Modal</h2></div>';

let tileSize = 100;

let iconSet = [
  { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", size: 40,
      subMoons: [
      {url: "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png", size: 40},
      {url: "https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png", size: 40}
      ]
  },
  { url: "https://th.bing.com/th/id/R.f7337d339216d05c1551688efb13a830?rik=m28qY9WE3BaKXQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-png-nodejs-icon-png-50-px-1600.png&ehk=XR9ktXGvw5svYVTEqemL7wSEUZL%2bihqTpYBLPSQn8GQ%3d&risl=&pid=ImgRaw&r=0", size: 40,
      subMoons: [
      {url: "https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png", size: 40},
      {url: "https://icon-library.com/images/postgres-icon/postgres-icon-25.jpg", size: 40}
      ]
  },
  
  ]

export default function Card({gifUrl, title, subTitle, data, tileSize}) {
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
      borderRadius: isHovered ? '50%' :'inherit',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      inset: 1,
      padding: 10,
      position: 'absolute',
      zIndex: 2,
    }

    // this is the modal:
    // <MotionDiv data={data}/>
    // this is solar system:
    // <IconSolarSystem icons = {iconSet}/>

    
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
