import React, { useState, useEffect } from 'react';
import './Subtitle.css';

function Subtitle() {
    const texts = [
    "Our Galeri",
    "is",
    "so",
    "satisfying",
    "to",
    "watch"
    ];
    const morphTime = 1;
    const cooldownTime = 0.25;

    const [textIndex, setTextIndex] = useState(texts.length - 1);
    const [morph, setMorph] = useState(0);
    const [cooldown, setCooldown] = useState(cooldownTime);

    useEffect(() => {
        const interval = setInterval(() => {
        setMorph(prevMorph => {
        let newMorph = prevMorph - cooldown;
        let newCooldown = 0;

        if (newMorph <= 0) {
            newMorph = 0;
            newCooldown = cooldownTime;
            setTextIndex(prevIndex => prevIndex + 1);
        }

        setCooldown(newCooldown);
        return newMorph;
        });
        }, 1000 / 30);

        return () => {
            clearInterval(interval);
        };
    }, []) ;

    const text1 = texts[textIndex % texts.length];
    const text2 = texts[(textIndex + 1) % texts.length];

    const morphFraction = Math.min(morph / morphTime, 1);
    const inverseMorphFraction = 1 - morphFraction;

    const text2Style = {
        filter: `blur(${Math.min(8 / morphFraction - 8, 100)}px)`,
        opacity: `${Math.pow(morphFraction, 0.4) * 100}%`
    };

    const text1Style = {
        filter: `blur(${Math.min(8 / inverseMorphFraction - 8, 100)}px)`,
        opacity: `${Math.pow(inverseMorphFraction, 0.4) * 100}%`
    };

    return (
    <div>
        <div id="container">
            <span id="text1" style={text1Style}>{text1}</span>
            <span id="text2" style={text2Style}>{text2}</span>
        </div>
        <svg id="filters">
        <defs>
            <filter id="threshold">
                <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 255 -140"
                />
            </filter>
        </defs>
        </svg>
    </div>
    );
}

export default Subtitle;
