import React from "react";
import {easeOut, motion as m} from "framer-motion"
import '../styles/Aboutus.css';
import LEO from '../img/LEO-small.png';
import JOSE from '../img/JOSE-small.png';
import OWEN from '../img/OWEN-small.png';
import REY from '../img/REY-small.png';
import KHARIS from '../img/KHARIS-small.png';

function Aboutus() {

  return (
    <div className="AUmain">
      <div className="AUpc">
      <m.p className="AUp" 
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      transition={{ duration:1, ease:"easeOut"}} >LJORK'S TEAM</m.p>
      </div>

        <m.div className="AUmain" 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay:0.75, duration:0.75, ease:"easeOut"}} >

      <div className="AUrow">
        <div className="AUcolumn">
            <div className="AUcard">
          <img src={LEO} />
          <h3>Leonardo Tyoes Huibu</h3>
          <h3>00000065503</h3>
          <p>K E J U</p>
          </div> 
        </div>

        <div className="AUcolumn">
        <div className="AUcard">
        <img src={JOSE} />
          <h3>Jose Andreas Lie</h3>
          <h3>00000067097</h3>
          <p>A.k.a. José (Spanish)</p>
          </div>
        </div>
    
        <div className="AUcolumn">
        <div className="AUcard">
        <img src={OWEN} />
          <h3>Owen Christian Cahyadi</h3>
          <h3>00000067055</h3>
          <p>Akuh wibu</p>
          </div>
        </div>

        </div>
    <div className="AUrow2">

        <div className="AUcolumn2">
        <div className="AUcard">
        <img src={REY} />
          <h3>Reynard</h3>
          <h3>00000067065</h3>
          <p>A.k.a. Rey</p>
          </div>
        </div>

        <div className="AUcolumn2">
        <div className="AUcard">
        <img src={KHARIS} />
          <h3>Kristoforus Kharis P. S.</h3>
          <h3>00000067127</h3>
          <p>Sorang anak yang memiliki kekuatan halu</p>
          </div>
        </div>
      </div>
     </m.div>
    </div>
  );
}

export default Aboutus;
