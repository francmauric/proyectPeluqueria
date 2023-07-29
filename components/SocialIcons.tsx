import React from "react";

import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";



const SocialIcons = () => {

 

    return (
        <div className="text-orange-400">
           
            
                <div
                className="p-2 cursor-pointer inline-flex items-center
                    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-white hover:bg-orange-500 duration-300"
                >
                  <FaFacebook size={20} />
                </div>
                <div
                className="p-2 cursor-pointer inline-flex items-center
                    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-white hover:bg-orange-500 duration-300"
                >
                  <FaTwitter size={20} />   
                </div>
                <div
                className="p-2 cursor-pointer inline-flex items-center
                    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-white hover:bg-orange-500 duration-300"
                >
                  <FaGithub size={20} />   
                </div> 
                <div
                className="p-2 cursor-pointer inline-flex items-center
                    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-white hover:bg-orange-500 duration-300"
                >
                  <FaLinkedin size={20} />   
                </div> 
                <div
                className="p-2 cursor-pointer inline-flex items-center
                    rounded-full bg-gray-700 mx-1.5 text-xl hover:text-white hover:bg-orange-500 duration-300"
                >
                   <FaInstagram size={20} />  
                </div>
        </div>
    )
}

export default SocialIcons;

