// MatterStepOne.js
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import "./physicsPlayground.css";

const title = "Welcome to my Portfolio";
const subTitle ="Check out my projects and skills";


const startXSub = 14; // the distane between characters
const startY = 120; // y coorinate to render letters

// this function takes a string letter and size and returns a png sprite
function createImage($string, size) {

    let drawing = document.createElement("canvas");

    drawing.width = '150'
    drawing.height = '150'

    let ctx = drawing.getContext("2d");

    ctx.fillStyle = "transparent";
    // ctx.fillRect(0, 0, 150, 150);
    ctx.beginPath();
    // ctx.arc(75, 75, 20, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = size + "pt Courier New";
    console.log(ctx.font);
    ctx.textAlign = "center";
    ctx.fillText($string, 75, 85);

    return drawing.toDataURL("image/png");
}

// matter js physics sandbox and rendering 
export const PhysicsPlayground = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let Mouse = Matter.Mouse;
    let Constraint = Matter.Constraint;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 1000,
        height: 200,
        background: 'transparent',
        wireframes: false
      }
    });
    engine.gravity.y = 0.00

    const floor = Bodies.rectangle(0, 0, 2000, 1, {
      isStatic: true,
      render: {
        visible: false
      }
    });

    const ceiling = Bodies.rectangle(0, 200, 2000, 1, {
        isStatic: true,
        render: {
          visible: false
        }
      });
    const leftWall = Bodies.rectangle(0, 0, 1, 400, {
        isStatic: true,
        render: {
          visible: false
        }
      });

    const rightWall = Bodies.rectangle(2000, 0, 1, 400, {
        isStatic: true,
        render: {
          visible: false
        }
      });
    
    // give the mouse cursor physics   
    let cursor = Bodies.circle(0, 0, 4, {
        restitution: .0,
        render: {
            fillStyle: 'transparent',
            visible: false,
            lineWidth: 0,
  
        }})
    
    let balls = []; // the balls have letter sprites on them
    for (let i = 0; i < title.length; i++) {
        let j = i+1;
            balls.push(
                Bodies.circle((startXSub * j)+210, startY, 15, {
                    restitution: 0.9,
                    render: {
                    fillStyle: 'yellow',
                    sprite: {
                        texture: createImage(title[i], 40),
                        xScale:1,
                        yScale:1
                    }
                    }
                })
            )
        
    }
    for (let i = 0; i < subTitle.length; i++) {
        let j = i+1; 
        balls.push(
            Bodies.circle(((startXSub-5) * j)+ 122, startY+40, 8, {
                restitution: 0.9,
                render: {
                  fillStyle: 'yellow',
                  sprite: {
                      texture: createImage(subTitle[i], 18),
                      xScale:.9,
                      yScale:.9
                  }
                }
            })
        );
    }

    // World.add(engine.world, [floor, reactionText, balls[5]]);
    World.add(engine.world, [floor, ceiling, leftWall, rightWall])
    for (let i = 0; i < balls.length; i++) {
        World.add(engine.world, balls[i]);
      }

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = Constraint.create({
        pointA: mouse.position,
        bodyB: cursor,
        length: 0,
        stiffness: 1,
        render: {
          visible: false

        }
    });
    World.add(engine.world, [mouseConstraint, cursor]);

    Engine.run(engine);
    Render.run(render);
  },[]);

  return (
    <div className = "physics"
      ref={boxRef}
      style={{
        width: 1000,
        height: 200
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};
export default PhysicsPlayground;