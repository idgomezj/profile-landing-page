'use client';

import { projectsData } from '../data';
import { ExperienceInfo } from '@/interfaces';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ExperienceInfo | null>(null);

  const isSingleCard = projectsData.length === 1;

  return (
    <section className="w-full px-6 py-12 space-y-10 bg-white dark:bg-gray-900" id="projects">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold text-cyan-700 dark:text-cyan-400">Other Projects & Contributions</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          These are additional works I&apos;ve done in a short period of time. Each helped me gain hands-on experience, explore new technologies, and grow professionally across domains like AI, infrastructure, backend systems, and DevOps.
        </p>
      </div>

      {/* Project Cards */}
      <div
        className={`max-w-6xl mx-auto ${
          isSingleCard ? 'flex justify-center' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'
        }`}
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-cyan-800 text-white rounded-xl overflow-hidden shadow-md border border-cyan-700 hover:shadow-xl transition-shadow max-w-xl"
          >
            {/* Image on Top */}
            {project.content.image && (
              <div className="relative w-full h-52 overflow-hidden">
                {project.content.image}
              </div>
            )}

            {/* Header */}
            <div className="flex items-center gap-4 p-4">
              {project.icon}
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <a href={project.link} className="text-sm text-cyan-200 hover:underline">
                  {project.company}
                </a>
                <p className="text-xs text-gray-300">{project.date}</p>
              </div>
            </div>

            {/* Description Preview */}
            <div className="p-4 text-sm text-gray-100 line-clamp-6">
              <ReactMarkdown>{project.content.description}</ReactMarkdown>
            </div>

            {/* Read More */}
            <div className="p-4 pt-0">
              <button
                className="text-cyan-300 hover:underline text-sm font-medium"
                onClick={() => setSelectedProject(project)}
              >
                View Full Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-white text-black dark:bg-gray-900 dark:text-white rounded-xl max-w-4xl w-full p-6 overflow-y-auto max-h-[90vh] space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">{selectedProject.title} – {selectedProject.company}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-red-500 hover:underline">Close</button>
            </div>
            <p className="text-sm text-gray-500">{selectedProject.date}</p>
            <div className="w-full">{selectedProject.content.image}</div>
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{selectedProject.content.description}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
