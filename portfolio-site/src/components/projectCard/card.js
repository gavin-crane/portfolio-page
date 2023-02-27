import React, { useEffect, useLayoutEffect, useState } from 'react';
import './card.css';
import './modal.css';


import MotionDiv from '../../components/motionDiv/motionDiv'
import monki from './tenor_1.gif';
import IconSolarSystem from './iconSolarSystem';

let expandedContent = '<div><h2>Hello Modal</h2></div>';



export default function Card({gifUrl, title, subTitle, data, iconSet, identifier}) {

    console.log("icons in card", iconSet);
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isIconSolarSystemMounted, mountIconSolarSystem] = useState(false);

    const handleClick = (event) => { 
      setIsClicked(!isClicked);
      setIsHovered(false);
    }

    const cardStyles = {
      position: 'relative',
      backgroundImage: "none",

      // backgroundImage: isHovered ? `url(${gifUrl})` : "none",
      zIndex: 2,
      
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

    if (isClicked) {
      return (
        <div className="modal">
        <div onClick={(event) => handleClick(event)}
              onMouseLeave={() => setIsHovered(false)}
        onMouseOut={() => setIsHovered(false)}
         className="overlay"></div>
        <div className="modal-content">
        <MotionDiv data={data}/>
          {/* <h2>Hello Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perferendis suscipit officia recusandae, eveniet quaerat assumenda
            id fugit, dignissimos maxime non natus placeat illo iusto!
            Sapiente dolorum id maiores dolores? Illum pariatur possimus
            quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
            placeat tempora vitae enim incidunt porro fuga ea.
          </p> */}
          {/* <button className="close-modal" onClick={(event) => handleClick(event)} >
            CLOSE
          </button> */}
        </div>
      </div>
      )
    }
    // else if (isHovered && !isClicked) {
    //   return (
    //     <div className ="card"
    //     onMouseLeave={() => setIsHovered(false)}
    //     onMouseEnter={() => setIsHovered(true)}
    //     onClick={(event) => handleClick(event)}>
    //       <IconSolarSystem icons = {iconSet}/>
    //     </div>
    //     )
    // }
    else {
      return (<div
        className="card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // onMouseOut={() => setIsHovered(false)}
        onClick={(event) => handleClick(event)}
        style={cardStyles}
      >
        {<div className='card-solar-system'> <IconSolarSystem icons={iconSet} identifier={identifier}/> </div>}
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
    </div>)
    }
}
