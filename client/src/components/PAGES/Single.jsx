import React from 'react';
import { Sidebar, SinglePost } from '../index';

const Single = () => {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-12 gap-12">
                <div className="col-span-9 pt-16">
                    <SinglePost />
                </div>
                <div className="col-span-3">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Single;
