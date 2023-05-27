import '../styles/ColorConverter.css';
import React, { useState } from 'react';

const ColorConverter = () => {
    const [color, setColor] = useState('#212121');
    const [colorName, setColorName] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const getColorName = () => {
        const newSeedColor = color.replace('#', '');

        fetch(`https://www.thecolorapi.com/id?hex=${newSeedColor}`)
        .then((res) => res.json())
        .then((data) => {
            setColorName(data.name.value);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getColorName();
        setBackgroundColor(color);
    };
    return (
        <div>
            <div className="container-fluid animated-bg">
                <div className="row">
                <div className="header">
                    <div className="col-md-12 col-sm-12">
                    <div className="header-brand">
                        <a className="nbp" href="#">TAC</a>
                        <span className="brand-small">Color Picker to Hex Color Converter</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="container-main" style={{ backgroundColor: backgroundColor }}>
                <form onSubmit={handleSubmit}>
                    <input type="color" id="colorPicker" value={color} onChange={handleColorChange} />
                    <button className="convert" type="submit">Convert</button>
                </form>
                <span className="title-word title-word-1">Color : {colorName}</span>
            </div>
        </div>
    );
};

export default ColorConverter;
