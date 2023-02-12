import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg from '../public/projects/property.jpg'
import cryptoImg from '../public/projects/crypto.jpg'
import netflixImg from '../public/projects/netflix.jpg'
import twitchImg from '../public/projects/twitch.jpg'
import ProjectItem from '../components/ProjectItem'


const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto p-2 py-16 ">
        <p className="text-xl tracking-widest text-[#5651e5]">PROJECTS</p>
        <h2 className="py-4">What I Built</h2>
        <div className="grid md:grid-cols-2 gap-8">

        <ProjectItem 
          title='Property Finder'
          backgroundImg={propertyImg}
          projectUrl='./'
          /> 
          <ProjectItem 
          title='Crypto App'
          backgroundImg={cryptoImg}
          projectUrl='./'
          /> 
          <ProjectItem 
          title='Netflix App'
          backgroundImg={netflixImg}
          projectUrl='./'
          /> 
          <ProjectItem 
          title='Twitch App'
          backgroundImg={twitchImg}
          projectUrl='./'
          /> 
        </div>
      </div>
    </div>
  );
};

export default Projects;
