  import React, { useEffect, useRef, useState } from "react";
  import { createNoise2D } from "simplex-noise";
  import anime from "animejs";
  import "./NewColor.css";
  import newColorBucket from "./NewBucketColor";
  import scenery from "./sceneryInfo";


  function NewColorCode() {
    const canvasRef = useRef(null);
    const SceneryRef = useRef(null);
    const textRef = useRef(null);
    const oldSceneryRef = useRef(null);
    const bucketColorRef = useRef(null);
    const bucketColorTextRef = useRef(null);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [currentSceneryIndex, setCurrentSceneryIndex] = useState(0);
    const [currentoldSceneryIndex, setCurrentOldSceneryIndex] = useState(0);
    const [currentBucketIndex1, setcurrentBucketIndex1] = useState(0);
    const [currentBucketIndex2, setcurrentBucketIndex2] = useState(1);
    const [currentBucketIndex3, setcurrentBucketIndex3] = useState(2);
    const [sceneryChanged, setSceneryChanged] = useState(false);
    const [counter, SetCounter] = useState(0);
    


    const onClickChange = () => {
      setButtonClicked(true);
    };

    const onClickChange2 = () => {
      setCurrentSceneryIndex((prevIndex) => (prevIndex + 1) % scenery.length);
      SetCounter(counter + 1);
      console.log(counter);
      setcurrentBucketIndex1((prevIndex) => (prevIndex + 3) % newColorBucket.length);
      setcurrentBucketIndex2((prevIndex) => (prevIndex + 3) % newColorBucket.length);
      setcurrentBucketIndex3((prevIndex) => (prevIndex + 3) % newColorBucket.length);
    
      if (counter >=1){
        setCurrentOldSceneryIndex((prevIndex) => (prevIndex + 1) % scenery.length);
        
        
      }
      midAnimation();
    };
    

    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const size = {
        x: window.innerWidth,
        y: window.innerHeight,
      };
      canvas.width = size.x;
      canvas.height = size.y;

      const noise = createNoise2D();

      const wave = function (settings, call, dripDist, dripsAmount) {
        if (typeof call !== "function") {
          call = function () {};
        }
        const it = {
          drips: [],
          callback: call,
          defaults: {
            minHue: 0,
            maxHue: 360,
            minSaturation: 70,
            maxSaturation: 100,
            minLightness: 40,
            maxLightness: 60,
            minSpeed: 2.5,
            maxSpeed: 3,
          },
          settings: {},
        };

        if (typeof settings === "object") {
          it.settings = { ...it.defaults, ...settings };
        } else {
          it.settings = { ...it.defaults, color: settings };
        }

        for (let i = 0; i < dripsAmount; i++) {
          it.drips.push(0);
        }
        waves.push(it);
      };

      function loop() {
        const now = new Date().getTime();
        const currentTime = (now - startTime) / 10000;

        context.clearRect(0, 0, size.x, size.y);

        for (let i = 0; i < waves.length; i++) {
          const points = [];
          for (let c = 0; c < waves[i].drips.length; c++) {
            waves[i].drips[c] +=
              waves[i].settings.minSpeed +
              ((noise(i * dripsAmount + c, currentTime) + 1) *
                waves[i].settings.maxSpeed);

            points.push({
              x: dripDist * c,
              y: waves[i].drips[c],
            });
            
          }

          const hue =
            waves[i].settings.minHue +
            ((currentTime % 1) *
              (waves[i].settings.maxHue - waves[i].settings.minHue));
          const saturation =
            waves[i].settings.minSaturation +
            ((currentTime % 1) *
              (waves[i].settings.maxSaturation - waves[i].settings.minSaturation));
          const lightness =
            waves[i].settings.minLightness +
            ((currentTime % 1) *
              (waves[i].settings.maxLightness - waves[i].settings.minLightness));
          const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

          context.beginPath();
          context.strokeStyle = color;
          context.fillStyle = color;
          context.moveTo(0, 0);
          context.lineTo(points[0].x, points[0].y);

          let p = 0;
          for (p = 1; p < points.length - 2; p++) {
            const xc = (points[p].x + points[p + 1].x) / 2;
            const yc = (points[p].y + points[p + 1].y) / 2;

            context.quadraticCurveTo(points[p].x, points[p].y, xc, yc);
          }

          context.quadraticCurveTo(
            points[p].x,
            points[p].y,
            points[p + 1].x,
            points[p + 1].y
          );
          context.lineTo(size.x, 0);
          context.stroke();
          context.fill();
        }

        if (buttonClicked) {
          requestAnimationFrame(loop);
        }
      }

      const startTime = new Date().getTime();
      const waves = [];
      const dripDist = 100;
      const dripsAmount = Math.floor(size.x / dripDist) + 2;

      wave(
        {
          minHue: 0,
          maxHue: 360,
          minSaturation: 70,
          maxSaturation: 100,
          minLightness: 40,
          maxLightness: 60,
        },
        null,
        dripDist,
        dripsAmount
      );
      loop();
    }, [buttonClicked]);

  const midAnimation=() =>{
    const canvas = canvasRef.current;
              const context = canvas.getContext("2d");
              const size = {
                x: window.innerWidth,
                y: window.innerHeight,
              };
              canvas.width = size.x;
              canvas.height = size.y;
          
              const noise = createNoise2D();
          
              const wave = function (settings, call, dripDist, dripsAmount) {
                if (typeof call !== "function") {
                  call = function () {};
                }
                const it = {
                  drips: [],
                  callback: call,
                  defaults: {
                    minHue: 0,
                    maxHue: 360,
                    minSaturation: 70,
                    maxSaturation: 100,
                    minLightness: 40,
                    maxLightness: 60,
                    minSpeed: 2.5,
                    maxSpeed: 3,
                  },
                  settings: {},
                };
          
                if (typeof settings === "object") {
                  it.settings = { ...it.defaults, ...settings };
                } else {
                  it.settings = { ...it.defaults, color: settings };
                }
          
                for (let i = 0; i < dripsAmount; i++) {
                  it.drips.push(0);
                }
                waves.push(it);
              };
          
              function loop() {
                const now = new Date().getTime();
                const currentTime = (now - startTime) / 10000;
      
          
                
                for (let i = 0; i < waves.length; i++) {
                  const points = [];
                  for (let c = 0; c < waves[i].drips.length; c++) {
                    waves[i].drips[c] +=
                      waves[i].settings.minSpeed +
                      ((noise(i * dripsAmount + c, currentTime) + 1) *
                        waves[i].settings.maxSpeed);
          
                    points.push({
                      x: dripDist * c,
                      y: waves[i].drips[c],
                    });
                  }
          
                  
          
                  context.beginPath();
                  context.strokeStyle = SceneryRef.current  ;
                  context.fillStyle = context.createPattern(SceneryRef.current, "repeat");
                  context.moveTo(0, 0);
                  context.lineTo(points[0].x, points[0].y);

                  
                  

                  context.drawImage(
                    oldSceneryRef.current,
                    0,
                    0,
                    1568,
                    1120
                  );
          
                  let p = 0;
                  for (p = 1; p < points.length - 2; p++) {
                    const xc = (points[p].x + points[p + 1].x) / 2;
                    const yc = (points[p].y + points[p + 1].y) / 2;
          
                    context.quadraticCurveTo(points[p].x, points[p].y, xc, yc);
                  }
          
                  context.quadraticCurveTo(
                    points[p].x,
                    points[p].y,
                    points[p + 1].x,
                    points[p + 1].y
                  );
                  context.lineTo(size.x, 0);
                  context.stroke();
                  context.fill();
                }
          
                if (buttonClicked) {
                  requestAnimationFrame(loop);
                }   
              }
              anime({
                targets: [bucketColorRef.current,bucketColorTextRef.current],
                opacity: [0, 1],
                duration: 2000,
                delay:1000,
                pointerEvent: "auto",
                easing: "easeInOutQuad",
                complete: () => {
                  anime({
                    targets: "#ChangeScenery",
                  opacity: [0, 1],
                  duration: 500,
                  delay: 1000,  
                  pointerEvent: "auto",
                  easing: "easeInOutQuad",
                  });
                }
              });
              const startTime = new Date().getTime();
              const waves = [];
              const dripDist = 100;
              const dripsAmount = Math.floor(size.x / dripDist) + 2;
          
              wave(
                {
                  minHue: 0,
                  maxHue: 360,
                  minSaturation: 70,
                  maxSaturation: 100,
                  minLightness: 40,
                  maxLightness: 60,
                },
                null,
                dripDist,
                dripsAmount
              );
              loop();
  }

    const startAnimation = () => {
    anime({
      targets: textRef.current,
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutQuad",
      complete: () => {
        setTimeout(() => {
          anime({
            targets: textRef.current,
            opacity: [1, 0],
            duration: 2000,
            easing: "easeInOutQuad",
            complete: () => {
              const canvas = canvasRef.current;
              const context = canvas.getContext("2d");
              const size = {
                x: window.innerWidth,
                y: window.innerHeight,
              };
              canvas.width = size.x;
              canvas.height = size.y;
          
              const noise = createNoise2D();
          
              const wave = function (settings, call, dripDist, dripsAmount) {
                if (typeof call !== "function") {
                  call = function () {};
                }
                const it = {
                  drips: [],
                  callback: call,
                  defaults: {
                    minHue: 0,
                    maxHue: 360,
                    minSaturation: 70,
                    maxSaturation: 100,
                    minLightness: 40,
                    maxLightness: 60,
                    minSpeed: 2.5,
                    maxSpeed: 3,
                  },
                  settings: {},
                };
          
                if (typeof settings === "object") {
                  it.settings = { ...it.defaults, ...settings };
                } else {
                  it.settings = { ...it.defaults, color: settings };
                }
          
                for (let i = 0; i < dripsAmount; i++) {
                  it.drips.push(0);
                }
                waves.push(it);
              };
          
              function loop() {
                const now = new Date().getTime();
                const currentTime = (now - startTime) / 10000;
      
          
                for (let i = 0; i < waves.length; i++) {
                  const points = [];
                  for (let c = 0; c < waves[i].drips.length; c++) {
                    waves[i].drips[c] +=
                      waves[i].settings.minSpeed +
                      ((noise(i * dripsAmount + c, currentTime) + 1) *
                        waves[i].settings.maxSpeed);
          
                    points.push({
                      x: dripDist * c,
                      y: waves[i].drips[c],
                    });
                  }
          
          
                  context.beginPath();
                  context.strokeStyle = SceneryRef.current  ;
                  context.fillStyle = context.createPattern(SceneryRef.current, "repeat");
                  context.moveTo(0, 0);
                  context.lineTo(points[0].x, points[0].y);

                  
          
                  let p = 0;
                  for (p = 1; p < points.length - 2; p++) {
                    const xc = (points[p].x + points[p + 1].x) / 2;
                    const yc = (points[p].y + points[p + 1].y) / 2;
          
                    context.quadraticCurveTo(points[p].x, points[p].y, xc, yc);
                  }
          
                  context.quadraticCurveTo(
                    points[p].x,
                    points[p].y,
                    points[p + 1].x,
                    points[p + 1].y
                  );
                  context.lineTo(size.x, 0);
                  context.stroke();
                  context.fill();
                }
          
                if (buttonClicked) {
                  requestAnimationFrame(loop);
                }   
              }
              anime({
                targets: [bucketColorRef.current,bucketColorTextRef.current],
                opacity: [0, 1],
                duration: 2000,
                delay:2000,
                pointerEvent: "auto",
                easing: "easeInOutQuad",
                complete: () => {
                  anime({
                    targets: "#ChangeScenery",
                  opacity: [0, 1],
                  delay:1000,
                  duration: 500,
                  pointerEvent: "auto",
                  easing: "easeInOutQuad",
                  });
                }
              });
              const startTime = new Date().getTime();
              const waves = [];
              const dripDist = 100;
              const dripsAmount = Math.floor(size.x / dripDist) + 2;
          
              wave(
                {
                  minHue: 0,
                  maxHue: 360,
                  minSaturation: 70,
                  maxSaturation: 100,
                  minLightness: 40,
                  maxLightness: 60,
                },
                null,
                dripDist,
                dripsAmount
              );
              loop();
            },
          });
        }, 2500);
      },
    });
  };


  useEffect(() => {
    if (buttonClicked) {
      startAnimation();
      setSceneryChanged(false);
    }
  }, [buttonClicked, sceneryChanged]);
  

    return (
      <div id="HiddenColor">
        
        <canvas
          ref={canvasRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        ></canvas>
        {!buttonClicked && (
          <button id="newColor" onClick={onClickChange}>
            NewColor
          </button>
        )}
        {buttonClicked && (
          <>
            <h1
              ref={textRef}
              id="NewColorText"
              style={{
                opacity: 0,
              }}
            >
              <center>This is our new color!</center>
            </h1>
          </>
        )}
        <div>
        <div  ref={bucketColorRef} id="FlexBucket" style={{
                opacity: 0,
              }}>
            <img src={newColorBucket[currentBucketIndex1].img} alt="Color bucket" id="NewColorBucket"/>
            <img src={newColorBucket[currentBucketIndex2].img} alt="Color bucket" id="NewColorBucket"/>
            <img src={newColorBucket[currentBucketIndex3].img} alt="Color bucket" id="NewColorBucket"/>
          </div>
        <div id={newColorBucket[currentBucketIndex1].style} ref={bucketColorTextRef} style={{
                opacity: 0,
              }}>
          <h2>{newColorBucket[currentBucketIndex1].name}</h2>
          <h2>{newColorBucket[currentBucketIndex2].name}</h2>
          <h2>{newColorBucket[currentBucketIndex3].name}</h2>
        </div>
        <img
            ref={SceneryRef}
            src={scenery[currentSceneryIndex].src}
            alt="Scenery"
            id="Scenery"
            style={{
              opacity: 0,
            }}
          />
        </div>
        <div>
        <button id="ChangeScenery" onClick={onClickChange2} style={{
              opacity: 0,

            }}>
          Change
        </button>
        </div>
        <img
            ref={oldSceneryRef}
            src={scenery[currentoldSceneryIndex].src}
            alt="Scenery"
            id="Scenery"
            style={{
              opacity: 0,
            }}
          /> 
          
      </div>
    );
  }

  export default NewColorCode;
