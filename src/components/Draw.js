import React, { useRef, useEffect, useState } from 'react';
import $ from 'jquery';
import './Draw.css';

const Draw = () => {
    const canvasRef = useRef(null);
    const [selectedColor, setSelectedColor] = useState('#1abc9c');
    const [selectedThickness, setSelectedThickness] = useState(4);
    const [isPressed, setIsPressed] = useState(false);
    const [prevPoint, setPrevPoint] = useState([0, 0]);
    
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const cWidth = 1400;
      const cHeight = 1000;
      
      // Set width and height of canvas
      canvas.width = cWidth;
      canvas.height = cHeight;
      
      // Event listeners
      $('.color').on('click', function() {
        $('.color.active').removeClass('active');
        $(this).addClass('active');
        setSelectedColor($(this).data('color'));
      });
      
      $('.thickness').on('click', function() {
        $('.thickness.active').removeClass('active');
        $(this).addClass('active');
        setSelectedThickness($(this).data('thickness'));
      });
      
      $(canvas).on('mousemove', function(e) {
        var x = e.offsetX * 2;
        var y = e.offsetY * 2;
      
        if (isPressed) {
          drawLine(x, y);
        }
      });
      
      $(canvas).on('mousedown', function(e) {
        setPrevPoint([(e.offsetX * 2), e.offsetY * 2]);
        ctx.beginPath();
        ctx.moveTo(prevPoint[0], prevPoint[1]);
        setIsPressed(true);
      });
      
      $(canvas).on('mouseup mouseleave', function() {
        setIsPressed(false);
        ctx.closePath();
        saveImage();
      });
      
      $('[data-clear]').on('click', function() {
        clearCanvas();
        saveImage();
      });
      
      $('#save').on('click', function() {
        saveImage();
      });
      
      // Does what it says
      function clearCanvas() {
        ctx.clearRect(0, 0, cWidth, cHeight);
      }
      
      // Saves image to background
      function saveImage() {
        var image = canvas.toDataURL('image/png');
        
        $('.bg-img').css({
          'background-image': 'url(' + image + ')'
        });
      }
      
      // Draws a line
      function drawLine(x, y) {
        ctx.lineTo(x, y);
        ctx.lineWidth = selectedThickness;
        ctx.strokeStyle = selectedColor;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        
        setPrevPoint([x, y]);
      }
      
      // Draws the initial picture
      function drawInit() {
        ctx.beginPath();
        ctx.moveTo(300, 250);
        ctx.lineTo(340, 700);
        
        ctx.moveTo(300, 500);
        ctx.lineTo(500, 480);
        
        ctx.moveTo(500, 250);
        ctx.lineTo(540, 700);
        
        ctx.moveTo(710, 400);
        ctx.lineTo(700, 700);
        
        ctx.moveTo(710, 210);
        ctx.lineTo(710, 240);
        
        ctx.moveTo(910, 210);
        ctx.lineTo(900, 540);
        
        ctx.moveTo(925, 620);
        ctx.lineTo(880, 720);
        
        ctx.moveTo(870, 630);
        ctx.lineTo(940, 720);
        
        ctx.closePath();
        ctx.lineWidth = '48';
        ctx.strokeStyle = '#2ecc71';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        
        saveImage();
      }
      
      drawInit();
    }, []); // Empty dependency array to run only once
    
    return (
      <div>
        <div className="bg-img"></div>
        <canvas ref={canvasRef} id="canvas"></canvas>
      
        <nav className="tools-bar">
          <div className="button button-clear" data-clear></div>
        </nav>
      
        <nav className="thickness-bar">
          <div className="thickness active" data-thickness="4"></div>
          <div className="thickness" data-thickness="12"></div>
          <div className="thickness" data-thickness="24"></div>
          <div className="thickness" data-thickness="48"></div>
          <div className="thickness" data-thickness="128"></div>
        </nav>
      
        <nav className="color-bar">
          <div className="color" data-color="#9b59b6"></div>
          <div className="color" data-color="#3498db"></div>
          <div className="color" data-color="#2ecc71"></div>
          <div className="color active" data-color="#1abc9c"></div>
          <div className="color" data-color="#f1c40f"></div>
          <div className="color" data-color="#e67e22"></div>
          <div className="color" data-color="#E73C61"></div>
        </nav>
      </div>
    );
  };
  
  export default Draw;
  