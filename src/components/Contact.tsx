import { useState, useRef, FormEvent } from 'react';
import { Send, Loader2, Mail, Github, Linkedin, Phone, Trophy, Code2 } from 'lucide-react';
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
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-[var(--bg-main)] relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
               <span className="badge-premium">Engagement</span>
               <h2 className="text-3xl md:text-5xl font-bold tracking-appleHeading text-[var(--text-primary)]">
                 Scale <span className="text-gradient">Together</span>
               </h2>
               <p className="text-sm md:text-[15px] text-[var(--text-secondary)] font-light leading-[1.47] pt-2">
                 Available for strategic collaboration on high-performance backend systems and distributed infrastructure. Let's build for the next 10 million users.
               </p>
            </div>
            
            <div className="space-y-3">
               {[
                 { Icon: Mail, label: 'Professional Inquiry', value: 'imrajeevnayan@gmail.com', href: 'mailto:imrajeevnayan@gmail.com' },
                 { Icon: Phone, label: 'Voice / WhatsApp', value: '+91-9155028525', href: 'tel:+919155028525' },
                 { Icon: Linkedin, label: 'LinkedIn Network', value: 'in/imrajeevnayan', href: 'https://linkedin.com/in/imrajeevnayan' },
                 { Icon: Github, label: 'Technical Workspace', value: 'github.com/imrajeevnayan', href: 'https://github.com/imrajeevnayan' },
                 { Icon: Trophy, label: 'LeetCode Profile', value: 'leetcode.com/imrajeevnayan', href: 'https://leetcode.com/u/imrajeevnayan/' },
                 { Icon: Code2, label: 'GeeksforGeeks Profile', value: 'geeksforgeeks.org/imrajeevnayan', href: 'https://www.geeksforgeeks.org/profile/imrajeevnayan' }
               ].map((item, i) => (
                 <a 
                    key={i} 
                    href={item.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-[var(--bg-main)] border border-[var(--border-main)] hover:border-[var(--brand-accent)] transition-all group"
                 >
                    <div className="w-10 h-10 flex items-center justify-center text-[var(--color-button-blue)] shrink-0">
                       <item.Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                       <div className="text-[10px] font-medium text-[var(--text-secondary)] uppercase tracking-wider mb-0.5">{item.label}</div>
                       <div className="text-[13px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-deep-link-blue)] transition-colors">{item.value}</div>
                    </div>
                 </a>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="premium-card p-6 md:p-8 space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-1">
                   <label className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] ml-0.5">Full Name</label>
                   <input 
                     type="text" name="user_name" required 
                     className="w-full bg-[var(--bg-main)] border border-[var(--border-main)] rounded-md px-4 py-3 text-sm focus:border-[var(--brand-accent)] outline-none transition-all placeholder:text-[var(--text-muted)]/50"
                     placeholder="John Doe"
                   />
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] ml-0.5">Email Address</label>
                   <input 
                     type="email" name="user_email" required 
                     className="w-full bg-[var(--bg-main)] border border-[var(--border-main)] rounded-md px-4 py-3 text-sm focus:border-[var(--brand-accent)] outline-none transition-all placeholder:text-[var(--text-muted)]/50"
                     placeholder="john@example.com"
                   />
                 </div>
               </div>

               <div className="space-y-1">
                 <label className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-secondary)] ml-0.5">Message</label>
                 <textarea 
                   name="message" required rows={5}
                   className="w-full bg-[var(--bg-main)] border border-[var(--border-main)] rounded-md px-4 py-3 text-sm focus:border-[var(--brand-accent)] outline-none transition-all resize-none placeholder:text-[var(--text-muted)]/50"
                   placeholder="How can we build something great together?"
                 />
               </div>

               <button 
                 type="submit" disabled={isSubmitting}
                 className="btn-primary w-full py-3 flex items-center justify-center gap-2 disabled:opacity-50 disabled:scale-100"
               >
                 {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
                 {isSubmitting ? 'Transmitting...' : 'Send Message'}
               </button>

               {submitStatus === 'success' && (
                 <p className="text-[11px] font-medium text-green-500 text-center uppercase tracking-wider mt-2">Message Transmitted Successfully</p>
               )}
               {submitStatus === 'error' && (
                 <p className="text-[11px] font-medium text-[var(--brand-accent)] text-center uppercase tracking-wider mt-2">Transmission Failed. Please try again.</p>
               )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;