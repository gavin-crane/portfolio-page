import React from 'react'
import './profilePicture.css';
import pic from './profilepic.png';
import rock from './rock.jpg';
export default function ProfilePicture() {
  return (
    <div className = "profile">
      <div className = "fill">
          <img src = {rock} alt ="" />
          <h1>Gavin Crane</h1>
          <h2>Software Developer</h2>
          <h2>Comp Sci Student</h2>
          
          
      </div>
     
            {/* <h1>Gavin Crane</h1> */}
    
    </div>
  )
}
