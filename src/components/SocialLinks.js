import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram,FaTwitter } from 'react-icons/fa';
import{HiOutlineMail} from "react-icons/hi";
import{BsFillPersonLinesFill} from "react-icons/bs";


const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/chahat-jindal/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/chahatjl',
            style:'rounded-tr-md'
        },
        {
            id:3,
            child:(
                <>
                Instagram <FaInstagram size={30}/>
                </>
            ),
            href:'https://www.instagram.com/chahatjindal031/',
            style:'rounded-tr-md'
        },
        {
            id:4,
            child:(
                <>
                Twitter <FaTwitter size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/chahat-jindal/',
            style:'rounded-tr-md'
        },
        {
            id:5,
            child:(
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:chahatjindal031@gmail.com',
            
        },
        {
            id:6,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'https://drive.google.com/file/d/1d_OWETiiLs__bcKzepM1ZkcX9GUrMxVC/view?usp=sharing',
            style:'rounded-br-md',
            download:true,
            
        },
    ]
  return (
    <div className=' hidden  lg:flex flex-col top-[35%] left-0 fixed'>
       <ul>
        {
            links.map(({id,child,href,download,style})=>(
                <li key={id} className={`flex justify-between items-center w-40  h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] bg-gray-500 ${style}`}>
                <a href={href} className='flex justify-between items-center w-full text-white'
                download={download}
                target='_blank'
                rel="noreferrer">
                    {child}
                </a>
                </li>

            ))
        }
       
       </ul>

    </div>
  )
}

export default SocialLinks