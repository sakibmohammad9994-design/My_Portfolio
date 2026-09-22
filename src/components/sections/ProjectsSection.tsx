import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Selected Work</h2>
        <p className="text-zinc-400 max-w-2xl text-lg">
          A showcase of my recent projects, blending functional development with AI integrations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card group flex flex-col h-full"
          >
            {/* Project Image Placeholder */}
            <div className="w-full h-48 bg-zinc-900 border-b border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50 group-hover:opacity-30 transition-opacity"></div>
              {/* Decorative Mockup Element */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-sm tracking-widest opacity-30">
                {project.id.toUpperCase()}_PREVIEW
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description[0]}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-zinc-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
