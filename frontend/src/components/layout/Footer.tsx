import Image from "next/image";
import Link from "next/link";
import { FacebookCircleIcon, InstagramCircleIcon, LinkedInCircleIcon, GithubCircleIcon } from "@/components/ui/icons";


const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-around w-full h-36 py-4 bg-black ">
      {/* Personal Info */}
      <div className="flex flex-col items-center justify-center w-1/3 h-full ">
        <Image src="/logo/logo-white.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
        <p className="text-white text-md">IDGOMEZJ</p>
        <div className="flex flex-row items-center justify-center w-full h-full mt-4 gap-2">
          <a href="https://www.linkedin.com/in/idgomezj/" target="_blank" rel="noopener noreferrer">
            <LinkedInCircleIcon className="w-8 h-8 text-white hover:text-cyan-400 cursor-pointer" />
          </a>
          <a href="https://github.com/idgomezj" target="_blank" rel="noopener noreferrer">
            <GithubCircleIcon className="w-8 h-8 text-white hover:text-cyan-400 cursor-pointer" />
          </a>
          <a href="https://www.facebook.com/idgomezj" target="_blank" rel="noopener noreferrer">
            <FacebookCircleIcon className="w-8 h-8 text-white hover:text-cyan-400 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/idgomezj" target="_blank" rel="noopener noreferrer">
            <InstagramCircleIcon className="w-8 h-8 text-white hover:text-cyan-400 cursor-pointer" />
          </a>
        </div>
      </div>
       {/* Menu */}
      <div className="flex flex-col items-center justify-center w-1/3 h-full ">
        <p className="text-white text-xl font-bold">Menu</p>
        <ul className="flex flex-col items-center justify-center w-full h-full gap-0">
          <li className="text-white text-md">
            <Link href="/" className="hover:text-cyan-400 cursor-pointer">Education</Link>
          </li>
          <li className="text-white text-md">
            <Link href="/research" className="hover:text-cyan-400 cursor-pointer">Research</Link>
          </li>
          <li className="text-white text-md">
            <Link href="/publications" className="hover:text-cyan-400 cursor-pointer">Experience</Link>
          </li>
        </ul>
      </div>
      {/* Text*/}
      <div className="flex flex-col items-center justify-center w-1/3 h-full">
        <p className="text-white text-xl font-bold text-gray-200 mb-3">Software Engineer</p>
        <p className="text-white text-sm w-[60%] text-center">Science and technology are the engines of change—learn boldly, apply daily, and shape the future.</p>
      </div>
    </footer>
  );
};

export default Footer;