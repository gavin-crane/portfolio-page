import React, { useEffect } from 'react';
import './projectCard.css';
import Card from "./card"

import monki from './tenor_1.gif';



export default function ProjectCard() {
    

    useEffect(() => {
        console.log('Component mounted!');
        document.getElementById("cards").onmousemove = e => {
            for(const card of document.getElementsByClassName("card")) {
              const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;
          
              card.style.setProperty("--mouse-x", `${x}px`);
              card.style.setProperty("--mouse-y", `${y}px`);
            };
        }
    }, []);
  return (
    <div id="cards">
    
    <Card gifUrl={monki}/>
    <Card gifUrl={monki}/>
    <Card gifUrl={monki}/>
    <Card gifUrl={monki}/>
    <Card gifUrl={monki}/>
    <Card gifUrl={monki}/>
    </div>
    // <>
    //     <div id="cards">
    //     <div class="card">
    //         <div class="card-content">
    //         <img src={monki}/>
    //         <div class="card-image">
                
    //             <i class="fa-duotone fa-apartment"></i>
    //         </div>
    //         <div class="card-info-wrapper">
    //             <div class="card-info">
    //             <i class="fa-duotone fa-apartment"></i>
    //             <div class="card-info-title">
    //                 <h3>I used chatgpt fight me</h3>  
    //                 <h4>fight me</h4>
    //             </div>    
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <div class="card-content">
    //         <div class="card-image">
    //             <i class="fa-duotone fa-unicorn"></i>
    //         </div>
    //         <div class="card-info-wrapper">
    //             <div class="card-info">
    //             <i class="fa-duotone fa-unicorn"></i>
    //             <div class="card-info-title">
    //                 <h3>project 1</h3>  
    //                 <h4>This is a cool project</h4>
    //             </div>    
    //             </div>  
    //         </div>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <div class="card-content">
    //         <div class="card-image">
    //             <i class="fa-duotone fa-blender-phone"></i>
    //         </div>
    //         <div class="card-info-wrapper">
    //             <div class="card-info">
    //             <i class="fa-duotone fa-blender-phone"></i>
    //             <div class="card-info-title">
    //                 <h3>project 2</h3>  
    //                 <h4>this is a project of all time</h4>
    //             </div>    
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <div class="card-content">
    //         <div class="card-image">
    //             <i class="fa-duotone fa-person-to-portal"></i>
    //         </div>
    //         <div class="card-info-wrapper">
    //             <div class="card-info">
    //             <i class="fa-duotone fa-person-to-portal"></i>
    //             <div class="card-info-title">
    //                 <h3>hello world</h3>  
    //                 <h4>is an accomplishment</h4>
    //             </div>    
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <div class="card-content">
    //         <div class="card-image">
    //             <i class="fa-duotone fa-person-from-portal"></i>
    //         </div>
    //         <div class="card-info-wrapper">
    //             <div class="card-info">
    //             <i class="fa-duotone fa-person-from-portal"></i>
    //             <div class="card-info-title">
    //                 <h3>This is a website</h3>  
    //                 <h4>help</h4>
    //             </div>    
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    //     <div class="card">
    //         <div class="card-content">
    //         <div class="card-image">
    //             <i class="fa-duotone fa-otter"></i>
    //         </div>
    //         <div class="card-info-wrapper">
    //             <div class="card-info">
    //             <i class="fa-duotone fa-otter"></i>
    //             <div class="card-info-title">
    //                 <h3>Logar</h3>  
    //                 <h4>is here</h4>
    //             </div>    
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    //     </div>
    // </>
  )
}
