import { useState, useRef, FormEvent } from 'react';
import { Send, Loader2, Mail, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import TerminalWindow from './common/Window';

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
    <section id="contact" className="section-container border-t border-[var(--glass-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* INFO SIDE */}
        <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32">
          <div className="space-y-4">
            <div className="text-orange-500 text-[10px] font-mono font-bold uppercase tracking-[0.3em]">Communication_Channel</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none text-[var(--text-main)]">
              Establish <br /><span className="text-shimmer">Contact</span>
            </h2>
            <p className="text-[var(--text-dim)] font-mono text-sm leading-relaxed max-w-sm">
              &gt; Currently available for high-impact engineering roles and technical collaborations. 
              Ping me if you have an interesting challenge!
            </p>
          </div>
          
          <div className="space-y-4 pt-4">
             <div className="flex gap-4">
                <a href="mailto:imrajeevnayan@gmail.com" className="w-10 h-10 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded flex items-center justify-center text-[var(--text-dim)] hover:text-orange-500 hover:border-orange-500/50 transition-all">
                   <Mail size={18} />
                </a>
                <a href="https://github.com/imrajeevnayan" target="_blank" className="w-10 h-10 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded flex items-center justify-center text-[var(--text-dim)] hover:text-orange-500 hover:border-orange-500/50 transition-all">
                   <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/imrajeevnayan" target="_blank" className="w-10 h-10 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded flex items-center justify-center text-[var(--text-dim)] hover:text-orange-500 hover:border-orange-500/50 transition-all">
                   <Linkedin size={18} />
                </a>
             </div>
             <p className="text-[10px] font-mono text-[var(--text-dim)] opacity-50 uppercase tracking-widest pt-4">
                Location: Varanasi, India [IST]
             </p>
          </div>
        </div>

        {/* EDITOR SIDE */}
        <div className="lg:col-span-8">
           <TerminalWindow title="sendMessage.ts" className="w-full">
              <form ref={formRef} onSubmit={handleSubmit} className="font-mono text-xs sm:text-sm space-y-2">
                <div className="text-[var(--text-dim)] opacity-50 mb-4">// Fill the object to transmit message</div>
                
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-orange-500 text-[10px] hidden sm:inline">01</span>
                  <span className="text-orange-500">import</span>
                  <span className="text-[var(--text-main)]">{'{'} TRANSMITTER {'}'}</span>
                  <span className="text-orange-500">from</span>
                  <span className="text-green-500">'@core/comms'</span>;
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-orange-500 text-[10px] hidden sm:inline">02</span>
                  <span className="text-orange-500">const</span>
                  <span className="text-blue-500">messageData</span> = {'{'}
                </div>

                <div className="pl-8 space-y-4 py-2 border-l border-[var(--glass-border)] ml-2">
                   <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[var(--text-dim)]">sender:</span>
                      <input 
                        name="name" 
                        required 
                        className="bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-orange-500/50 rounded px-3 py-1 text-green-500 outline-none w-full sm:w-64" 
                        placeholder="'Your Name'" 
                      />
                   </div>
                   <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[var(--text-dim)]">email:</span>
                      <input 
                        type="email"
                        name="email" 
                        required 
                        className="bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-orange-500/50 rounded px-3 py-1 text-green-500 outline-none w-full sm:w-64" 
                        placeholder="'your@email.com'" 
                      />
                   </div>
                   <div className="flex flex-wrap items-start gap-2">
                      <span className="text-[var(--text-dim)]">body:</span>
                      <textarea 
                        name="message" 
                        required 
                        rows={3}
                        className="bg-[var(--glass-bg)] border border-[var(--glass-border)] focus:border-orange-500/50 rounded px-3 py-1 text-green-500 outline-none w-full sm:w-96 resize-none" 
                        placeholder="'Your vision or inquiry...'" 
                      />
                   </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                   <span className="text-orange-500 text-[10px] hidden sm:inline">07</span>
                   <span className="text-[var(--text-main)]">{'}'};</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-4">
                   <span className="text-orange-500 text-[10px] hidden sm:inline">08</span>
                   <span className="text-orange-500">await</span>
                   <span className="text-blue-500">TRANSMITTER</span>.<span className="text-[var(--text-dim)]">send</span>(messageData);
                </div>

                <div className="pt-8">
                  <button 
                    disabled={isSubmitting}
                    className="flex items-center gap-3 px-6 py-2 bg-orange-500 text-black rounded font-bold uppercase text-[10px] tracking-widest hover:bg-[var(--text-main)] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                    {isSubmitting ? 'Transmitting...' : 'Run_Send.sh'}
                  </button>
                </div>


                {submitStatus === 'success' && (
                  <div className="pt-4 text-green-500 text-[10px] animate-pulse">
                    &gt; [SUCCESS]: Message transmitted successfully through secure channel.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="pt-4 text-red-500 text-[10px]">
                    &gt; [ERROR]: Transmission failed. Check connection or try direct email.
                  </div>
                )}
              </form>
           </TerminalWindow>
        </div>
      </div>
    </section>
  );
};

export default Contact;