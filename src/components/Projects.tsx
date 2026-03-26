import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import Tilt3D from './common/Tilt3D';
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !spotlightRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    gsap.to(spotlightRef.current, {
        opacity: 1,
        x,
        y,
        duration: 0.3,
        ease: 'power3.out'
    });
  };

  const onMouseLeave = () => {
    gsap.to(spotlightRef.current, {
        opacity: 0,
        duration: 0.3
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="h-full group relative"
    >
      <div 
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none opacity-0 z-30 transition-opacity duration-500 overflow-hidden rounded-[2.5rem]"
        style={{
          background: 'radial-gradient(400px circle at var(--x, 0px) var(--y, 0px), rgba(37,99,235,0.1), transparent 100%)',
          transform: 'translate(-50%, -50%)',
          left: 0,
          top: 0
        }}
      />
      <Tilt3D className="h-full" intensity={isExpanded ? 0 : 10}>
        <div className="glass-panel h-full rounded-[2.5rem] overflow-hidden group-hover:shadow-[0_0_100px_rgba(37,99,235,0.2)] dark:group-hover:shadow-[0_0_150px_rgba(99,102,241,0.3)] border-white/20 dark:border-white/5 transition-all duration-700">
          
          {/* IMAGE Showcase */}
          <div className="relative h-72 overflow-hidden pointer-events-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
              loading="lazy"
            />
            
            {/* Visual Metrics Overlays (Storytelling) */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
               {project.outcome && (
                  <div className="px-4 py-2 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl border border-white/20 animate-float">
                      High Impact
                  </div>
               )}
               {project.tech.includes('Spring Boot') && (
                  <div className="px-4 py-2 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-2xl border border-white/10">
                      Scalability Focused
                  </div>
               )}
            </div>

            {/* Dark Blur Overlay on Hover */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-8 space-y-8">
               <div className="text-center space-y-2">
                  <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-2 text-blue-400">Project Mission</h4>
                  <p className="text-white text-sm font-medium leading-relaxed max-w-[200px]">{project.description.slice(0, 100)}...</p>
               </div>
               
               <div className="flex gap-4">
                  <Magnetic>
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-5 bg-white/10 hover:bg-white text-white hover:text-black rounded-3xl transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-white/20 hover:scale-110"
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
                        className="p-5 bg-blue-600 hover:bg-blue-500 text-white rounded-3xl transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-blue-500/60 hover:scale-110"
                        >
                        <ExternalLink size={24} />
                        </a>
                    </Magnetic>
                  )}
               </div>
            </div>
          </div>

          <div className="p-8 flex flex-col h-full">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase tracking-tight">
              {project.title}
            </h3>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-[10px] font-black uppercase tracking-widest text-blue-600/70 dark:text-blue-400/70 bg-blue-50 dark:bg-blue-500/5 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            {/* Expanded Detailed View toggle if needed */}
            {(project.challenge) && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-2"
              >
                {isExpanded ? 'Collapse' : 'Architecture Details'} {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>
            )}

            <AnimatePresence>
              {isExpanded && (
                 <motion.div
                   initial={{ height: 0, opacity: 0 }}
                   animate={{ height: 'auto', opacity: 1 }}
                   exit={{ height: 0, opacity: 0 }}
                   className="overflow-hidden mt-4 space-y-4 pt-4 border-t border-dashed border-gray-200 dark:border-white/10"
                 >
                    <div>
                       <h4 className="text-[10px] font-black uppercase text-blue-600 mb-1">Challenge</h4>
                       <p className="text-xs text-gray-600 dark:text-gray-400">{project.challenge}</p>
                    </div>
                    <div>
                       <h4 className="text-[10px] font-black uppercase text-blue-600 mb-1">Solution</h4>
                       <p className="text-xs text-gray-600 dark:text-gray-400">{project.solution}</p>
                    </div>
                 </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Tilt3D>
    </motion.div>
  );
};


const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const showMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  return (
    <section id="projects" className="py-24 bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white mb-6 uppercase"
          >
            Engineering <span className="text-blue-600 dark:text-blue-400">Portfolio</span>
          </motion.h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Explore a selection of my latest builds, from scalable backends to immersive 3D interfaces. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.slice(0, visibleProjects).map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
        
        <div className="mt-20 flex flex-col items-center gap-8">
          {visibleProjects < projects.length && (
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={showMore}
              className="px-12 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:bg-blue-700 transition-all flex items-center gap-3 group"
            >
              Expand Build History <ChevronDown className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          )}

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-center"
          >
            <a
               href="https://github.com/imrajeevnayan"
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/5 text-blue-600 dark:text-blue-400 rounded-full font-bold hover:bg-blue-600/10 transition-all"
            >
               <Github size={18} /> Deep Dive on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;