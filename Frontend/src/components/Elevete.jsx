import React from 'react'
import "./elevete.css";
import { useNavigate } from 'react-router-dom';

const Elevete = () => {
  const navigate = useNavigate();
  return (
    <div className='eleve'>
      <div className='about'>
        <h1>Elevate Your Scrap  </h1>
        <p className='second'>Transform Your Scrap Collecting Experience: Harness the Power of AI, Gamification, and Unparalleled Insights to Unlock the Full Potential of Your Scrap Hunting Adventures</p>
        <div className='journey12'>
        <button onClick={() => navigate("/Registration")}  style={{backgroundColor:"#FB8B51",color:"#6d6965",}}>Join Now
        </button>
        </div>
      </div>
      <div className='about1'>
        <img src='https://cdn-imgs.dora.run/design/Ei4hqGvI0LBHeE0tGM59RY.webp/w/4096/h/4096/format/webp?' alt='Something went wrong'/>
      </div>
        <img src='https://cdn-imgs.dora.run/design/HWrSYOKrbAzGSkC1A1zduA.webp/w/4096/h/4096/format/webp?' alt='Something went wrong'/>
    </div>
  )
}

export default Elevete