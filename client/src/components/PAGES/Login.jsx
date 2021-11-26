import React from 'react';
import './writer.css';
import imgPattern from '../img/login-pattern.png';

const Login = () => {
    return (
        <div className="h-screen w-full "
        style={{
          backgroundSize: "auto",
          backgroundAttachment: "fixed",
          backgroundImage: `url(${imgPattern})`,
        }}>
            <div className="container mx-auto grid gap-4 py-16 justify-items-center w-full lg:w-1/2">
                <label htmlFor="" className=' justify-self-start'>Email</label>
                <input type="text" className='writeInput' placeholder="Enter your email..." />
                <label htmlFor="" className=' justify-self-start'>Password</label>
                <input type="password" className='writeInput' placeholder="Enter your password..." />
                <div className="relative">
                <button className='absolute bg-indigo-600 text-white rounded-lg p-4 my-4'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
