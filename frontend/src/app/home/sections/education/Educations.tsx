import Image from 'next/image';

import Phd from './pages/Phd';
import AdditionalCertifications from './pages/AdditionalCertifications';
import { educations } from './data';

const Educations = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      {/* Title */}
      <div className="flex flex-row px-4 justify-between items-end gap-6 mb-12">
        <p className="text-4xl font-bold w-[20%]">BUILDING MY FUTURE, ONE DISCIPLINE AT A TIME</p>
        <p className="text-lg text-gray-500 w-[25%]">
          From physics to finance, every step in my education has been driven by a passion for structure, logic, and innovation.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-4 grid-rows-2 gap-6">
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 row-span-2">
          {/* Top-left label */}
          <div className="bg-white text-gray-800 p-6 rounded-md flex items-center justify-center h-full">
            <p className="text-xl font-semibold text-center">PROFESSIONAL EDUCATION</p>
          </div>

          {/* Main education cards */}
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#dcdedf] via-[#475d64] to-[#2c5364] text-white p-6 rounded-md shadow-md h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo/unal.svg"
                  alt="Universidad Nacional de Colombia"
                  width={70}
                  height={70}
                />
                <h3 className="font-semibold text-lg">Universidad Nacional de Colombia</h3>
              </div>
              <p className="text-sm text-gray-200">{edu.title}</p>
              <p className="text-base font-medium">{edu.field}</p>
              <p className="text-sm text-gray-300">{edu.years}</p>
              {edu.grade && (
                <p className="text-sm text-gray-300 mt-2">{edu.grade}</p>
              )}
            </div>
          ))}
        </div>

        {/* Personal Note */}
        <div className="row-span-2 bg-gradient-to-br from-cyan-500 via-cyan-700 to-cyan-900 text-white px-6 py-4 rounded-md shadow-md flex items-center justify-center">
          <p className="text-lg leading-relaxed font-medium">
            For me, studying has always been a way to bring structure to my life.
            I’ve always loved numbers, technology, and physics — they’ve helped
            me make sense of the world. Education has given me the foundation
            to follow my passion and build meaningful things with purpose.
          </p>
        </div>
      </div>

      {/* Phd */}
      <Phd />

      {/* Other Education Section */}
      <AdditionalCertifications />
        
    </section>
  );
};

export default Educations;
