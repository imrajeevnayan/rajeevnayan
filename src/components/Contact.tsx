import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { toast } from "sonner";
import { Github, Linkedin, Mail, FileText, ArrowRight, Copy, CheckCircle2, Terminal as TerminalIcon, Instagram, Twitter, Send, Loader2 } from "lucide-react";
import { trackEvent } from "@/hooks/use-posthog";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";


const contactLinks = [
  { 
    id: "01",
    icon: Mail, 
    label: "Email", 
    value: profile.email, 
    description: "Let's start a conversation",
    href: `mailto:${profile.email}`,
    isEmail: true
  },
  { 
    id: "02",
    icon: Linkedin, 
    label: "LinkedIn", 
    value: "imrajeevnayan", 
    description: "Connect for opportunities",
    href: profile.links.linkedin 
  },
  { 
    id: "03",
    icon: Github, 
    label: "GitHub", 
    value: "@imrajeevnayan", 
    description: "View my open source work",
    href: profile.links.github 
  },
  { 
    id: "04",
    icon: Twitter, 
    label: "Twitter", 
    value: "@imrajeevnayan", 
    description: "Follow for technical updates",
    href: profile.links.twitter 
  },
  { 
    id: "05",
    icon: Instagram, 
    label: "Instagram", 
    value: "@imrajeevnayan", 
    description: "Life outside of code",
    href: profile.links.instagram 
  },
  { 
    id: "06",
    icon: FileText, 
    label: "Resume", 
    value: "PDF Document", 
    description: "Download my credentials",
    href: "/resume.pdf"
  },
];

const terminalLines = [
  { text: "$ ./connect", delay: 0 },
  { text: "Initializing connection...", delay: 0.5 },
  { text: "✓ Identity verified", delay: 1.2 },
  { text: "✓ Communication channel ready", delay: 1.8 },
  { text: "", delay: 2.2 },
  { text: "Available channels:", delay: 2.4 },
  { text: "[01] Email", delay: 2.6, isOption: true },
  { text: "[02] LinkedIn", delay: 2.8, isOption: true },
  { text: "[03] GitHub", delay: 3.0, isOption: true },
  { text: "[04] Twitter", delay: 3.2, isOption: true },
  { text: "[05] Instagram", delay: 3.4, isOption: true },
  { text: "[06] Download Resume", delay: 3.6, isOption: true },
  { text: "", delay: 3.8 },
  { text: "$ _", delay: 4.0, isCursor: true },
];

export function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = React.useState(false);
  const [visibleLines, setVisibleLines] = React.useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  
  React.useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    const isMobile = window.innerWidth < 768;
    
    terminalLines.forEach((line, i) => {
      // Speed up terminal animation on mobile or skip delays
      const delay = isMobile ? line.delay * 0.5 : line.delay;
      const timeout = setTimeout(() => {
        setVisibleLines(prev => [...prev, i]);
      }, delay * 1000);
      timeouts.push(timeout);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    trackEvent("copy_email_clicked");
    toast.success("Email copied to clipboard");

    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setIsSubmitting(true);
    trackEvent("contact_form_submitted");

    try {
      const response = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Section
      id="contact"
      className="relative overflow-hidden py-24"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="flex flex-col items-center text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          LET'S BUILD SOMETHING <br className="hidden xs:block" />
          <span className="text-aurora">TOGETHER.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-xl"
        >
          Have an idea, opportunity, or project in mind? <br className="hidden xs:block" />
          Let's connect.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-mono uppercase tracking-widest text-emerald-500"
        >
          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for opportunities
        </motion.div>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 items-start max-w-6xl mx-auto">
        {/* Terminal Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden rounded-xl border border-border/50 shadow-2xl"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-surface-2/30">
            <div className="flex gap-1.5">
              <div className="size-3 rounded-full bg-[#FF5F56]" />
              <div className="size-3 rounded-full bg-[#FFBD2E]" />
              <div className="size-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <TerminalIcon className="size-3" />
              <span>connection@{profile.handle}</span>
            </div>
            <div className="w-12" /> {/* Spacer */}
          </div>
          
          <div className="p-6 font-mono text-sm min-h-[320px] bg-black/20">
            <div className="space-y-1">
              {terminalLines.map((line, i) => (
                <div key={i} className="min-h-[1.25rem]">
                  {visibleLines.includes(i) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`${line.isOption ? 'text-aurora-2 pl-4' : ''} ${line.isCursor ? 'flex items-center gap-1' : ''}`}
                    >
                      {line.text}
                      {line.isCursor && (
                        <motion.span
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="w-2 h-4 bg-aurora-1"
                        />
                      )}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Connection Visualization - Hidden on small mobile to reduce draw calls */}
            <div className="mt-8 relative h-12 flex items-center justify-center opacity-30 hidden xs:flex">
              <div className="absolute left-0 text-[10px] uppercase tracking-tighter text-muted-foreground">Visitor</div>
              <div className="flex-1 mx-12 h-px bg-gradient-to-r from-transparent via-aurora-1 to-transparent relative">
                {!prefersReducedMotion && (
                  <motion.div
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-aurora shadow-[0_0_8px_var(--aurora)]"
                  />
                )}
              </div>
              <div className="absolute right-0 text-[10px] uppercase tracking-tighter text-muted-foreground">Rajeev</div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl border border-border/50 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="John Doe"
                  className="w-full bg-surface-2/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-aurora-1/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="w-full bg-surface-2/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-aurora-1/50 transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Subject</label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                placeholder="Collaboration Inquiry"
                className="w-full bg-surface-2/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-aurora-1/50 transition-all"
              />
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder="Tell me about your project..."
                className="w-full bg-surface-2/30 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-aurora-1/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative flex w-full items-center justify-center gap-3 rounded-xl bg-aurora-1 px-8 py-4 text-sm font-bold text-black transition-all hover:scale-[1.01] hover:shadow-[0_0_20px_-5px_var(--aurora-1)] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </button>
          </motion.form>

          {/* Social Links Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="group glass-card p-4 rounded-xl border border-border/30 hover:border-aurora-1/30 transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 active:scale-[0.98]"
              >
                <div className="size-8 rounded-lg bg-surface-2/50 flex items-center justify-center text-aurora-1 ring-1 ring-border/50 group-hover:ring-aurora-1/20 transition-all">
                  <link.icon className="size-4" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-[11px] font-bold uppercase tracking-tight">{link.label}</h3>
                  <p className="text-[9px] text-muted-foreground truncate max-w-[80px]">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}


