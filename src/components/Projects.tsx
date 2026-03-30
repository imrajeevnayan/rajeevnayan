import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import Magnetic from './common/Magnetic';

interface Project {
  title: string;
  description: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  image: string;
  tech: string[];
  links: {
    github: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    title: 'Digital Library - LibStack',
    description: 'Modern Digital Library application featuring book management, loan tracking, and OAuth2 authentication with GitHub and Google.',
    challenge: 'Implementing secure OAuth2 authentication flow and managing complex database relationships for book loans and user roles.',
    solution: 'Built a robust backend with Spring Boot Security and OAuth2. Used PostgreSQL for relational data and Docker for consistent deployment.',
    outcome: 'A scalable, secure library management system with role-based access control and a responsive React frontend.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'OAuth2'],
    links: {
      github: 'https://github.com/imrajeevnayan/digital-library-app',
    },
  },
  {
    title: 'Hospital Management System',
    description: 'Comprehensive system featuring patient onboarding, doctor scheduling, and role-based access control.',
    challenge: 'Managing concurrent appointments and ensuring data privacy for sensitive patient records was a critical hurdle. The legacy system suffered from race conditions during booking.',
    solution: 'Implemented pessimistic locking in the database for bookings and integrated Spring Security with JWT for robust role-based access control. Used Hibernate Envers for auditing changes.',
    outcome: 'Optimized database query execution time by 40% and eliminated booking conflicts entirely, supporting 50+ concurrent users seamlessly.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'JWT'],
    links: {
      github: 'https://github.com/imrajeevnayan/hospital-management-springboot',
    },
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Real-time messaging platform with chat rooms, instant messaging, and typing indicators.',
    challenge: 'Achieving low-latency message delivery and maintaining connection stability for hundreds of users simultaneously.',
    solution: 'Leveraged WebSocket with STOMP protocol for bi-directional communication. Implemented message buffering and reconnection logic in React to handle network instability.',
    outcome: 'Successfully handled 500+ concurrent users with <100ms latency. The reliable persistence layer with MongoDB ensured no message loss.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80',
    tech: ['Spring Boot', 'WebSocket', 'STOMP', 'MongoDB', 'React.js'],
    links: {
      github: 'https://github.com/imrajeevnayan/real-time-chat',
    },
  },
  {
    title: 'E-Commerce Food Ordering',
    description: 'Full-stack application with menu browsing, cart management, and payment integration. Features dynamic pricing engine and Redux state management.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'Redux'],
    links: {
      github: 'https://github.com/imrajeevnayan',
    },
  },
  {
    title: 'Fitness Tracker',
    description: 'Platform with workout logging, calorie tracking, and progress monitoring. Implemented analytics APIs for dashboard insights and secure JWT authentication.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    tech: ['Spring Boot', 'React.js', 'PostgreSQL', 'JWT'],
    links: {
      github: 'https://github.com/imrajeevnayan',
    },
  },
  {
    title: 'Ziaka Food Delivery',
    description: 'Modern food delivery platform bringing authentic tastes to your doorstep. Seamless ordering experience with real-time updates and secure authentication.',
    image: 'https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=1024x1024&w=is&k=20&c=QPHFTWoscwMSXOEGKoAKOjlCnMGszppFBrqQHdy4EGc=',
    tech: ['React.js', 'Firebase', 'CSS'],
    links: {
      github: 'https://github.com/imrajeevnayan/ziaka',
      live: 'https://imrajeevnayan.github.io/ziaka/',
    },
  },
  {
    title: 'Hotel Booking App',
    description: 'Comprehensive booking system with room reservation, user management, and admin dashboard. Built with Spring Boot backend and React frontend.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React.js'],
    links: {
      github: 'https://github.com/imrajeevnayan/hotel-booking',
    },
  },
  {
    title: 'FoodHub',
    description: 'Full-stack food delivery platform with user authentication and secure payment gateway integration using MERN stack.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: {
      github: 'https://github.com/imrajeevnayan/',
      live: 'https://reliable-bonbon-78a9c8.netlify.app/',
    },
  },
  {
    title: 'Weather Forecast',
    description: 'Real-time weather application with location search and 5-day forecast. Features auto-suggestions and responsive design.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    tech: ['React.js', 'Weather API', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/imrajeevnayan',
      live: 'https://imrajeevnayan.github.io/weather-forecast-application/',
    },
  },
  {
    title: 'Personal Portfolio',
    description: 'Responsive portfolio website built with React.js and Tailwind CSS. Features smooth animations, dark mode support, and interactive elements.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    links: {
      github: 'https://github.com/imrajeevnayan',
      live: 'https://imrajeevnayan01.netlify.app/',
    },
  },
  {
    title: 'Rento',
    description: 'Modern rental platform connecting users with rental services. Features user-friendly navigation and secure payment options.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
    tech: ['React.js', 'Firebase', 'CSS'],
    links: {
      github: 'https://github.com/imrajeevnayan/Rento',
      live: 'https://imrajeevnayan.github.io/Rento/',
    },
  },
  {
    title: 'readmify',
    description: 'AI-powered README generator helping developers create polished documentation. Analyzes project details to generate comprehensive README files.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    tech: ['React.js', 'Node.js', 'MongoDB', 'AI'],
    links: {
      github: 'https://github.com/imrajeevnayan/readmify',
      live: 'https://imrajeevnayan.github.io/readmify/',
    },
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const categories = ['All', 'Full Stack', 'Backend', 'Interactive', 'Utilities'];

  const filteredProjects = projects.filter(p => 
    filter === 'All' || p.tech.some(t => t.includes(filter) || (filter === 'Full Stack' && t.includes('SpringBoot')))
  );

  return (
    <section id="projects" className="section-container relative">
      <div className="mb-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex items-center gap-3 text-blue-600 mb-4"
        >
           <span className="w-12 h-px bg-blue-600"></span>
           <span className="text-xs font-black uppercase tracking-[0.3em]">Selected Works</span>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
           <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-none uppercase">
              Proven <br /> <span className="text-shimmer">Solutions</span>
           </h2>
           
           <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                 <button
                    key={cat}
                    onClick={() => { setFilter(cat); setVisibleProjects(6); }}
                    className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                       filter === cat 
                       ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' 
                       : 'bg-white/5 hover:bg-white/10 text-slate-500'
                    }`}
                 >
                    {cat}
                 </button>
              ))}
           </div>
        </div>
      </div>

      {/* FEATURED PROJECT - The "Big Hero" Card */}
      <div className="mb-12">
         {filteredProjects.length > 0 && (
            <FeaturedProject project={filteredProjects[0]} />
         )}
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.slice(1, visibleProjects).map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
      
      {visibleProjects < filteredProjects.length && (
         <div className="mt-20 flex justify-center">
            <button
               onClick={() => setVisibleProjects(prev => prev + 4)}
               className="px-12 py-5 glass-panel rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all text-xs"
            >
               Expand Portfolio
            </button>
         </div>
      )}
    </section>
  );
};

const FeaturedProject = ({ project }: { project: Project }) => {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="group relative h-[70vh] rounded-[3rem] overflow-hidden border border-white/10"
      >
         <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
         
         <div className="absolute bottom-12 left-12 right-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
               <div className="flex flex-wrap gap-3">
                  {project.tech.map(t => (
                     <span key={t} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-[9px] font-bold text-white/70 uppercase">
                        {t}
                     </span>
                  ))}
               </div>
               <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">{project.title}</h3>
               <p className="text-lg text-white/60 font-medium leading-relaxed">{project.description}</p>
            </div>
            
            <div className="flex gap-4">
               <Magnetic>
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-6 bg-white text-slate-900 rounded-2xl hover:scale-110 transition-transform"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                     <Github size={24} />
                  </a>
               </Magnetic>
               {project.links.live && (
                  <Magnetic>
                     <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all flex items-center gap-3"
                        aria-label={`View live demo of ${project.title}`}
                     >
                        Live Preview <ArrowRight size={20} />
                     </a>
                  </Magnetic>
               )}
            </div>
         </div>
      </motion.div>
   );
};

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ delay: index * 0.1 }}
         viewport={{ once: true }}
         className="group glass-panel rounded-[2.5rem] overflow-hidden flex flex-col h-full border-white/5"
      >
         <div className="relative h-64 overflow-hidden">
            <img src={project.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
         </div>
         <div className="p-8 space-y-4 flex-grow flex flex-col">
            <div className="flex justify-between items-start">
               <h4 className="text-2xl font-black uppercase tracking-tight">{project.title}</h4>
               <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-500 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
               >
                  <Github size={20} />
               </a>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium line-clamp-2">{project.description}</p>
            <div className="mt-auto pt-6 flex flex-wrap gap-2">
               {project.tech.slice(0, 3).map(t => (
                  <span key={t} className="text-[9px] font-black uppercase tracking-widest text-blue-500">{t}</span>
               ))}
            </div>
         </div>
      </motion.div>
   );
};

export default Projects;