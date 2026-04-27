import { useState, useRef, FormEvent } from 'react';
import { Send, Loader2, Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    // Check if environment variables are available
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS Error: Missing environment variables in .env file.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Sync hidden fields
      if (formRef.current) {
        formRef.current.reply_to.value = formRef.current.from_email.value;
        formRef.current.time.value = new Date().toLocaleString();
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 bg-[var(--surface-main)] overflow-hidden relative">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-4">
               <div className="text-[var(--brand-accent)] font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3">
                 <div className="w-8 h-[1px] bg-[var(--brand-accent)]" />
                 Engagement
               </div>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[var(--text-primary)]">
                 Start a <span className="text-gradient">Dialogue</span>
               </h2>
               <p className="text-[var(--text-secondary)] font-light text-xl leading-relaxed pt-4">
                 Whether you have a complex technical inquiry or a visionary project, I am available for strategic collaboration and high-impact engineering roles.
               </p>
            </div>
            
            <div className="space-y-6">
               {[
                 { Icon: Mail, label: 'Professional Inquiry', value: 'imrajeevnayan@gmail.com', href: 'mailto:imrajeevnayan@gmail.com' },
                 { Icon: Linkedin, label: 'LinkedIn Network', value: 'in/imrajeevnayan', href: 'https://linkedin.com/in/imrajeevnayan' },
                 { Icon: Github, label: 'Technical Workspace', value: '@imrajeevnayan', href: 'https://github.com/imrajeevnayan' }
               ].map((item, i) => (
                 <motion.a 
                    key={i} 
                    href={item.href} 
                    target="_blank" 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex items-center gap-6 group p-4 -ml-4 rounded-3xl hover:bg-white/5 transition-all"
                 >
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[var(--bg-main)] border border-white/5 text-[var(--brand-accent)] group-hover:bg-[var(--brand-accent)] group-hover:text-white transition-all shadow-inner">
                       <item.Icon size={22} />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-[var(--text-dim)] uppercase tracking-widest mb-1">{item.label}</div>
                       <div className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-accent)] transition-colors">{item.value}</div>
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
             <form ref={formRef} onSubmit={handleSubmit} className="p-8 md:p-12 bg-[var(--bg-main)] rounded-3xl border border-[var(--border-main)] space-y-8 relative overflow-hidden group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-[var(--text-primary)] uppercase tracking-widest">Your Name</label>
                    <input 
                      name="from_name" 
                      required 
                      className="w-full bg-[var(--surface-main)] border border-[var(--border-main)] focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)] rounded-xl px-5 py-4 text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-secondary)]/30 font-semibold" 
                      placeholder="e.g. John Doe" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-[var(--text-primary)] uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email"
                      name="from_email" 
                      required 
                      className="w-full bg-[var(--surface-main)] border border-[var(--border-main)] focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)] rounded-xl px-5 py-4 text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-secondary)]/30 font-semibold" 
                      placeholder="e.g. john@example.com" 
                    />
                  </div>
                </div>

                {/* Hidden fields for EmailJS template mapping */}
                <input type="hidden" name="reply_to" />
                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <div className="space-y-3 relative z-10">
                  <label className="text-[11px] font-bold text-[var(--text-primary)] uppercase tracking-widest">Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={5}
                    className="w-full bg-[var(--surface-main)] border border-[var(--border-main)] focus:border-[var(--brand-accent)] focus:ring-1 focus:ring-[var(--brand-accent)] rounded-xl px-5 py-4 text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-secondary)]/30 resize-none font-semibold" 
                    placeholder="How can I help you? Please describe your project or inquiry..." 
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileActive={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full btn-airbnb-primary flex items-center justify-center gap-3 py-4 text-lg shadow-sm hover:shadow-md relative z-10 overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? <Loader2 size={22} className="animate-spin" /> : <Send size={22} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-500/10 text-green-600 text-center text-sm font-bold border border-green-500/20"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 text-red-500 text-center text-sm font-bold border border-red-500/20"
                  >
                    Failed to send message. Please try again later.
                  </motion.div>
                )}
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;