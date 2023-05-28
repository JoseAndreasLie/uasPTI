import React, { useState } from 'react';
import '../styles/ColorScheme.css';

const ColorSchemeGenerator = () => {
  const [colors, setColors] = useState([]);
  const [seedColor, setSeedColor] = useState('#F55A5A');
  const [mode, setMode] = useState('monochrome');

  const copyColorAndCodes = (color) => {
    navigator.clipboard.writeText(color);
    alert(`Color code: ${color} has been copied`);
  };

  const getColorScheme = () => {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${seedColor.replace('#', '')}&mode=${mode}`
    )
      .then((res) => res.json())
      .then((data) => {
        setColors(data.colors);
      });
  };

  const handleColorPickerChange = (event) => {
    setSeedColor(event.target.value);
  };

  const handleModePickerChange = (event) => {
    setMode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getColorScheme();
  };

  return (
    <main>
      <section className="container2">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="color"
            id="colorPicker2"
            value={seedColor}
            onChange={handleColorPickerChange}
          />
          <select
            name=""
            id="modePicker"
            value={mode}
            onChange={handleModePickerChange}
          >
            <option value="monochrome">Monochrome</option>
            <option value="monochrome-dark">Monochrome-dark</option>
            <option value="monochrome-light">Monochrome-light</option>
            <option value="analogic">Analogic</option>
            <option value="complement">Complement</option>
            <option value="analogic-complement">Analogic-complement</option>
            <option value="triad">Triad</option>
            <option value="quad">Quad</option>
          </select>
          <button className="scheme" type="submit">Get color scheme</button>
        </form>

        <div id="colorScheme">
          {colors.length > 0 ? (
            colors.map((color, index) => (
              <div key={index} className="bg-color">
                <div
                  className="color"
                  style={{ backgroundColor: color.hex.value }}
                  onClick={() => copyColorAndCodes(color.hex.value)}
                ></div>
                <p className="color-code" onClick={() => copyColorAndCodes(color.hex.value)}>
                  {color.hex.value}
                </p>
              </div>
            ))
          ) : (
            <div className="instructions">
              <ul>
                <li>Pick a seed color</li>
                <li>Select a color mode and</li>
                <li>Click on the button to generate your color scheme</li>
                <li>
                  P.S: You can also click on the generated colors or on their
                  corresponding color codes to copy their hex value
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ColorSchemeGenerator;
