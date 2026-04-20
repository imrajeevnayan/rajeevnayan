import { useState, useRef, FormEvent } from 'react';
import { Send, Loader2, Mail, Github, Linkedin } from 'lucide-react';
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
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--surface-main)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl">Get in Touch</h2>
              <p className="text-[var(--text-dim)] font-medium text-lg leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and technical challenges.
              </p>
            </div>
            
            <div className="space-y-6 pt-4">
               {[
                 { Icon: Mail, label: 'Email', value: 'imrajeevnayan@gmail.com', href: 'mailto:imrajeevnayan@gmail.com' },
                 { Icon: Linkedin, label: 'LinkedIn', value: 'in/imrajeevnayan', href: 'https://linkedin.com/in/imrajeevnayan' },
                 { Icon: Github, label: 'GitHub', value: '@imrajeevnayan', href: 'https://github.com/imrajeevnayan' }
               ].map((item, i) => (
                 <a key={i} href={item.href} target="_blank" className="flex items-center gap-5 group">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[var(--bg-main)] border border-[var(--border-main)] text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                       <item.Icon size={18} />
                    </div>
                    <div>
                       <div className="text-xs font-semibold text-[var(--text-dim)] mb-0.5">{item.label}</div>
                       <div className="text-sm font-bold text-[var(--text-main)] group-hover:text-indigo-600 transition-colors">{item.value}</div>
                    </div>
                 </a>
               ))}
            </div>
          </div>

          <div className="lg:col-span-7">
             <form ref={formRef} onSubmit={handleSubmit} className="p-8 md:p-10 card-base bg-[var(--bg-main)] space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">Your Name</label>
                    <input 
                      name="name" 
                      required 
                      className="w-full bg-[var(--surface-main)] border border-[var(--border-main)] focus:border-indigo-500/50 rounded-lg px-5 py-3 text-[var(--text-main)] outline-none transition-all placeholder:text-[var(--text-dim)]/30 font-medium" 
                      placeholder="Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email"
                      name="email" 
                      required 
                      className="w-full bg-[var(--surface-main)] border border-[var(--border-main)] focus:border-indigo-500/50 rounded-lg px-5 py-3 text-[var(--text-main)] outline-none transition-all placeholder:text-[var(--text-dim)]/30 font-medium" 
                      placeholder="email@example.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[var(--text-main)] uppercase tracking-wider">Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={5}
                    className="w-full bg-[var(--surface-main)] border border-[var(--border-main)] focus:border-indigo-500/50 rounded-lg px-5 py-3 text-[var(--text-main)] outline-none transition-all placeholder:text-[var(--text-dim)]/30 resize-none font-medium" 
                    placeholder="How can I help you?" 
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-3"
                >
                  {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-center text-green-600 text-sm font-bold animate-pulse">
                    Message sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-center text-red-500 text-sm font-bold">
                    Failed to send message. Please try again.
                  </div>
                )}
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;