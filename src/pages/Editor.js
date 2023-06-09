import React, { useState } from 'react';
import '../styles/editor.scss';
import { CirclePicker } from 'react-color';
import DrawingPanel from '../components/DrawingPanel';
import { useNavigate } from 'react-router-dom';


export default function Editor() {
  const navigate = useNavigate();
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState('start drawing');
  const [selectedColor, setColor] = useState('#f44336');

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === 'start drawing' ? setButtonText('reset') : setButtonText('start drawing');
  }

  function changeColor(color) {
    setColor(color.hex);
  }

  return (
    <div className="gambar">
      <div id="editor">
        <h1 className="drawTitle">Pixel Editor</h1>
        {hideDrawingPanel && <h2 className="size">Enter Panel Dimensions</h2>}
        {hideDrawingPanel && (
          <div id="options">
            <div className="option">
              <input
                type="number"
                className="panelInput"
                defaultValue={panelWidth}
                onChange={(e) => {
                  setPanelWidth(e.target.value);
                }}
              />
              <span>Width</span>
            </div>
            <div className="option">
              <input
                type="number"
                className="panelInput"
                defaultValue={panelHeight}
                onChange={(e) => {
                  setPanelHeight(e.target.value);
                }}
              />
              <span>Height</span>
            </div>
          </div>
        )}

        <button onClick={initializeDrawingPanel} className="button">
          {buttonText}
        </button>

        {hideOptions && <CirclePicker color={selectedColor} onChangeComplete={changeColor} />}

        {hideOptions && <DrawingPanel width={panelWidth} height={panelHeight} selectedColor={selectedColor} />}
      </div>
      <div>
        <button className="send" onClick={()=> navigate("/send")}>Send</button>
      </div>
    </div>
  );
}
