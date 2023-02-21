import {React, useEffect, useState, useLayoutEffect, useRef} from 'react';
import './iconSolarSystem.css';

// each url is a moon, each moon can have submoons
// there can only be one level of submoons


export default function IconSolarSystem({icons}) {
    const isMounted = useRef(false);
    useEffect(()=> {
    if (isMounted.current) {
        console.log("useLayoutEffect ran");

        const baseOrbitalSize = 100;
        const baseOrbitSpeed = 10;
        const baseDistBetweenOrbits = 200;
        const baseSubOrbitalSize = 30;
        

       
        // will contains all the moons and their orbits

        let container = document.querySelector('.system-container');
        
        // adds orbit to container, moon to orbit and suborbit to moon along with the submoon
        function addMoonOrbit(orbitSize, moonSize, icon, subMoons = false) {
          const orbit = document.createElement('div');
          orbit.classList.add('orbit');
          orbit.style.borderRadius = "50%";
          // orbit.style.outline = "4px dotted gray";
          orbit.style.width = `${orbitSize}px`;
          orbit.style.height = `${orbitSize}px`;
          orbit.style.position = 'absolute';
          orbit.style.top = '50%';
          orbit.style.left = '50%';
          orbit.style.transform = 'translate(-50%, -50%)';
          container.appendChild(orbit)
        
          const moon = document.createElement('div');
          moon.classList.add('moon');
          moon.style.backgroundImage = `url(${icon})`;
          moon.style.backgroundPosition = "center";
          moon.style.backgroundSize = "contain";
          moon.style.backgroundRepeat = "no-repeat";
          moon.style.position = "absolute";
          moon.style.top = `-${moonSize/2}px`;
          moon.style.left = `${(orbitSize/2)-(moonSize/2)}px`;
          moon.style.width = `${moonSize}px`
          moon.style.height = `${moonSize}px`;
          orbit.appendChild(moon); // append the moon element to the container
          
          if (subMoons) { 
            
            let subOrbitalSize = baseSubOrbitalSize;
            
            for (let i = 0; i < subMoons.length; i++) {
              
              subOrbitalSize = subOrbitalSize += baseDistBetweenOrbits/4;
              const subOrbit = document.createElement('div');
              subOrbit.classList.add('subOrbit');
              subOrbit.style.borderRadius = "50%";
              // subOrbit.style.outline = "4px dotted gray";
              subOrbit.style.width = `${subOrbitalSize}px`;
              subOrbit.style.height = `${subOrbitalSize}px`;
              subOrbit.style.position = 'absolute';
              subOrbit.style.top = '50%';
              subOrbit.style.left = '50%';
              subOrbit.style.transform = 'translate(-50%, -50%)';
        
              const subMoon = document.createElement('div');
              subMoon.classList.add('subMoon');
              subMoon.style.backgroundImage = `url(${subMoons[i].url})`;
              subMoon.style.backgroundPosition = "center";
              subMoon.style.backgroundSize = "contain";
              subMoon.style.backgroundRepeat = "no-repeat";
              subMoon.style.position = "absolute";
              subMoon.style.top = `-${subMoons[i].size/2}px`;
              subMoon.style.left = `${(subOrbitalSize/2)-(subMoons[i].size/2)}px`;
              subMoon.style.width = `${subMoons[i].size}px`
              subMoon.style.height = `${subMoons[i].size}px`;
              subOrbit.appendChild(subMoon); // append the moon element to the container
              moon.appendChild(subOrbit);
            }
          }
        }
        
        let orbitalSize = baseOrbitalSize;
        
        for (let i = 0; i < icons.length; i++) {
          orbitalSize += baseDistBetweenOrbits;
          console.log("this iteration of adding orbits", i);
          addMoonOrbit(orbitalSize, icons[i].size,  icons[i].url, icons[i].subMoons);
        }
        
        let orbits = document.getElementsByClassName('orbit');
        
        let orbitSpeed = baseOrbitSpeed;
        
        // animate the orbits
        for (let i = 0; i < orbits.length; i++) {
          
          orbitSpeed = orbitSpeed * 1.5;
          orbits[i].style.animation = `rotate-ring ${orbitSpeed}s infinite linear`;
          let moon = orbits[i].getElementsByClassName('moon')[0];
          moon.style.animation = `rotate-moons ${orbitSpeed}s infinite linear`;
          
          // animate subOrbits
          let subOrbits = moon.getElementsByClassName('subOrbit');
          let subOrbitalSpeed = baseOrbitSpeed*.2;
          if (subOrbits) {
            for (let j = 0; j < subOrbits.length; j++) {
              
              subOrbitalSpeed = subOrbitalSpeed * 1.5;
              
              subOrbits[j].style.animation = `rotate-ring ${subOrbitalSpeed}s  infinite linear`;
              let subMoon = subOrbits[j].getElementsByClassName('subMoon')[0];
              subMoon.style.animation = `rotate-moons ${subOrbitalSpeed}s infinite linear`;
            }
          }
        }
    }
    else {
        isMounted.current = true;
    }
      }, []);
    return (
        <>
            <div class ="system-container">
            </div>
        </>
    )
}
