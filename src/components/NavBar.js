import React, { useState } from 'react'
import {FaBars,FaTimes,FaHome} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs"; 
import {MdOutlineHomeRepairService} from "react-icons/md";
import {FcContacts} from "react-icons/fc";
import {IoIosPaper} from "react-icons/io";
import { Link } from 'react-scroll';
import{MdWbSunny,MdNightsStay} from "react-icons/md";
const NavBar = ({darkmode,setDarkMode}) => {

    const [nav,setNav]=useState(false);
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        },
    ]
  return (
    <div className='flex justify-between relative items-center text-white w-full h-20  bg-black px-4'>
        <div>
            <h1 className='text-5xl font-sign ml-2'>Chahat</h1>
        </div>
         <ul className='hidden md:flex'>
            
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105
                        duration-200'><span><FaHome/></span><Link to='home' smooth duration={500}>home</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105
                        duration-200'><BsFillPersonFill/><Link to='about' smooth duration={500}>about</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105
                        duration-200'><IoIosPaper/><Link to='portfolio' smooth duration={500}>portfolio</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105
                        duration-200'><MdOutlineHomeRepairService/><Link to='experience' smooth duration={500}>experience</Link></li>
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105
                        duration-200'><FcContacts/><Link to='contact' smooth duration={500}>contact</Link></li>
            <li><div onClick={()=>setDarkMode(!darkmode)}>
                {
                    darkmode?
                    (<MdWbSunny className='text-2xl cursor-pointer'/>):(<MdNightsStay className='text-2xl cursor pointer'/>)
                }

                
                
            </div></li>            

            {/* {
                links.map(({id,link})=>
                    (
                        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105
                        duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>
                    ))
            } */}
          
         </ul>
         <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500
         md:hidden'>
            {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
         </div>

         {nav && (
             <ul className='flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
             {
                    links.map(({id,link})=>
                        (
                            <li key={id} className='px-4 capitalize cursor-pointer py-6 text-4xl'><Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>
                        ))
                        
                }
                <li><div onClick={()=>setDarkMode(!darkmode)}>
                {
                    darkmode?
                    (<MdWbSunny className='text-2xl cursor-pointer'/>):(<MdNightsStay className='text-2xl cursor pointer'/>)
                }

                
                
            </div></li>  
            
             </ul>

         )}

        

    </div>
  )
}

export default NavBar