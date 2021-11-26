import React from 'react';
import { FiSearch, FiLayout } from 'react-icons/fi';
import imagep1 from './img/62.jpg';
import { Link } from 'react-router-dom';
import { Login } from './index';

const TopBar = () => {
    return (
        <nav className="text-black text-lg uppercase">
            <div className="container flex justify-between content-center py-8 mx-auto my-auto items-center">
                {/* COL1 */}
                <Link  to='/' className="flex items-center content-center gap-4">
                    <FiLayout className="text-3xl" />
                    <h1 className="font-vol font-extrabold pt-1 text-xl tracking-wider">
                        The Mighty Blog
                    </h1>
                </Link>
                {/* COL2 */}
                <div className="">
                    <ul className="flex space-x-8 md:space-x-12 xl:space-x-16 font-extralight tracking-widest">
                        <Link to='/'>Home</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/settings'>Settings</Link>
                    </ul>
                </div>
                {/* IMAGE & SEARCH */}
                <div className="flex gap-4 items-center">
                    <img
                        src={imagep1}
                        alt="Profile"
                        className="rounded-full w-12 h-12"
                    />
                    <FiSearch className="w-6 h-6" />
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
