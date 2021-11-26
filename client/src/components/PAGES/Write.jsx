import React from 'react';
import { FiFolder } from 'react-icons/fi';
import './writer.css';
import { imgMusic } from'../img';

const Write = () => {
    return (
        <div>
            <img src={imgMusic} alt="" className='h-96 object-cover w-full' />
            <div className='pt-8'>
                <div className="container mx-auto text-lg">
                    <form action="" className='grid gap-8'>
                        <div>
                            <label
                                htmlFor="fileInput"
                                className="fileInput cursor-pointer text-3xl text-gray-300 hover:text-black relative"
                            >
                                <FiFolder className='text-right'/>
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                className="hidden"
                            />
                            <input
                                type="text"
                                placeholder="Title"
                                autoFocus={true}
                                className='writeInput mt-8 border-red-400'
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Tell your story"
                                type="text"
                                className='writeInput border-red-700'
                            ></textarea>
                        </div>
                        <div className="relative">
                        <button className='bg-blue-500 text-white font-vol absolute rounded-md py-4 px-8 uppercase'>Publish</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Write;
