import React from "react";
import {easeOut, motion as m} from "framer-motion"
import '../styles/Aboutus.css';
import LEO from '../../public/us/LEO-small.png';
import JOSE from '../../public/us/JOSE-small.png';
import OWEN from '../../public/us/OWEN-small.png';
import REY from '../../public/us/REY-small.png';
import KHARIS from '../../public/us/KHARIS-small.png';

function Aboutus() {

  return (
    <div>
        
      <m.p className="AUp" 
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      transition={{ duration:1, ease:"easeOut"}} >LJORK'S TEAM</m.p>
        <m.div className="AUmain" 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay:0.75, duration:0.75, ease:"easeOut"}} >

      <div className="AUrow">
        <div className="AUcolumn">
            <div className="AUcard">
          <img src={LEO} />
          <h3>Leo</h3>
          <h3>00000065503</h3>
          <p>Si Leo adalah Seorang Leo</p>
          </div> 
        </div>

        <div className="AUcolumn">
        <div className="AUcard">
        <img src={JOSE} />
          <h3>Jose</h3>
          <h3>00000067097</h3>
          <p>K E J U</p>
          </div>
        </div>

        <div className="AUcolumn">
        <div className="AUcard">
        <img src={OWEN} />
          <h3>Owen</h3>
          <h3>00000067055</h3>
          <p>Lorem Ipsum</p>
          </div>
        </div>

        <div className="AUcolumn">
        <div className="AUcard">
        <img src={REY} />
          <h3>Reynard</h3>
          <h3>00000067065</h3>
          <p>Lorem Ipsum</p>
          </div>
        </div>

        <div className="AUcolumn">
        <div className="AUcard">
        <img src={KHARIS} />
          <h3>Kharis</h3>
          <h3>00000067127</h3>
          <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </m.div>
    </div>
  );
}

export default Aboutus;
