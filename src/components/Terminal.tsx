import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

import { X, Terminal as TerminalIcon, ChevronRight, Loader2, AlertCircle, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { codingStatsQueryOptions } from "@/lib/coding-stats-query";
import { profile, featuredProjects, experience } from "@/data/portfolio";

type Command = {
  cmd: string;
  output: string | React.ReactNode;
};


export function Terminal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const prefersReducedMotion = useReducedMotion();

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([
    { cmd: "banner", output: <Banner /> },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { data: stats, isLoading, error, refetch, isFetching } = useQuery(codingStatsQueryOptions);


  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      refetch();
    }
  }, [open, refetch]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);


  function Banner() {
    return (
      <div className="text-aurora-1 mb-4">
        <pre className="text-[10px] sm:text-xs leading-none">
{`  _____         _                   _   _                               
 |  __ \\       (_)                 | \\ | |                              
 | |__) | __ _  _  ___  ___ __   __|  \\| | __ _ _   _  __ _ _ __        
 |  _  / / _\` || |/ _ \\/ _ \\\\ \\ / /| . \` |/ _\` | | | |/ _\` | '_ \\       
 | | \\ \\| (_| || |  __/  __/ \\ V / | |\\  | (_| | |_| | (_| | | | |      
 |_|  \\_\\\\__,_|| |\\___|\\___|  \\_/  |_| \\_|\\__,_|\\__, |\\__,_|_| |_|      
              _/ |                               __/ |                  
             |__/                               |___/                   `}
        </pre>
        <p className="mt-4 font-mono text-sm opacity-80">
          Welcome to Rajeev's Portfolio Terminal v1.1.0
          <br />
          Type <span className="text-aurora-2">'help'</span> to see available commands.
        </p>
      </div>
    );
  }

  const renderStats = (platform: 'leetcode' | 'gfg' | 'codolio' | 'coding') => {
    if (isLoading || isFetching) return <div className="flex items-center gap-2"><Loader2 className="size-4 animate-spin text-aurora-1" /> Fetching stats...</div>;
    if (error) return <div className="flex items-center gap-2 text-rose-500"><AlertCircle className="size-4" /> Failed to load stats. <button onClick={() => refetch()} className="underline">Retry</button></div>;
    
    if (platform === 'coding') {
      return (
        <div className="py-2 font-mono text-xs">
          <div className="flex items-center gap-2 mb-2">
             <span className="inline-flex items-center gap-1 text-emerald-500"><span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"/> Live Stats</span>
             <span className="text-muted-foreground italic">• Last synced: {new Date().toLocaleTimeString()}</span>
          </div>
          <p>Total Problems Solved: {stats?.summary.totalSolved}</p>
          <p>Platforms Tracked: {stats?.summary.platformCount}</p>
          <p>Status: {stats?.summary.activeStatus}</p>
        </div>
      );
    }

    const s = stats![platform as 'leetcode' | 'gfg' | 'codolio'];
    if (!s || s.totalSolved === 0) {
      return (
        <div className="py-2 font-mono text-xs text-amber-500">
          <p>Platform: {s?.platform || platform}</p>
          <p>Status: Unavailable</p>
          <p>Profile: {s?.profileUrl}</p>
        </div>
      );
    }

    return (
      <div className="py-2 font-mono text-xs">
        <div className="flex items-center gap-2 mb-2">
           <span className="inline-flex items-center gap-1 text-emerald-500"><span className="size-1.5 rounded-full bg-emerald-500 animate-pulse"/> Live Stats</span>
           <span className="text-muted-foreground italic">• Last synced: {new Date().toLocaleTimeString()}</span>
        </div>
        <p>Platform: {s.platform}</p>
        <p>Problems Solved: {s.totalSolved}</p>
        {s.platform === 'LeetCode' && (
          <>
            <p>Easy: {s.easy} | Medium: {s.medium} | Hard: {s.hard}</p>
            {s.ranking && <p>Ranking: {s.ranking.toLocaleString()}</p>}
          </>
        )}
        {s.platform === 'GeeksforGeeks' && (
          <>
            <p>Easy/Basic: {s.easy} | Medium: {s.medium} | Hard: {s.hard}</p>
            {s.score && <p>Coding Score: {s.score}</p>}
          </>
        )}
        <p>Profile: {s.profileUrl}</p>
      </div>
    );
  };


  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: string | React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 py-2">
            <div>about</div><div>experience</div>
            <div>skills</div><div>projects</div>
            <div>github</div><div>leetcode</div>
            <div>gfg</div><div>codolio</div>
            <div>contact</div><div>resume</div>
            <div>coding</div><div>neofetch</div>

            <div>whoami</div><div>neofetch</div>
            <div>clear</div><div>exit</div>
          </div>
        );
        break;
      case "whoami":
      case "about":
        output = (
          <div className="py-2">
            <p className="text-aurora-1 font-bold">{profile.name}</p>
            <p className="text-muted-foreground">{profile.role}</p>
            <p className="mt-2 text-sm">{profile.summary}</p>
          </div>
        );
        break;
      case "skills":
        output = "Java, Spring Boot, Microservices, REST APIs, AI (RAG), React, SQL, Docker, AWS.";
        break;
      case "experience":
        output = experience.map(e => `${e.role} @ ${e.company} (${e.period})`).join("\n");
        break;
      case "projects":
        output = featuredProjects.map((p, i) => `[${i + 1}] ${p.title} - ${p.description}`).join("\n\n");
        break;
      case "github":
        output = `Redirecting to GitHub: ${profile.links.github}`;
        window.open(profile.links.github, "_blank");
        break;
      case "leetcode":
      case "gfg":
      case "codolio":
      case "coding":
        output = renderStats(cmd as any);
        break;

      case "resume":
        output = "Opening resume...";
        window.open(profile.links.resume, "_blank");
        break;
      case "contact":
        output = `Email: ${profile.email}\nLinkedIn: ${profile.links.linkedin}`;
        break;
      case "neofetch":
        output = (
          <div className="flex gap-6 py-2">
             <div className="text-aurora-1 font-bold">RN</div>
             <div className="font-mono text-xs">
                <div><span className="text-aurora-2">OS</span>: Custom Portfolio v2.0</div>
                <div><span className="text-aurora-2">Host</span>: rajeevnayan.in</div>
                <div><span className="text-aurora-2">Kernel</span>: Java 21 / Spring Boot 3</div>
                <div><span className="text-aurora-2">Shell</span>: TanStack Start</div>
                <div><span className="text-aurora-2">Theme</span>: Enterprise Aurora</div>
             </div>
          </div>
        );
        break;
      case "clear":
        setHistory([{ cmd: "banner", output: <Banner /> }]);
        setInput("");
        return;
      case "exit":
        onClose();
        return;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }


    setHistory([...history, { cmd: input, output }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}

          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={prefersReducedMotion ? { scale: 1, y: 0 } : { scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { scale: 0.9, y: 20 }}

            className="glass-card flex h-[500px] w-full max-w-3xl flex-col overflow-hidden rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border bg-surface-2/80 px-4 py-2">
              <div className="flex items-center gap-2">
                <TerminalIcon className="size-4 text-aurora-1" />
                <span className="font-mono text-xs font-medium text-muted-foreground">rajeev@portfolio:~</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => refetch()} className="hover:text-aurora-1"><RefreshCw className="size-3"/></button>
                <button onClick={onClose} className="size-3 rounded-full bg-rose-500/50 hover:bg-rose-500" />
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto bg-background/40 p-6 font-mono text-sm"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((h, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  {h.cmd !== "banner" && (
                    <div className="flex items-center gap-2 text-aurora-2">
                      <ChevronRight className="size-3" />
                      <span>{h.cmd}</span>
                    </div>
                  )}
                  <div className="mt-1 whitespace-pre-wrap text-foreground/90 leading-relaxed">
                    {h.output}
                  </div>
                </div>
              ))}
              
              <form onSubmit={handleCommand} className="mt-4 flex items-center gap-2">
                <span className="text-aurora-1">rajeev@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none caret-aurora-1"
                  aria-label="Terminal input"
                  autoFocus
                />
              </form>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}