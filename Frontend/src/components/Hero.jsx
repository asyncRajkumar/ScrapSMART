import React, { useEffect } from 'react';
import { gsap } from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./hero.css";

// import { useNavigate } from 'react-router-dom';

const Hero = () => {
    // const navigate = useNavigate();
    useEffect(() => {
        // Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            multiplier: -0.8 // Reduced speed for smooth effect
        });

        // GSAP Animation for Slower Effect
        gsap.to(['.small-img img'], {
            x: "0%",
            width: "100%",
            delay: 1,
            opacity: 1,
            autoAlpha: 1,
            duration: 3, // Increased duration to slow animation
            ease: "power2.out"
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    const hanleSubmite = () => {
        // navigate("/register");
    }

    return (
        <div data-scroll-container>
            <div data-scroll data-scroll-section data-scroll-speed="-0.5" className="hero">
                <div className="tittle">
                    {["WE CREATE", "EYE OPENING", "REVOLUTION"].map((items, index) => (
                        <div key={index}>
                            {index === 1 ? (
                                <div className="small-box dist">
                                    <div className="small-img">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FRCLQlw1DyLDBuu_GB7GEIn1uKtSQbkv4A&s" alt="img" />
                                    </div>
                                    <h1 className="diff">{items}</h1>
                                </div>
                            ) : (
                                <h1 className="dist">{items}</h1>
                            )}
                        </div>
                    ))}
                </div>
               
                
                   <button onClick={hanleSubmite}>Get Started  <span><ArrowForwardIosIcon /></span></button>
               
            </div>
        </div>
    );


};

export default Hero;
