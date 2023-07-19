import React from 'react'
import avatar from "../stack/avatar.svg";

const About = () => {
  return (
    <div name="about" className='w-full h-screen dark:bg-gradient-to-b from-gray-800 to-black text-gray-500 font-bold flex flex-col md:flex-row gap-y-6 '>
      <div className="md:w-1/2 mt-[12rem] flex items-center justify-center">
        <img
          src={avatar}
          alt=""
          className="mt-12 md:mt-0 max-w-xs md:max-w-full mx-auto relative"
        />
      </div>
      
        <div className=' md:w-1/2 max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8 md:mt-28'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>LET ME <span className='text-blue-800 uppercase'>INTRODUCE MYSELF</span></p>
            </div>
          
          <p className='text-xl mt-12'>
        Hi , I am Chahat Jindal Keen Learner having Close to 3 years of experience in IT sector

        Started of my career as Test Engineer and then changed my profile to Java Developer
         </p>
        <br/>
        <p className='text-xl'>
        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
        <br/>
        <p className='text-xl'>I am still Learning classics like <span className='text-blue-800 uppercase'>C++, Java and React.</span></p>
        <br/>
        <p className='text-xl'>My field of Interest's are building new Web Technologies and Products and also in areas related to <span className='text-blue-800 uppercase'>making API's using Springboot Framework.</span>
</p>
<br/>
<p className='text-xl'>
Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like<span className='text-blue-800 uppercase'> React.js</span>
</p>




        
        </div>
       
    </div>
  )
}

export default About