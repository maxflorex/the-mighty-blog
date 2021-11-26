import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Header, Sidebar } from '../index';
import Posts from '../Posts';
import axios from 'axios';

const Home = () => {

const [posts, setPosts] = useState([]);

useEffect(() => {
const fetchPots= async () => {
    axios.get("/")
}
},[])

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
