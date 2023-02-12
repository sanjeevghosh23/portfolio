import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest text-[#5651e5]">SKILLS</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-col-4 gap-8">


          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/html.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
                </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/css.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/javascript.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVA SCRIPT</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/react.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACTJS</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/tailwind.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/nextjs.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/firebase.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>FIRE BASE</h3>
                </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-400">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/skills/github.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
