
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    github: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    title: 'Hospital Management System',
    description: 'Comprehensive system featuring patient onboarding, doctor scheduling, and role-based access control. Implemented JWT authentication and optimized database query execution time by 40%.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'JWT'],
    links: {
      github: 'https://github.com/imrajeevnayan/hospital-management-springboot',
    },
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Real-time messaging platform with chat rooms, instant messaging, and typing indicators using WebSocket/STOMP. Handles 500+ concurrent users with MongoDB persistence.',
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
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my improved technical skills through practical applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Folder size={18} className="text-gray-400 hover:text-blue-600 transition-colors" />
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-300 rounded text-xs font-medium border border-blue-100 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;