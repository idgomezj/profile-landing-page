import Image from "next/image";

export default function Main(){
    return (
      <div className="flex flex-col items-center justify-center h-screen ">
        <Image 
            src="/images/main.png" 
            alt="Profile" 
            fill
            className="absolute w-full h-full object-cover" 
        />
        <div className="absolute top-0 left-0 w-full h-full ">
            <div className="flex flex-col items-center justify-between h-full">
              <div className="flex flex-row w-full pr-8 pl-16 pt-4 items-center justify-between ">
                <p className="text-gray-500 text-md">IDGOMEZJ</p>
                <Image 
                    src="/logo/logo-black.png" 
                    alt="Logo" 
                    width={80}
                    height={80}
                    className="w-20 h-20" 
                />
              </div>
              <div className="flex flex-col w-full  pl-16 mb-12 items-start justify-start font-roboto ">
                <div className="flex flex-col items-start justify-start ">
                  <h1 className="text-gray-400 text-7xl font-bold w-[60%]">IVAN DARIO GOMEZ JIMENEZ</h1>
                  <p className="text-black text-7xl font-bold w-[60%]"> LEARNING PASSIONATE</p>
                  <button className="
                    bg-black text-white px-8 py-2 mt-4 font-bold border-2 border-black
                    hover:bg-white hover:text-black
                  ">
                    START
                  </button>
                </div>
                <div className="flex flex-row w-[65%] items-start justify-between mt-14 ">
                  {/* <p className="text-gray-500 text-md">Software Engineer</p> */}
                  <a href="https://github.com/idgomezj/profile-landing-page" target="_blank" rel="noopener noreferrer">
                    <p className="text-gray-500 text-md cursor-pointer hover:text-cyan-500 hover:scale-[130%] transition-all duration-300">Get the code for this profile page</p>
                  </a>
                  <p className="text-gray-500 text-md w-[25%] text-center">Science and technology are the engines of change—learn boldly, apply daily, and shape the future.</p>
                </div>
              </div>
              
                
            </div>
        </div>
      </div>
    );
  };
