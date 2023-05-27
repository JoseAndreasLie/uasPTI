import React, { useState } from 'react';

const ColorName = () => {
    const [color, setColor] = useState('#F55A5A');
    const [seedColor, setSeedColor] = useState('');
    const [colorName, setColorName] = useState('');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const getColorName = () => {
        const newSeedColor = color.replace('#', '');
        setSeedColor(newSeedColor);

        fetch(`https://www.thecolorapi.com/id?hex=${newSeedColor}`)
        .then((res) => res.json())
        .then((data) => {
            setColorName(data.name.value);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getColorName();
    };

    return (
        <main>
        <section className="container">
            <form onSubmit={handleSubmit}>
            <input type="color" id="colorPicker" value={color} onChange={handleColorChange} />
            <button type="submit">Get color scheme</button>
            </form>
            <h1>Seed Color: {seedColor}</h1>
            <h2>Color Name: {colorName}</h2>
        </section>
        </main>
    );
};

export default ColorName;
