import { motion } from 'framer-motion';
import { GraduationCap, Languages, Brain, MapPin, Briefcase, Sparkles } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white mb-6 uppercase"
          >
            Digital <span className="text-blue-600 dark:text-blue-400">Architect.</span>
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl border-gray-100 dark:border-white/5 shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
               <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                I am a performance-driven <span className="text-blue-600 font-bold underline decoration-blue-500/30 underline-offset-4 cursor-help">Software Engineer</span> with a specialization in building high-availability backends with <span className="font-bold">Spring Boot</span> and interactive frontends with <span className="font-bold">React.js</span>. My approach focuses on solving complex engineering challenges through modular and scalable design patterns.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { icon: GraduationCap, title: 'Education', text: 'MCA Degree', detail: 'Dr. APJ AKTU' },
                 { icon: Languages, title: 'Linguistics', text: 'Professional', detail: 'Hindi & English' },
                 { icon: Brain, title: 'Philosophy', text: 'Problem First', detail: 'Modular Logic' },
                 { icon: Sparkles, title: 'Focus', text: 'Clean Code', detail: 'Performance Optimization' },
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-4 p-5 glass-panel rounded-2xl hover:border-blue-500/30 transition-all group">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                       <item.icon size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-0.5">{item.title}</h4>
                       <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-0.5 uppercase tracking-widest leading-none">{item.text}</p>
                       <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{item.detail}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div className="relative group max-w-sm mx-auto w-full">
              {/* Outer Decorative Glow */}
              <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"></div>
              
              <div className="relative z-10 p-2 glass-panel rounded-[3rem] border border-white/40 shadow-2xl overflow-hidden aspect-square">
                <img 
                  src={profileImage} 
                  alt="Rajeev Nayan" 
                  className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Performance Indicator */}
              <div className="absolute -bottom-4 -right-4 p-5 glass-panel rounded-3xl z-20 shadow-2xl border-white/60 dark:border-white/20 flex flex-col items-center">
                 <div className="text-2xl font-black text-blue-600">6+</div>
                 <div className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em]">Months</div>
                 <div className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Agile Expr</div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-[2.5rem] border-white/40 shadow-xl space-y-6">
               <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-1 text-blue-600 bg-blue-600 rounded-full"></div>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-gray-500">Core Identity</h3>
               </div>
               
               <div className="grid grid-cols-2 gap-8 text-left">
                  <div className="space-y-1">
                     <div className="flex items-center gap-2 text-blue-600">
                        <MapPin size={16} /> <span className="text-[10px] font-black uppercase tracking-widest leading-none">Global Link</span>
                     </div>
                     <p className="text-lg font-black text-gray-900 dark:text-white uppercase leading-tight">Bangalore, <span className="text-blue-500">IN</span></p>
                  </div>
                  <div className="space-y-1">
                     <div className="flex items-center gap-2 text-blue-600">
                        <Briefcase size={16} /> <span className="text-[10px] font-black uppercase tracking-widest leading-none">Availability</span>
                     </div>
                     <p className="text-lg font-black text-gray-900 dark:text-white uppercase leading-tight">Actively <span className="text-blue-500">Open</span></p>
                  </div>
               </div>

               <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed italic border-l-2 border-blue-500 pl-4 py-1">
                "I combine a systematic engineering mindset with an obsession for sub-second system performance and modular data flows."
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;