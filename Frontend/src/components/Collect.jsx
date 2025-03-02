import React from 'react';
import { Element } from 'react-scroll'; // Import Element
import Navbar from './Navbar';
import Hero from './Hero';
import Marque from './Marque';
import About from './About';
import Mastering from './Mastering';
import Resolution from './Resolution';
import Journey from './Journey';
import Footer from './Footer';
import Elevete from './Elevete';

function Collect() {
    return (
        <div>

            
            <Navbar />
            <Hero />
            <Marque />

            <Element name="about">
                <About />
            </Element>

            <Elevete />

            <Element name="service">
                <Mastering />
            </Element>

            <Resolution />
            <Journey />

            <Element name="contact">
                <Footer />
            </Element>
        </div>
    );
}

export default Collect;
