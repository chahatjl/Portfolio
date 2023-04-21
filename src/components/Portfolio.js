import React from 'react'
import project1 from "../stack/project1.PNG"
import Project2 from "../stack/Project2.PNG"
import Project3 from "../stack/Project3.PNG"
import Project4 from "../stack/Project4.PNG"
import Project5 from "../stack/Project5.PNG"
const Portfolio = () => {

    return (
        <div name="portfolio" className='dark:bg-gradient-to-b from-black to-gray-800 w-full text-gray-500 font-bold text-xl md:h-screen'>

            <div className='max-w-screen-lg p-4 max-auto flex flex-col
justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check Out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ml-20'>
                    

                        <div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                            <img src={project1} alt='Tour_Guide' />
                            <div className='flex items-center justify-center'>
                            <a href='https://tour-guide-ten.vercel.app/' target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
                                <a href='https://github.com/chahatjl/Tour-Guide' target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>
                        <div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                            <img src={Project2} alt='Discord_Clone' />
                            <div className='flex items-center justify-center'>
                            <a href='https://discordclonechahat.netlify.app/' target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
                                <a href='https://github.com/chahatjl/DiscordClone' target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>
                        <div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                            <img src={Project3} alt='Weather_App' />
                            <div className='flex items-center justify-center'>
                            <a href='https://chahatweatherapp.netlify.app'target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
                                <a href='https://github.com/chahatjl/WeatherApp'target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>
                        <div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                            <img src={Project4} alt='StudyNotion' />
                            <div className='flex items-center justify-center'>
                            <a href='https://studynotion.netlify.app/'target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
                                <a href='https://github.com/chahatjl/router-project-starter'target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>
                        <div className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                            <img src={Project5} alt='Random-Gif-Generator' />
                            <div className='flex items-center justify-center'>
                                <a href='https://random-gif-generator-eight.vercel.app/'target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button></a>
                                <a href='https://github.com/chahatjl/RandomGifGenerator'target='_blank' rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                            </div>
                        </div>

                    

                </div>
            </div>
        </div>
    )
}

export default Portfolio