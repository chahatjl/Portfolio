import React from 'react'
//import images from asset folder
//links to code will also to be provided
//using onclick handler
const Portfolio = () => {

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

            <div className='max-w-screen-lg p-4 max-auto flex flex-col
justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check Out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ml-20'>
                    

                        <div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                            <img src='' alt='' />
                            <div className='flex items-center justify-center'>
                            <a href=''><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
                                <a href=''><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>
                        <div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                            <img src='' alt='' />
                            <div className='flex items-center justify-center'>
                            <a href=''><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
                                <a href=''><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>
                        <div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                            <img src='' alt='' />
                            <div className='flex items-center justify-center'>
                            <a href=''><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
                                <a href=''><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>
                        <div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                            <img src='' alt='' />
                            <div className='flex items-center justify-center'>
                            <a href=''><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
                                <a href=''><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>
                        <div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                            <img src='' alt='' />
                            <div className='flex items-center justify-center'>
                                <a href=''><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
                                <a href=''><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>

                    

                </div>
            </div>
        </div>
    )
}

export default Portfolio