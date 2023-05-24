import React, { useRef, useState } from 'react';
import { findDOMNode } from 'react-dom';
import './Galeri.css';
import Galeri1 from '../img/galeri1.webp';

function Galeri() {
const trackRef = useRef(null);
const trackNode = findDOMNode(trackRef.current);
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);

  const handleOnDown = e => {
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(trackRef.current.dataset.percentage);
  };

  const handleOnMove = e => {
    if (mouseDownAt === 0) return;
  
    const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
  
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
    trackNode.dataset.percentage = nextPercentage;
  
    trackNode.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`
      },
      { duration: 1200, fill: "forwards" }
    );
  
    const images = trackNode.getElementsByClassName('image');
    for (const image of images) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  return (
    <div
      ref={trackRef}
      id="image-track"
      data-mouse-down-at="0"
      data-prev-percentage="0"
      onMouseDown={handleOnDown}
      onMouseUp={handleOnUp}
      onMouseMove={handleOnMove}
      onTouchStart={e => handleOnDown(e.touches[0])}
      onTouchEnd={e => handleOnUp(e.touches[0])}
      onTouchMove={e => handleOnMove(e.touches[0])}
    >
            <img className="image" src={Galeri1} draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
            <img className="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
        </div>
    );
}

export default Galeri