import React from 'react';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import imgAbout from './img/61.jpg';

const Sidebar = () => {
    return (
        <div className='p-8'>
            <h1 className="grid py-8 text-lg gap-4">
                <h1 className="text-3xl font-vol py-4 text-center font-extrabold">About me</h1>
                <img src={imgAbout} alt="About" className=" rounded-md" />
                <p className="py-4">
                    I'm a simple human who likes to be informed, just like you 😄
                </p>
                <hr className="" />
                <h3 className="font-vol text-xl font-extrabold pb-1 pt-8">
                    Categories
                </h3>
                <ul className="list-disc list-inside pl-4 pb-8">
                    <li>Life</li>
                    <li>Technology</li>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Cinema</li>
                </ul>
                <hr className="pb-4" />
                <h3 className="text-xl font-extrabold font-vol">Follow us</h3>
                <div className="flex text-2xl gap-8">
                    <FiFacebook />
                    <FiTwitter />
                </div>
            </h1>
        </div>
    );
};

export default Sidebar;
