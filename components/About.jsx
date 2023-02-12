import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p  className="text-xl tracking-widest text-[#5651e5]">ABOUT ME</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I A Front-end developer I did my graduation in Mechanical
            engineering but I love to develop web applications so after a job
            for one year i change my career into Web development Learning &
            Created many projects. You can see in my projects by clicking link below to the project section.
          </p>
          <Link href='/'><p className="py-2 underline inline-block">Check out my projects</p></Link>
        </div>
        <div className="w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-400">
            Image from projects screen shots etc.. or downloaded
        </div>
      </div>
    </div>
  );
};

export default About;
