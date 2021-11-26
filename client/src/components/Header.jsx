import React from 'react';
import imgHero from './img/63.jpg';

const Header = () => {
    return (
        <div className="grid content-center">
            <div className="container text-center mx-auto my-auto pt-8 z-10">
                <h3 className='tracking-wide text-xl pb-4 pt-12'>Your Hotspot for</h3>
                <h1 className='font-vol text-8xl font-extrabold text-yellow-600 filter drop-shadow-md'>News & Updates</h1>
            </div>
            <img src={imgHero} alt="Hero" className='-mt-12 object-cover w-full h-96 overflow-hidden'/>
        </div>
    )
}

export default Header
