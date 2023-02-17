import { motion, useCycle } from "framer-motion"
import './motionDiv.css';
import { useState, useEffect} from 'react'

export default function MotionDiv( {data})  {
    const rotate = 180;
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    const handleAnimationComplete = () => {
        setIsAnimationComplete(true);
      }

      useEffect(() => {
        if (isAnimationComplete) {
          const element = document.querySelector(".motionContainer .box");
          element.innerHTML = data;
        }
      }, [data, isAnimationComplete]);

    return (
        <div className="motionContainer">
           
            <motion.div
                initial={{
                    rotate: 180,
              
                }}
                className={`box ${isAnimationComplete ? "boxComplete" : ""}`}
                animate = {{
                    scale: [0, 1],
                    rotate: 360,
                    // borderRadius: '10%'
                }}
                transition={{ 
                    type: "spring", 
                    damping: 17,
                    stiffness: 150,
                    
                }}
                onAnimationComplete={handleAnimationComplete}
            />
        </div>
    );
}