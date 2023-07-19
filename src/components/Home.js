import React from 'react';
import cj from "../stack/CJ.png";
import {MdKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';
import Type from './Type';
import "./Home.css";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full dark:bg-gradient-to-b from-black via-black to-gray-800 text-gray-500 font-bold text-xl flex sm:md-[700px]'>
      <div className='max-w-screen-lg mx-auto flex flex-col  sm:flex-row items-center justify-center h-full px-4'>
        <div className='flex flex-col justify-center mr-24 mb-20 sm:w-1/2'>
          <div className='flex relative max-w-[200px]'>
            <h2 className='text-4xl sm:text-7xl text-gray-500 font-bold mt-[400px]'><Type/></h2>
          </div>
          <p className='text-gray-500 py-4 max-w-md sm:text-5xl'>Hi I am <span className=' text-blue-800 uppercase'>chahat jindal</span></p>
          <div>
            <Link to='portfolio'
              smooth duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div className="sm:w-1/2">
          <img src={cj} alt='' className='mt-6 sm:mt-0 mr-7 w-[400px] h-[400px] object-fill rounded-xl image sm:flex-col'></img>
        </div>
      </div>
    </div>
  )
}

export default Home;
