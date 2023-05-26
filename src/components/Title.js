import './Title.css'
import {motion as m} from 'framer-motion';

function Title() {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 0 0" width="0" height="0" style={{ display: 'none' }}>
                <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" /> 
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                </filter>
                </defs>
            </svg>

        <m.div 
        className="goo"
        animate={{x: 0}}
        initial={{x: "20%"}}
        transition={{delay: 0, duration: 1}}
        >
            <h1 className="h1">TAC</h1>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
            <div className="drop"></div>
        </m.div>
    </div>
);
}

export default Title;
