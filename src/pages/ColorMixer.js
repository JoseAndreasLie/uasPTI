import React, { useState } from 'react';
import '../styles/ColorMixer.css';

function ColorMixer() {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [mixedColor, setMixedColor] = useState('');

  const mixColors = () => {
    const r1 = parseInt(color1.substring(0, 2), 16);
    const g1 = parseInt(color1.substring(2, 4), 16);
    const b1 = parseInt(color1.substring(4, 6), 16);

    const r2 = parseInt(color2.substring(0, 2), 16);
    const g2 = parseInt(color2.substring(2, 4), 16);
    const b2 = parseInt(color2.substring(4, 6), 16);

    const r = Math.floor((r1 + r2) / 2);
    const g = Math.floor((g1 + g2) / 2);
    const b = Math.floor((b1 + b2) / 2);

    const mixedColor = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    setMixedColor(mixedColor);
  };

  const resetColors = () => {
    setColor1('');
    setColor2('');
    setMixedColor('');
  };

  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return (
    <div className="bg-mixer">
    <div className="white-wrapper">
      <h1 className="color-mixer">COLOR MIXER</h1>
      <p className="prompt">
        To mix two colors, enter the color numbers in each input field in the HEX format (without #) and click the{' '}
        <span className="button-in-p">MIX</span> button. You can use the suggested options. To repeat, press the{' '}
        <span className="button-in-p">RESET</span> button.
      </p>
      <div className="color-inputs">
        <input
          type="text"
          id="color1"
          className="color-input"
          placeholder="First color"
          value={color1}
          onChange={(e) => setColor1(e.target.value)}
          list="a"
          autoComplete="off"
        />
        <datalist id="a">
          <option value="3590B0"></option>
          <option value="E3CCAF"></option>
          <option value="FC3415"></option>
          <option value="54CA20"></option>
          <option value="6DC2B0"></option>
        </datalist>
        <input
          type="text"
          id="color2"
          className="color-input"
          placeholder="Second color"
          value={color2}
          onChange={(e) => setColor2(e.target.value)}
          list="b"
          autoComplete="off"
        />
        <datalist id="b">
          <option value="B96F7F"></option>
          <option value="F0E10E"></option>
          <option value="114C4D"></option>
          <option value="FDB216"></option>
          <option value="E31919"></option>
        </datalist>
      </div>

      <div className="color-button">
        <button className="button-mix" onClick={mixColors}>
          MIX
        </button>
        <button className="button-reset" onClick={resetColors}>
          RESET
        </button>
      </div>
      <div className="color-circles">
        <div id="first-color" style={{ backgroundColor: color1 ? `#${color1}` : 'transparent' }}>
            <span id="first-color-code">{color1 && `#${color1}`}</span>
        </div>
        <div id="mixed-color" style={{ backgroundColor: mixedColor }}>
            <span id="color-code">{mixedColor}</span>
        </div>
        <div id="second-color" style={{ backgroundColor: color2 ? `#${color2}` : 'transparent' }}>
            <span id="second-color-code">{color2 && `#${color2}`}</span>
        </div>`
      </div>
    </div>
    </div>
  );
}

export default ColorMixer;
