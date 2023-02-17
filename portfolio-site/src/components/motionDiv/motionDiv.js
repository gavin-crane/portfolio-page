import { motion, useCycle } from "framer-motion"
import './motionDiv.css';
import { useState, useEffect} from 'react'

export default function MotionDiv( {data})  {
    const rotate = 180;
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    const handleAnimationComplete = () => {
        setIsAnimationComplete(true);
      }

    //   useEffect(() => {
    //     // if (isAnimationComplete) {
    //       const element = document.querySelector(".motionContainer .box");
    //       element.innerHTML = data;
    //     // }
    //     if (isAnimationComplete) {
            
    //     }
    //   }, [data, isAnimationComplete]);

    return (
        <div className="motionContainer">
            <div className="motionWrapper">
                {isAnimationComplete &&( <motion.button className = 'closeModalButton'
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                Exit
                                            </motion.button>)}
                {/* <motion.button className = 'closeModalButton'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Exit
                </motion.button> */}

                <motion.div
                    initial={{
                        rotate: 180,             
                    }}
                    className={`box ${isAnimationComplete ? "boxComplete" : ""}`}
             
                    animate = {{
                        scale: [0, 1],
                        rotate: 360,
                    }}
                    transition={{ 
                        type: "spring", 
                        damping: 25,
                        stiffness: 300,
                        
                    }}
                    onAnimationComplete={handleAnimationComplete}
                >
                
                   
                    <div dangerouslySetInnerHTML={{ __html: data }}></div>
                </motion.div>
            </div>  
        </div>
    );
}