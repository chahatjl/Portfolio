import React from 'react'
//image
import cj from "../stack/40752.jpg";
import {MdKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';
import Type from './Type';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white flex'>
        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-ceLinknter h-full px-4 mf:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <div className='flex relative max-w-[200px]'><h2 className='text-4xl sm:text-7xl font-bold text-white'><Type/></h2></div>
                
                <p className='text-gray-500 py-4 max-w-md text-5xl'>Hi I am <span className=' text-blue-800'>chahat jindal</span></p>
                <div>
                    <Link to='portfolio'
                    smooth duration={500}
                    className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
           
        </div>
        <div>
          <img src={cj}  alt='' className='mt-9 mr-7 w-[600px] h-[600px] object-top'></img>
                 
        </div>
    </div>
  )
}

export default Home