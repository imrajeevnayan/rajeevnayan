import { useState, useRef, FormEvent } from 'react';
import { Send, Loader2, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-48 bg-[var(--bg-main)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-4">
               <span className="badge-premium">Engagement</span>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                 Scale <span className="text-gradient">Together</span>
               </h2>
               <p className="text-[15px] text-[var(--text-secondary)] font-medium leading-relaxed pt-4">
                 Available for strategic collaboration on high-performance backend systems and distributed infrastructure. Let's build for the next 10 million users.
               </p>
            </div>
            
            <div className="space-y-4">
               {[
                 { Icon: Mail, label: 'Professional Inquiry', value: 'imrajeevnayan@gmail.com', href: 'mailto:imrajeevnayan@gmail.com' },
                 { Icon: Linkedin, label: 'LinkedIn Network', value: 'in/imrajeevnayan', href: 'https://linkedin.com/in/imrajeevnayan' },
                 { Icon: Github, label: 'Technical Workspace', value: '@imrajeevnayan', href: 'https://github.com/imrajeevnayan' }
               ].map((item, i) => (
                 <motion.a 
                    key={i} 
                    href={item.href} 
                    target="_blank" 
                    className="flex items-center gap-6 p-4 rounded-2xl bg-[var(--surface-main)] border border-[var(--border-main)] hover:border-[var(--brand-accent)]/30 transition-all group"
                 >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[var(--bg-main)] text-[var(--brand-accent)] group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-all">
                       <item.Icon size={18} />
                    </div>
                    <div>
                       <div className="text-[9px] font-black text-[var(--text-secondary)] uppercase tracking-[0.2em] mb-1">{item.label}</div>
                       <div className="text-[13px] font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-accent)] transition-colors">{item.value}</div>
                    </div>
                 </motion.a>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="premium-card p-8 md:p-12 space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] ml-1">Full Name</label>
                   <input 
                     type="text" name="user_name" required 
                     className="w-full bg-[var(--bg-main)] border border-[var(--border-main)] rounded-xl px-5 py-4 text-[13px] focus:border-[var(--brand-accent)] outline-none transition-all"
                     placeholder="John Doe"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] ml-1">Email Address</label>
                   <input 
                     type="email" name="user_email" required 
                     className="w-full bg-[var(--bg-main)] border border-[var(--border-main)] rounded-xl px-5 py-4 text-[13px] focus:border-[var(--brand-accent)] outline-none transition-all"
                     placeholder="john@example.com"
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-secondary)] ml-1">Message</label>
                 <textarea 
                   name="message" required rows={5}
                   className="w-full bg-[var(--bg-main)] border border-[var(--border-main)] rounded-xl px-5 py-4 text-[13px] focus:border-[var(--brand-accent)] outline-none transition-all resize-none"
                   placeholder="How can we build something great together?"
                 />
               </div>

               <button 
                 type="submit" disabled={isSubmitting}
                 className="btn-primary w-full py-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100"
               >
                 {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                 {isSubmitting ? 'Transmitting...' : 'Send Message'}
               </button>

               {submitStatus === 'success' && (
                 <p className="text-[11px] font-bold text-green-500 text-center uppercase tracking-widest">Message Transmitted Successfully</p>
               )}
               {submitStatus === 'error' && (
                 <p className="text-[11px] font-bold text-[var(--brand-accent)] text-center uppercase tracking-widest">Transmission Failed. Please try again.</p>
               )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;