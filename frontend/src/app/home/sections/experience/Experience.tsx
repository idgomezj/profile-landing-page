"use client";
import React, { memo, useState } from "react";
import { experienceData } from './data';
import {ExperienceInfo} from '@/interfaces'
import JobDescription from './pages/JobDescription';
import Projects from './pages/Projects';

const Experience = memo(() => {

    const [experienceSelected, SetExperienceSelected ] = useState<ExperienceInfo>(experienceData[3]);


  return (
    <>
        <section className="flex flex-col lg:flex-row items-start justify-between p-8 lg:p-16 gap-12 bg-white">
        {/* Left Side */}
            <div className="lg:w-1/3">
                <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Experience</p>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    I Build <span className="text-cyan-500">Scalable</span> & Intelligent Systems
                </h2>
                <p className="text-gray-500">
                    With years of hands-on experience in software engineering, AI solutions, and cloud infrastructure, I&apos;ve helped startups and enterprises transform their operations through smart, secure, and scalable technologies. From backend architecture to AI-powered platforms, I bring ideas to life with precision and impact.
                </p>
            </div>


            {/* Right Side */}
            <div className="flex flex-col sm:flex-row gap-6 lg:w-2/3">
                {experienceData.map((service, idx) => (
                <div
                    key={idx}
                    onClick={()=>(SetExperienceSelected(service))}
                    className={`flex flex-col items-center text-center shadow-md  px-6 pt-4 rounded-md w-full transition-all duration-300 cursor-pointer
                    ${experienceSelected === service 
                        ? 'bg-gradient-to-br from-cyan-50 to-blue-50  shadow-lg scale-105 ring-2 ring-cyan-200' 
                        : 'bg-white border-cyan-500 hover:shadow-xl hover:scale-110 border-t-[6px] border-cyan-600'
                    }`}
                >
                    <div className={`flex justify-center items-center mb-0 h-24 transition-transform duration-300
                    ${experienceSelected === service ? 'scale-110' : ''}`}>
                        {service.icon}
                    </div>
                    <div>
                        <h3 className={`text-lg font-semibold transition-colors duration-300
                        ${experienceSelected === service ? 'text-cyan-700' : 'text-gray-700'}`}>
                            {service.title}
                        </h3>
                        <p className={`text-sm transition-colors duration-300
                        ${experienceSelected === service ? 'text-cyan-600' : 'text-gray-500'}`}>
                            {service.company}
                        </p>
                        <p className={`text-sm transition-colors duration-300
                        ${experienceSelected === service ? 'text-cyan-600' : 'text-gray-500'}`}>
                            {service.date}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </section>
        <JobDescription experienceSelected={experienceSelected} />
        <Projects />
    </>
  );
});

Experience.displayName = "Experience";
export default Experience;
