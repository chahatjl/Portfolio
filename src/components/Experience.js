import React from 'react'
import HTML from "../stack/HTML.png";
import react from "../stack/react.png";
import MongoDB from "../stack/MongoDB.svg";
import Github from "../stack/Github.svg";
import tailwind from "../stack/tailwind.png";
import CSS from "../stack/CSS.png";
import Vercel from "../stack/Vercel.svg";
import Javascript from "../stack/Javascript.svg";


//importing technology images

const Experience = () => {
    const techs=[
        {
            id:1,
            src:HTML,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:CSS,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:Vercel,
            title:'Vercel',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:react,
            title:'REACT',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:MongoDB,
            title:'MongoDB',
            style:'shadow-green-500'
        },
        {
            id:6,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-500'
        },
        {
            id:7,
            src:Github,
            title:'GITHUB',
            style:'shadow-gray-500'
        },
        {
            id:8,
            src:Javascript,
            title:'Javascript',
            style:'shadow-gray-500'
        },
    ]

  return (
    <div name="experience" className='dark:bg-gradient-to-b from-gray-800 to-black w-full h-screen '>
        <div className='max-w-screen-lg mx-auto flex flex-col
        justify-center w-full h-full text-gray-500 font-bold text-xl'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline md:mt-32'>Experience</p>
                <p className='py-6'>These are Technologies i have worked on</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id,title,style,src})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                     </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience