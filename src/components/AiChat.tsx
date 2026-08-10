import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MessageSquare, X, Send, User, Bot, Loader2, RefreshCw, Quote, Activity, CheckCircle, Search, Edit2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { ragChat, type RagCitation } from "../lib/rag.functions";
import { simulateStreaming } from "../lib/streaming";

export function AiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ 
    role: "user" | "bot"; 
    text: string; 
    isError?: boolean;
    citations?: RagCitation[];
    evalMetrics?: {
      retrievalAccuracy: number;
      answerRelevance: number;
      latencyMs: number;
    }
  }[]>([]);

  useEffect(() => {
    setMessages([
      { role: "bot", text: "Hi! I'm Rajeev's AI assistant. How can I help you today?" },
    ]);
  }, []);
  const [loading, setLoading] = useState(false);
  const [streamedText, setStreamedText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const sendChat = useServerFn(ragChat);
  const prefersReducedMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState<"general" | "tech" | "projects">("general");
  const [userInterests, setUserInterests] = useState<string[]>([]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        const sections = ['about', 'tech-stack', 'experience', 'projects', 'expertise'];
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
              if (!userInterests.includes(id)) {
                setUserInterests(prev => [...new Set([...prev, id])]);
              }
            }
          }
        }
        timeoutId = 0;
      }, 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [userInterests]);


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const response = await sendChat({ message: userMsg, history });
      const finalBotText = await simulateStreaming(response.text, (text) => setStreamedText(text));
      
      setMessages((prev) => [...prev, { 
        role: "bot", 
        text: finalBotText,
        citations: response.citations,
        evalMetrics: response.evalMetrics
      }]);
      setStreamedText("");

      if (userMsg.toLowerCase().includes("project") || userMsg.toLowerCase().includes("fiesta")) {
        setUserInterests(prev => [...new Set([...prev, 'projects'])]);
      }
    } catch (err) {
      console.error("[AiChat Client] submit failed with error:", err);
      setMessages((prev) => [
        ...prev, 
        { 
          role: "bot", 
          text: "I'm having trouble reaching my knowledge base right now. Please try again in a moment.",
          isError: true 
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function handleRetry() {
    const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.text;
    if (lastUserMsg) {
      setInput(lastUserMsg);
      setMessages(prev => prev.filter((_, i) => i !== prev.length - 1));
    }
  }

  const queryCategories = {
    general: [
      { text: "What is your tech stack?", label: "Tech Stack" },
      { text: "View certifications", label: "Certs" },
      { text: "GitHub stats?", label: "GitHub" }
    ],
    tech: [
      { text: "Do you know Spring Boot?", label: "Spring Boot" },
      { text: "System design expertise?", label: "System Design" },
      { text: "Tell me about Java 21 features", label: "Java 21" }
    ],
    projects: [
      { text: "Tell me about Food Fiesta", label: "Food Fiesta" },
      { text: "Microservices architecture projects?", label: "Architecture" },
      { text: "Recent RAG implementation details", label: "RAG Info" }
    ]
  };

  const personalizedPrompts = userInterests.includes('projects') 
    ? [{ text: "Detailed case study of Food Fiesta?", label: "Deep Dive" }]
    : [];

  const displayQueries = [
    ...queryCategories[activeCategory],
    ...personalizedPrompts
  ].slice(0, 5);

  return (
    <div id="ai-chat-root">
      <button
        onClick={() => setIsOpen(true)}
        className="glass fixed right-4 bottom-24 z-40 flex size-12 items-center justify-center rounded-full text-aurora-1 shadow-lg transition-transform hover:scale-110 lg:bottom-5 lg:right-24"
        aria-label="Open AI Chat"
      >
        <MessageSquare className="size-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
            className="glass-card fixed right-4 bottom-24 z-50 flex h-[min(600px,calc(100dvh-7rem))] w-[calc(100vw-2rem)] xs:w-[380px] flex-col overflow-hidden rounded-2xl shadow-2xl lg:bottom-5 lg:right-24"
          >

            <div className="flex items-center justify-between border-b border-border bg-surface-2/80 backdrop-blur-md px-4 py-3 sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-aurora-1/20 text-aurora-1">
                  <Bot className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-aurora-1">RAG Core Assistant</h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">Knowledge Base v2.1</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="size-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 scroll-smooth">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-aurora-1 text-primary-foreground"
                        : m.isError 
                          ? "bg-rose-500/10 border border-rose-500/50 text-rose-500"
                          : "bg-surface-2 border border-border"
                    }`}
                  >
                    <div className="flex flex-col gap-2 break-words">
                       <span className="whitespace-pre-wrap leading-relaxed">{m.text}</span>
                       
                       {m.citations && m.citations.length > 0 && (
                         <div className="mt-2 pt-2 border-t border-border/50 space-y-2">
                           <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground uppercase font-bold tracking-wider">
                             <Quote className="size-2.5" /> Source Citations
                           </div>
                           {m.citations.map((cite, idx) => (
                             <div key={idx} className="bg-background/50 p-2 rounded text-[10px] text-muted-foreground border border-border/30 leading-tight italic">
                               "{cite.content.substring(0, 100)}..."
                               <div className="mt-1 text-aurora-1 font-mono uppercase text-[8px] tracking-tighter">
                                 [{cite.source}]
                               </div>
                             </div>
                           ))}
                         </div>
                       )}

                       {m.evalMetrics && (
                         <div className="mt-1 flex items-center gap-2 border-t border-border/30 pt-1.5">
                            <div className="flex items-center gap-0.5 text-[8px] text-muted-foreground" title="Retrieval Accuracy">
                              <Search className="size-2" />
                              {(m.evalMetrics.retrievalAccuracy * 100).toFixed(0)}%
                            </div>
                            <div className="flex items-center gap-0.5 text-[8px] text-muted-foreground" title="Answer Relevance">
                              <CheckCircle className="size-2 text-emerald-500" />
                              {(m.evalMetrics.answerRelevance * 100).toFixed(0)}%
                            </div>
                            <div className="flex items-center gap-0.5 text-[8px] text-muted-foreground font-mono" title="Latency">
                              <Activity className="size-2 text-aurora-1" />
                              {m.evalMetrics.latencyMs}ms
                            </div>
                         </div>
                       )}

                       {m.isError && (
                         <button 
                           onClick={handleRetry}
                           className="flex items-center gap-1 text-[10px] uppercase font-bold hover:underline"
                         >
                           <RefreshCw className="size-3" /> Retry
                         </button>
                       )}
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex flex-col items-start gap-2">
                  <div className="bg-surface-2 border border-border rounded-2xl px-3 py-2 text-sm max-w-[85%]">
                    {streamedText ? (
                      <span className="animate-pulse-slow">{streamedText}</span>
                    ) : (
                      <Loader2 className="size-4 animate-spin text-aurora-1" />
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="px-3 py-2 border-t border-border/50 bg-surface-1/50 backdrop-blur-md">
              <div className="flex items-center justify-between mb-2">
                <div className="flex gap-2">
                  {(["general", "tech", "projects"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-[9px] font-mono uppercase tracking-wider transition-colors ${
                        activeCategory === cat ? "text-aurora-1 font-bold" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <span className="text-[8px] text-muted-foreground font-mono uppercase">Suggestions</span>
              </div>
              
              <div className="flex flex-nowrap overflow-x-auto gap-1.5 pb-1 no-scrollbar">
                {displayQueries.map((q, idx) => (
                  <div key={idx} className="group relative flex-shrink-0">
                    <button
                      onClick={() => setInput(q.text)}
                      aria-label={`Ask: ${q.text}`}
                      className="rounded-full border border-border/50 bg-background/50 px-2.5 py-1 text-[10px] text-muted-foreground transition-all hover:border-aurora-1/30 hover:text-foreground active:scale-95 whitespace-nowrap pr-6"
                    >
                      {q.label}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setInput(q.text);
                      }}
                      className="absolute right-1.5 p-0.5 text-muted-foreground hover:text-aurora-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Refine prompt"
                    >
                      <Edit2 className="size-2.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="border-t border-border p-3">

              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  aria-label="AI chat input"
                  placeholder="Type a message..."
                  className="w-full rounded-full border border-border bg-background/50 px-4 py-2 pr-10 text-sm outline-none focus:border-aurora-1/50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="absolute right-1 top-1 flex size-8 items-center justify-center rounded-full text-aurora-1 transition-colors hover:bg-aurora-1/10 disabled:opacity-50"
                >
                  <Send className="size-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
