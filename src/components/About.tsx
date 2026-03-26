import { motion } from 'framer-motion';
import { GraduationCap, Languages, Brain, MapPin, Briefcase, Sparkles, Code2, Target, Zap } from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import Magnetic from './common/Magnetic';

const About = () => {
  const stats = [
    { icon: GraduationCap, title: 'Education', text: 'MCA Degree', detail: 'Dr. APJ AKTU' },
    { icon: Languages, title: 'Linguistics', text: 'Professional', detail: 'Hindi & English' },
    { icon: Brain, title: 'Philosophy', text: 'Problem First', detail: 'Modular Logic' },
    { icon: Sparkles, title: 'Focus', text: 'Clean Code', detail: 'Performance Optimization' },
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-6 uppercase leading-none">
              The Mind Behind <br />
              <span className="text-shimmer drop-shadow-sm">The Code</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                Turning complex problems into elegant, high-performance digital solutions through systematic engineering and creative logic.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-stretch">
          
          {/* LEFT: STORYTELLING */}
          <div className="space-y-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-transparent to-transparent hidden md:block"></div>
                <div className="space-y-6">
                    <div className="flex items-center gap-3 text-blue-600 mb-2">
                        <Target size={20} className="animate-pulse" />
                        <span className="text-xs font-black uppercase tracking-[0.3em]">The Mission</span>
                    </div>
                    <p className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white leading-[1.2] tracking-tight">
                        I build <span className="text-blue-600">scalable architectures</span> that don't just work—they perform under pressure.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl">
                        As a performance-driven Software Engineer, I specialize in bridging the gap between heavy-duty <span className="text-blue-500">Java Spring Boot</span> backends and fluid, interactive <span className="text-fuchsia-500">React</span> interfaces. My philosophy is simple: resolve the problem at its core before writing a single line of code.
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               {stats.map((item, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-6 glass-panel rounded-3xl group cursor-default border-white/40 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all"
                 >
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                       <item.icon size={24} />
                    </div>
                    <div>
                       <h4 className="font-black text-gray-900 dark:text-white text-sm uppercase tracking-tighter mb-0.5">{item.title}</h4>
                       <p className="text-[10px] text-blue-600 dark:text-blue-400 font-black mb-1 uppercase tracking-widest leading-none">{item.text}</p>
                       <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight">{item.detail}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* RIGHT: VISUAL & IDENTITY */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-12"
          >
            <div className="relative group max-w-md mx-auto w-full">
              {/* Outer Decorative Glow */}
              <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000 rounded-full"></div>
              
              <div className="relative z-10 p-3 glass-panel rounded-[4rem] border border-white/40 shadow-2xl overflow-hidden aspect-square">
                <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Rajeev Nayan" 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Inner Content on Image */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                        <div className="space-y-1">
                            <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest">Base of Ops</span>
                            <p className="text-white font-black text-xl leading-none">BANGALORE, IN</p>
                        </div>
                        <div className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                             <MapPin className="text-white" size={20} />
                        </div>
                    </div>
                </div>
              </div>
              
              {/* Floating Pulse Status */}
              <div className="absolute -top-6 -right-6 p-6 glass-panel rounded-3xl z-20 shadow-2xl border-white/60 dark:border-white/20 flex flex-col items-center gap-1 animate-float">
                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                 <div className="text-[10px] font-black uppercase text-gray-900 dark:text-white tracking-widest">Available</div>
                 <div className="text-[8px] font-bold uppercase text-gray-400 tracking-[0.2em]">To Relocate</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-panel p-8 rounded-[2.5rem] border-white/40 shadow-xl flex flex-col justify-between group hover:shadow-blue-500/10 transition-all">
                   <Zap size={32} className="text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
                   <div>
                       <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-none mb-2 tracking-tighter uppercase">Speed First</h3>
                       <p className="text-sm text-gray-500 font-medium">Obsessed with sub-second performance and query optimization.</p>
                   </div>
                </div>
                <div className="glass-panel p-8 rounded-[2.5rem] border-white/40 shadow-xl flex flex-col justify-between group hover:shadow-indigo-500/10 transition-all">
                   <Code2 size={32} className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform" />
                   <div>
                       <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-none mb-2 tracking-tighter uppercase">Modular DNA</h3>
                       <p className="text-sm text-gray-500 font-medium">Designing systems with reusable, scalable, and atomic structures.</p>
                   </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* GUIDING ATTENTION CTA */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 p-12 glass-panel rounded-[3.5rem] bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-transparent border-white/50 text-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight uppercase leading-none">Want to see the tech in action?</h3>
            <div className="flex justify-center gap-6">
                <Magnetic>
                    <a href="#projects" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all">
                        Explore Projects
                    </a>
                </Magnetic>
            </div>
            <div className="mt-8 flex items-center justify-center gap-3 text-gray-400">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Or scroll to learn about the builds</span>
                <div className="w-12 h-px bg-gray-300 dark:bg-gray-700"></div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;