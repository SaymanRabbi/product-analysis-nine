import React from 'react';
import Baner from '../../Image/slider-2.webp'
import './Hero.css'

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${Baner})`, backgroundSize: "cover", backgroundPosition: "center center", height: "650px", width: "auto" }}>
            
            <div className='hero-container container pt-5'>
                <div>
                    <h1 className='text-white display-4 fw-bold text-uppercase'>Feel the Music</h1>
                    <h1 className='text-white display-4 fw-bold text-uppercase'>in your bones</h1>
                    <p className='text-white fs-1 mb-0'>Music loud</p>
                    <p className='text-white fs-1 mt-0'>Fulfill your music needs</p>
                    <button className='py-2      custom-button'>ORER NOW</button>
                </div>
                <div>

                </div>
            </div>
            
        </div>
    );
};

export default Hero;