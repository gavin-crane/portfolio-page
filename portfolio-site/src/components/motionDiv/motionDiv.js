import { motion, useCycle } from "framer-motion"
import './motionDiv.css';
import { useState, useEffect} from 'react'
import AnimatedText from "./animatedText";

  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Framer Motion" },
    {
      type: "heading2",
      text: "Animating responsive text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

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
                
                   
                    {/* <div dangerouslySetInnerHTML={{ __html: data }}></div> */}
                    <motion.div
                        className="animatedText"
                        initial="hidden"
                        // animate="visible"
                        animate="visible"
                        variants={container}
                        >
                        <div className="container">
                            {placeholderText.map((item, index) => {
                            return <AnimatedText {...item} key={index} />;
                            })}
                        </div>

                    </motion.div>
                </motion.div>
            </div>  
        </div>
    );
}