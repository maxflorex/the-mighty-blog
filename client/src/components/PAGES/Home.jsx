import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Header, Sidebar, Posts } from '../index';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPots = async () => {
            const res = await axios.get('/');
            console.log(res);
        };
        fetchPots();
    }, []);

    return (
        <div>
            <Header />
            <div className="container mx-auto grid grid-cols-12">
                <div className="col-span-9 p-8">
                    <Posts className="" />
                </div>
                <div className="col-span-3 p-8">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Home;
