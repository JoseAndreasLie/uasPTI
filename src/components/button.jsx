import React from 'react';
import bucket from './bucketInfo';
import '../styles/colorPicker.css';

function ColorPicker({ onColorChange }) {
  const handleClick = (style) => {
    onColorChange(style);
  };

  return (
    <div id="Flex">
      {bucket.map((item) => (
        <div key={item.number}>
          <button className={item.style} onClick={() => handleClick(item.style)}></button>
        </div>
      ))}
    </div>
  );
}

export default ColorPicker;
