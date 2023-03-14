import React, { useEffect } from 'react';
import './projectCard.css';
import Card from "./card"
import InfoBlock from '../infoBlock/infoBlock';

import monki from './tenor_1.gif';


let data = `
  <img src="https://th.bing.com/th/id/OIP.t8QqwxZMUik5MJExJhWItQHaDt?pid=ImgDet&rs=1" alt="An example image" />
  <h1>This is a project</h1>
  <p>This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me</p>
  <h2>Heres some more cool info</h2>
  <p>This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me</p>
  <h2>Heres some more cool info</h2>
  <p>This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me</p>
  <h2>Heres some more cool info</h2>
  <p>This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me
  This is some filler text hello world what is happening please help me</p>`;

  let tileSize = 100;

  let icons = [
    { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", size: 25,
        subMoons: [
        {url: "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png", size: 25},
        {url: "https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png", size: 25}
        ]
    },
    { url: "https://th.bing.com/th/id/R.f7337d339216d05c1551688efb13a830?rik=m28qY9WE3BaKXQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-png-nodejs-icon-png-50-px-1600.png&ehk=XR9ktXGvw5svYVTEqemL7wSEUZL%2bihqTpYBLPSQn8GQ%3d&risl=&pid=ImgRaw&r=0", size: 25,
        subMoons: [
        {url: "https://pngimage.net/wp-content/uploads/2018/05/express-js-png-5.png", size: 25},
        {url: "https://icon-library.com/images/postgres-icon/postgres-icon-25.jpg", size: 25}
        ]
    },
    
    ]

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
    <>
    <div id="cards">
      
      <Card gifUrl={monki} title={'Inventory Management System'} data={data} iconSet={icons} identifier={1}/>
      <Card gifUrl={monki} title= {'Laplacian Filter'} data={data} iconSet={icons} identifier={2}/>
      <Card gifUrl={monki} title={'Logar'} subTitle={'Discord bot'} data={data}  iconSet={icons} identifier={3}/>
      <Card gifUrl={monki} title={'Pathfinders'} subTitle={'Visual maze and pathfinding generation'} data={data} iconSet={icons} identifier={4}/>
      <Card gifUrl={monki} title={'Dungeons and Dragons'} data={data} iconSet={icons} identifier={5}/>
      <Card gifUrl={monki} title={'Ravenous'} subTitle={"Yelp-like clone"} data={data} iconSet={icons} identifier={6}/>
    </div>
    </>
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
