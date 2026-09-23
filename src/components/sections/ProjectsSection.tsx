import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { SpotlightCard } from '../ui/SpotlightCard';

const customEase = [0.16, 1, 0.3, 1];

// A helper to generate unique abstract meshes based on index
const getMeshGradient = (index: number) => {
  const meshes = [
    'radial-gradient(at 0% 0%, hsla(28,100%,74%,1) 0px, transparent 50%), radial-gradient(at 100% 100%, hsla(355,100%,73%,1) 0px, transparent 50%)',
    'radial-gradient(at 40% 20%, hsla(28,100%,50%,0.8) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.4) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,50%,0.8) 0px, transparent 50%)',
    'radial-gradient(at 80% 100%, hsla(12,100%,50%,0.6) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(20,100%,50%,0.6) 0px, transparent 50%)',
    'radial-gradient(at 0% 100%, hsla(22,100%,60%,0.7) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(0,100%,40%,0.7) 0px, transparent 50%)'
  ];
  return meshes[index % meshes.length];
};

const ProjectsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="w-full py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <div className="overflow-hidden mb-4">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: customEase }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Selected Work
          </motion.h2>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: customEase }}
          className="text-zinc-400 max-w-2xl text-lg"
        >
          A showcase of my recent projects, blending functional development with AI integrations.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, delay: index * 0.15, ease: customEase }}
            className="h-full"
          >
            <SpotlightCard className="glass-card group flex flex-col h-full border border-white/10 hover:border-white/20">
              
              {/* Premium Abstract Mesh Image Placeholder */}
              <div 
                className="w-full h-[240px] relative overflow-hidden bg-[#050505] transition-transform duration-700 group-hover:scale-105"
              >
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700 blur-[20px] scale-110"
                  style={{ backgroundImage: getMeshGradient(index) }}
                ></div>
                
                {/* Decorative Geometric Wireframe/Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50 mix-blend-overlay"></div>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <span className="text-white/30 font-black text-4xl tracking-tighter mix-blend-overlay uppercase text-center px-4">
                     {project.title.split(' ')[0]}
                   </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-10 bg-[#111] transform-gpu">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#ff5e00] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-grow">
                  {project.description[0]}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-[#ff5e00]/10 text-[#ff5e00] border border-[#ff5e00]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
