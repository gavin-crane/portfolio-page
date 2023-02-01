// MatterStepOne.js
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import "./physicsPlayground.css";

const title = "Welcome to my Portfolio";
const subTitle ="Check out my projects and skills";

const leftMargin = 50;
const startX = 25;
const startXSub = 19;
const startY = 120;
const widthFactor = 1

const bodyToSpriteRatio = .5;

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
    ctx.font = size + "pt Quicksand";
    console.log(ctx.font);
    ctx.textAlign = "center";
    ctx.fillText($string, 75, 85);

    return drawing.toDataURL("image/png");
}

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
        fillStyle: 'blue',
      }
    });

    const ceiling = Bodies.rectangle(0, 200, 2000, 1, {
        isStatic: true,
        render: {
          fillStyle: 'blue',
        }
      });
    const leftWall = Bodies.rectangle(0, 0, 1, 400, {
        isStatic: true,
        render: {
          fillStyle: 'blue',
        }
      });

    const rightWall = Bodies.rectangle(2000, 0, 1, 400, {
        isStatic: true,
        render: {
          fillStyle: 'blue',
        }
      });

    let cursor = Bodies.circle(0, 0, 4, {
        restitution: .0,
        render: {
            fillstyle: 'white',
        }})

    
    let balls = [];
    for (let i = 0; i < title.length; i++) {
        let j = i+1; 
        balls.push(
            Bodies.circle(startX * j, startY, 8, {
                restitution: 0.9,
                render: {
                  fillStyle: 'yellow',
                  sprite: {
                      texture: createImage(title[i], 28),
                      xScale:.9,
                      yScale:.9
                  }
                }
            })
        );
    }
    let balls2 = [];
    for (let i = 0; i < subTitle.length; i++) {
        let j = i+1; 
        balls.push(
            Bodies.circle(startXSub * j, startY+40, 10, {
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
        stiffness: 1
    });
    World.add(engine.world, [mouseConstraint, cursor]);

    Engine.run(engine);
    Render.run(render);
  }, []);

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