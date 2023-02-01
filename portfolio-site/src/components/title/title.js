import React from 'react'
import PhysicsPlayground from '../physicsPlayground/physicsPlayground';
import './title.css';

const sleep = ms => new Promise(r => setTimeout(r, ms));

sleep(20);
export default function Title() {
  return (
    <div className = "title">
        
        <PhysicsPlayground/>
        <div className = "titleContainer">
            <h1>Welcome to my Portfolio</h1>
            <h2>Check out my skills and projects</h2>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}
    