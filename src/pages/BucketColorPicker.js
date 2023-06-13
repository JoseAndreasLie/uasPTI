import React, { useState, useEffect } from 'react';
import ColorPicker from '../components/button';
import bucket from '../components/bucketInfo';
import '../styles/colorPicker.css';
import { createNoise2D } from 'simplex-noise'; // Import the createNoise2D function from the library
import { motion as m } from 'framer-motion';

function BucketColorPicker() {
  const [selectedColor, setSelectedColor] = useState(bucket[0]);

  const handleColorChange = (style) => {
    const selectedBucket = bucket.find((item) => item.style === style);
    if (selectedBucket) {
      setSelectedColor(selectedBucket);
      waveBackground(selectedBucket.color); // Call the wave background function with the selected color
    } else {
      throw new Error(`Color style not found in bucket: ${style}`);
    }
  };

  const waveBackground = (color) => {
    // Function to animate the wave background
    var size = {
      x: window.innerWidth,
      y: window.innerHeight,
    };

    var canvas = document.createElement('canvas');
    canvas.width = size.x;
    canvas.height = size.y;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';

    var context = canvas.getContext('2d');
    document.body.appendChild(canvas);

    var startTime = new Date().getTime();
    var currentTime = 0;
    var dripDist = 100;
    var dripsAmount = Math.floor(size.x / dripDist) + 2;
    var waves = [];

    var noise = createNoise2D(); // Create a noise generator using createNoise2D

    var wave = function (settings, call) {
      if (typeof call !== 'function') {
        call = function () {};
      }
      var it = {
        drips: [],
        callback: call,
        defaults: {
          color: '#99db81',
          minSpeed: 1,
          maxSpeed: 3,
        },
        settings: {},
      };

      if (typeof settings === 'object') {
        it.settings = Object.assign({}, it.defaults, settings);
      } else {
        it.settings = Object.assign({}, it.defaults, { color: settings });
      }

      for (var i = 0; i < dripsAmount; i++) {
        it.drips.push(0);
      }
      waves.push(it);
    };

    function loop() {
      var now = new Date().getTime();
      currentTime = (now - startTime) / 10000;

      context.clearRect(0, 0, size.x, size.y);

      var done = true;
      for (var i = 0; i < waves.length; i++) {
        var points = [];
        for (var c = 0; c < waves[i].drips.length; c++) {
          waves[i].drips[c] +=
            waves[i].settings.minSpeed +
            (noise(i * dripsAmount + c, currentTime) + 1) * // Use the noise function from the generator
              waves[i].settings.maxSpeed;

          points.push({
            x: dripDist * c,
            y: waves[i].drips[c],
          });
          if (waves[i].drips[c] < size.y) {
            done = false;
          }
        }

        context.beginPath();
        context.strokeStyle = waves[i].settings.color;
        context.fillStyle = waves[i].settings.color;
        context.moveTo(0, 0);
        context.lineTo(points[0].x, points[0].y);

        var p = 0;
        for (p = 1; p < points.length - 2; p++) {
          var xc = (points[p].x + points[p + 1].x) / 2;
          var yc = (points[p].y + points[p + 1].y) / 2;

          context.quadraticCurveTo(points[p].x, points[p].y, xc, yc);
        }

        context.quadraticCurveTo(points[p].x, points[p].y, points[p + 1].x, points[p + 1].y);
        context.lineTo(size.x, 0);
        context.stroke();
        context.fill();
      }

      if (done) {
        return; // Exit the loop when the animation is done
      }

      requestAnimationFrame(loop);
    }

    wave({ color: color });
    loop();
  };

  return (
    <m.div className="BcolorPicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeOut' }} exit={{ opacity: 1 }}>
      <h1>
        <center>Choose any color</center>
      </h1>
      <div id="imgcenter">
        <img src={selectedColor.img} alt="" id="imgSize" />
      </div>
      <h2>
        <center>{selectedColor.name}</center>
      </h2>
      <br />
      <div className="pilihWarna">
        <ColorPicker onColorChange={handleColorChange} />
      </div>
    </m.div>
  );
}

export default BucketColorPicker;
