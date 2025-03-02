import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import "./marque.css";

function Marque() {
  return (
    <div  className='next'>
      <div data-scroll data-scroll-section  data-scroll-speed=".7" className="slide">
        <div className="do">
          {["TOPTRACER RANGE", "GOLF LESSONS", "ADVENTURE GOLF", "CAFÉ", "EVENTS"].map((item, index) => (
            <span key={index}>
              <h1>{item}</h1>
            </span>
          ))}
        </div>
        <div className="do">
          {["TOPTRACER RANGE", "GOLF LESSONS", "ADVENTURE GOLF", "CAFÉ", "EVENTS"].map((item, index) => (
            <span key={index}>
              <h1>{item}</h1>
            </span>
          ))}
        </div>
        <div className="do">
          {["TOPTRACER RANGE", "GOLF LESSONS", "ADVENTURE GOLF", "CAFÉ", "EVENTS"].map((item, index) => (
            <span key={index}>
              <h1>{item}</h1>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marque;
