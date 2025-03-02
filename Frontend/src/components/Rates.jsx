import React from 'react';
import "./rate.css";
import { Normal } from './Normal';
import { Large } from './Large';

const Rates = () => {
  return (
    <div className="rate">
      <div className="note">
        <h3>Notes</h3>
        <p>The prices may vary with fluctuation in the scrap market.</p>
        <p>Prices may be different for bulk pickups. Call us at <span>+91-8926000694</span> to get a quote for bulk pickup.</p>
      </div>
      <div className="rate-table">
        <h2>Normal Recyclables</h2>
        <div className="cards">
        {Normal.map((items, index) => {
            return (
                <div className="card">
                <img src={`${items.url}`}  alt="Aluminium" />
                <h3>{items.name}</h3>
                <p>{items.price}</p>
              </div>
            )

        })}
         
         
        </div>
      </div>
      <div className="rate-table">
        <h2>Large Recyclables</h2>
        <div className="cards">
        {Large.map((items, index) => {
            return (
                <div className="card">
                <img src={`${items.url}`}  alt="Aluminium" />
                <h3>{items.name}</h3>
                <p>{items.price}</p>
              </div>
            )

        })}
         
         
        </div>
      </div>
    </div>
  );
};

export default Rates;