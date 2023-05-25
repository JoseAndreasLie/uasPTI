import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./Opening.css";
import logo from '../img/logo.png'

function Welcome() {
  const [flip, setFlip] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [canvasVisible, setCanvasVisible] = useState(true);
  const [continueAction, setContinueAction] = useState(false);
  const [fadeoutText, setFadeoutText] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;

    let isPainting = false;
    let lineWidth = 50;

    const draw = (e) => {
      if (!isPainting) {
        return;
      }

      ctx.lineWidth = lineWidth;
      ctx.lineCap = "round";

      ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
      ctx.stroke();
    };

    const handleMouseUp = () => {
      if (isPainting) {
        isPainting = false;
        if (flip === 1) {
          ctx.stroke();
          ctx.beginPath();
        }
        setFlip((prevFlip) => prevFlip + 1);
      }
    };

    const initialDrawing = () => {
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgb(245, 245, 245)";
    };

    initialDrawing();

    canvas.addEventListener("mousedown", (e) => {
      isPainting = true;
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvasOffsetX, e.clientY);
    });

    canvas.addEventListener("mouseup", handleMouseUp);

    canvas.addEventListener("mousemove", draw);

    return () => {
      canvas.removeEventListener("mousedown", () => {});
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", draw);
    };
  }, []);

  useEffect(() => {
    if (flip === 2) {
      setFadeIn(true);
      setCanvasVisible(false);
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        ctx.strokeStyle = "rgb(245, 245, 245)";
      }
    }
  }, [flip]);

  const handleClick = () => {
    if (continueAction) {
      console.log("Action continued!");
      setFadeoutText(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [continueAction]);

  useEffect(() => {
    if (fadeIn && flip >= 2) {
      setContinueAction(true);
    }
  }, [fadeIn, flip]);

  const setTextProps = useSpring({
    to: { opacity: fadeoutText ? 0 : 1 },
    from: { opacity: 1 },
    config: { duration: 1000 },
    delay: fadeIn ? (flip >= 2 ? 0 : 0) : 0,
    immediate: fadeoutText,
  });

  const setLogoProps = useSpring({
    opacity: fadeoutText ? 0 : fadeIn && flip >= 2 ? 1 : 0,
    display: fadeIn && flip >= 2 ? "block" : "none",
    from: { opacity: 0, display: "none" },
    config: { duration: 1200 }, // Adjust the duration to control the fadeout speed
    delay: fadeIn ? (flip >= 2 ? 600 : 0) : 0,
  });
  
  const setLeftProps = useSpring({
    opacity: fadeoutText ? 0 : fadeIn && flip >= 2 ? 1 : 0,
    display: fadeIn && flip >= 2 ? "block" : "none",
    from: { opacity: 0, display: "none" },
    config: { duration: 1200 }, // Adjust the duration to control the fadeout speed
    delay: fadeIn ? (flip >= 2 ? 1600 : 0) : 0,
  });

  const setLeftClickProps = useSpring({
    opacity: fadeoutText ? 0 : fadeIn && flip >= 2 ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 800 },
    delay: fadeIn ? (flip >= 2 ? 1000 : 0) : 0,
    onRest: () => {
      if (fadeIn && flip >= 2) {
        setContinueAction(true);
      }
    },
  });

  return (
    <section className="container">
      <div className="drawing-board">
        {canvasVisible && <canvas ref={canvasRef} id="drawing-board"></canvas>}
      </div>
      <animated.div style={setTextProps}>
        <div id="welcome">
          <center>
            WELCOME <br /> TO
          </center>
        </div>
      </animated.div>
      <animated.div style={setLogoProps}>
        <div id="container2">
          <img src={logo} id="logo" alt="Logo" />
        </div>
      </animated.div>
      <animated.div style={setLeftProps}>
        <div id="leftclick">
          <animated.div style={setLeftClickProps}>
            <center>left click to continue</center>
          </animated.div>
        </div>
      </animated.div>
    </section>
  );
}

export default Welcome;
