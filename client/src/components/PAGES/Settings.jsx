import React from 'react';
import { Sidebar } from '..';
import { imgSand, imgPortrait } from '../img';
import { FiUser } from 'react-icons/fi';
import './writer.css'

const Settings = () => {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-12 gap-8 pt-16">
                <div className="col-span-9">
                    <div className="flex justify-between gap-4 items-center py-8">
                        <span className="font-vol text-6xl font-bold py4">
                            Update Your Account
                        </span>
                        <span className="text-gray-400 hover:text-red-600">
                            Delete Account
                        </span>
                    </div>
                    <form action="">
                        <div className="flex gap-8 items-center">
                            <label htmlFor="" className="text-lg tracking-wide">
                                Profile Picture
                            </label>
                            <img
                                src={imgPortrait}
                                alt="Portrait"
                                className="w-48 h-48 rounded-full object-cover my-8"
                            />
                            <label htmlFor="fileInput">
                                <FiUser className="text-3xl" />
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                            />
                        </div>
                        <div className='grid gap-2'>
                            <label htmlFor="" className='text-sm text-blue-200 '>Username</label>
                            <input type="text" placeholder="Your Name" className='writeInput' />
                            <label htmlFor="" className='text-sm text-blue-200 '>Username</label>
                            <input
                                type="email"
                                placeholder="yourname@gmail.com"
                                className='writeInput'
                            />
                            <label htmlFor="" className='text-sm text-blue-200 '>Password</label>
                            <input type="password" placeholder="Your Password" className='writeInput' />
                            <div className="relative">
                            <button className="settingsSubmit absolute bg-blue-800 text-white px-6 py-4 rounded-lg my-4">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-span-3">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Settings;
