import React from 'react';
import { imgFlamenco } from './img';
import { FiEdit2, FiTrash2  } from "react-icons/fi";

const SinglePost = () => {
    return (
        <div>
            <div className="container mx-auto py-8">
                <img src={imgFlamenco} alt="Flamenco" className='rounded-md' />
            </div>
            <div className='grid grid-cols-9'>
                <div className="text-xs text-gray-400 col-span-2 mx-2">
                    <h1>Credit: Unsplash</h1>
                </div>
                <div className="font-vol font-bold text-6xl text-center capitalize col-span-5 pb-4">
                    <h1>This is the Title</h1>
                </div>
                <div className="text-xl col-span-2">
                    <div className='flex gap-4 text-right justify-end mx-2 text-gray-400 cursor-pointer'>
                        <FiEdit2 className='hover:text-black' />
                        <FiTrash2 className='hover:text-black' />
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex justify-between text-gray-400 pt-2 text-xs">
                <div className=''>
                    <h2>Author: Max Flores</h2>
                </div>
                <div className=''>
                    <h2>Date: 21/11/21</h2>
                </div>
            </div>
            <div className='py-8'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus accusantium laboriosam! Iusto illum doloribus numquam nulla, corporis sequi eum fuga dolor accusamus dicta minus velit esse consequatur voluptatibus tempora nemo officiis repudiandae. Fugit corporis atque consequuntur reprehenderit error amet optio laudantium rerum libero ipsum, facere non, numquam modi vitae sit sapiente dolorem maxime dolores dignissimos repellendus corrupti sed consectetur.</p>
            </div>
        </div>
    )
}

export default SinglePost
