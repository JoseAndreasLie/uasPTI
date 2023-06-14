import React from 'react';
import '../styles/Footer.scss';
import Logo from '../img/logo.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelopeOpen } from 'react-icons/fa';



const BubbleFooter = () => {
  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 128; i++) {
      const size = 2 + Math.random() * 4;
      const distance = 6 + Math.random() * 4;
      const position = -5 + Math.random() * 110;
      const time = 2 + Math.random() * 2;
      const delay = -1 * (2 + Math.random() * 2);

      const bubbleStyle = {
        '--size': `${size}rem`,
        '--distance': `${distance}rem`,
        '--position': `${position}%`,
        '--time': `${time}s`,
        '--delay': `${delay}s`,
      };

      bubbles.push(<div className="bubble" style={bubbleStyle} key={i} />);
    }
    return bubbles;
  };

  return (
    <div>
      <div className="">
        <div className="footer">
          <div className="bubbles">{createBubbles()}</div>
          <div className="content">
            <div className="isi1">
              <div>
                <FaMapMarkerAlt />
                <a href="#">Indonesia Banten, Kota Tangerang</a>
              </div>
              <div>
                <FaPhone />
                <a href="#">+62 123 456 789</a>
              </div>
              <div>
                <FaEnvelopeOpen />
                <a href="#">TAC@gmail.com</a>
              </div>
            </div>
            <div className="isi2">
              <img className="image" src={Logo}/>
              <p>Copyright © 2023 TAC</p>
            </div>
          </div>
        </div>
      </div>
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BubbleFooter;