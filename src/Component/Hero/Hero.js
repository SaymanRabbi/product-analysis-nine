import React from 'react';
import Baner from '../../Image/slider-2.webp'
import './Hero.css'

const Hero = () => {
    return (
        <div>
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
             <h2 className='text-center mt-3 fs-1' style={{color:"#130E66"}}>Review Section</h2>

            </div>
    );
};

export default Hero;