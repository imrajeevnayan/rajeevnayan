
import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';
import Magnetic from './common/Magnetic';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container border-t border-slate-200 dark:border-white/5">
      <div className="flex flex-col lg:flex-row gap-20">
        
        {/* STICKY INFO */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-[0.3em]">Intersection</div>
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Get in <br /><span className="text-shimmer">Touch</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm">
              Currently available for high-impact engineering roles and technical collaborations.
            </p>
            
            <div className="space-y-6 pt-10">
               <a 
                  href="mailto:imrajeevnayan@gmail.com" 
                  className="group flex items-center gap-4 text-lg font-bold"
                  aria-label="Send an email to Rajeev Nayan"
               >
                  <div className="p-4 glass-panel rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                     <Mail size={20} />
                  </div>
                  imrajeevnayan@gmail.com
               </a>
               <a 
                  href="tel:+919155028525" 
                  className="group flex items-center gap-4 text-lg font-bold"
                  aria-label="Call Rajeev Nayan"
               >
                  <div className="p-4 glass-panel rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                     <Phone size={20} />
                  </div>
                  +91 9155028525
               </a>
            </div>
          </motion.div>
        </div>

        {/* FORM SIDE */}
        <div className="lg:w-2/3">
           <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-16 glass-panel rounded-[3rem] border-white/10"
           >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
                    <input id="name-input" name="name" required className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-blue-500/50 rounded-2xl px-6 py-4 outline-none transition-all font-bold" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email-input" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                    <input id="email-input" type="email" name="email" required className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-blue-500/50 rounded-2xl px-6 py-4 outline-none transition-all font-bold" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message-input" className="text-[10px] font-black uppercase tracking-widest text-slate-500">Message</label>
                  <textarea id="message-input" name="message" rows={5} required className="w-full bg-slate-100 dark:bg-white/5 border border-transparent focus:border-blue-500/50 rounded-2xl px-6 py-4 outline-none transition-all font-bold resize-none" placeholder="Your vision..." />
                </div>

                <Magnetic>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    {isSubmitting ? 'Transmitting...' : 'Send Message'}
                  </button>
                </Magnetic>

                {submitStatus === 'success' && <p className="text-center text-xs font-bold text-green-500">Transmission successful. Talk soon.</p>}
              </form>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;