import { useState } from "react";
import { motion } from "motion/react";
import { Search, Database, Cpu, ArrowRight, MessageCircle, PlayCircle, Loader2 } from "lucide-react";
import { Section } from "./Section";

const examples = [
  {
    query: "What are Rajeev's core Java skills?",
    context: "Retrieved 3 document chunks regarding Spring Boot, Microservices, and Java 21 features.",
    response: "Rajeev specializes in Java 21, Spring Boot 3, and building high-throughput microservices. His expertise includes Spring Security, JPA/Hibernate, and distributed systems architecture."
  },
  {
    query: "Has he built any AI-powered applications?",
    context: "Retrieved project metadata for 'pdf-rag-spring-ai' and 'rag-chatbot-springboot'.",
    response: "Yes, Rajeev has engineered RAG (Retrieval-Augmented Generation) systems using Spring AI and pgvector. He implemented document ingestion pipelines that chunk and embed PDFs for semantic search."
  },
  {
    query: "Tell me about his 'Food Fiesta' project.",
    context: "Retrieved case study for 'Food-Fiesta' ordering platform.",
    response: "Food Fiesta is a Spring Boot monolith with multithreaded order processing. It uses Spring MVC and Thymeleaf for the front end and JPA for persistence, designed to handle concurrent ordering flows reliably."
  }
];

export function AiDemo() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [query, setQuery] = useState(examples[0]?.query || "");
  const [isTyping, setIsTyping] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const runDemo = (exampleQuery: string) => {
    setQuery(exampleQuery);
    setActiveStep(0);
    setShowResult(false);
    setIsTyping(false);
    
    // Faster steps on mobile to keep user engaged or slower to save CPU? 
    // Let's optimize for perceived speed by reducing delays slightly
    setTimeout(() => {
      setActiveStep(1); 
      setTimeout(() => {
        setActiveStep(2);
        setTimeout(() => {
          setActiveStep(3);
          setIsTyping(true);
          setTimeout(() => {
            setShowResult(true);
            setIsTyping(false);
          }, 1200);
        }, 800);
      }, 800);
    }, 600);
  };

  const activeExample = examples.find(e => e.query === query) || examples[0];

  return (
    <Section 
      id="ai-demo" 
      eyebrow="AI / RAG Integration" 
      title="How Rajeev AI Works"
      lead="An interactive look at the Retrieval-Augmented Generation pipeline powering the AI assistant on this site."
    >
      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Step Visualization */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-border -z-10" />
            
            <Step 
              active={activeStep === 0} 
              done={activeStep !== null && activeStep > 0}
              icon={MessageCircle} 
              title="User Query" 
              desc="The natural language request enters the system."
            />
            <Step 
              active={activeStep === 1} 
              done={activeStep !== null && activeStep > 1}
              icon={Cpu} 
              title="Vector Embedding" 
              desc="Text is converted into high-dimensional numerical vectors using an embedding model."
            />
            <Step 
              active={activeStep === 2} 
              done={activeStep !== null && activeStep > 2}
              icon={Database} 
              title="Semantic Retrieval" 
              desc="The vector is compared against a pgvector store to find relevant knowledge chunks."
            />
            <Step 
              active={activeStep === 3} 
              done={activeStep !== null && activeStep > 3}
              icon={Search} 
              title="Augmented Generation" 
              desc="Retrieved context + user query are passed to the LLM to generate a grounded response."
            />
          </div>

          <div className="glass-card rounded-2xl overflow-hidden border border-aurora-1/20 shadow-2xl">
            <div className="bg-surface-2/50 px-6 py-3 border-b border-border flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Live Pipeline Trace</span>
              <div className="flex gap-1.5">
                <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] text-emerald-500 font-mono uppercase tracking-tighter">Active</span>
              </div>
            </div>
            <div className="p-6 font-mono text-xs space-y-4 min-h-[220px]">
              <div className="text-aurora-1">
                <span className="text-muted-foreground mr-2 opacity-50">[QUERY]</span>
                {query}
              </div>
              
              {activeStep !== null && activeStep >= 2 && activeExample && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-aurora-2">
                  <span className="text-muted-foreground mr-2 opacity-50">[RETRIEVAL]</span>
                  {activeExample.context}
                </motion.div>
              )}
              
              {isTyping && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 className="size-3 animate-spin" />
                  <span>Synthesizing response...</span>
                </div>
              )}
              
              {showResult && activeExample && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-foreground leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                  <span className="text-muted-foreground mr-2 opacity-50 block mb-1">[RESPONSE]</span>
                  {activeExample.response}
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Controls & Examples */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <PlayCircle className="size-4 text-aurora-1" />
              Try a Query
            </h3>
            <div className="space-y-3">
              {examples.map((ex, i) => (
                <button
                  key={i}
                  onClick={() => runDemo(ex.query)}
                  disabled={activeStep !== null && activeStep < 4 && !showResult}
                  className="w-full text-left glass p-3 rounded-xl text-xs hover:bg-secondary transition-all flex items-center justify-between group disabled:opacity-50"
                >
                  <span className={query === ex.query ? "text-aurora-1 font-medium" : "text-muted-foreground"}>
                    {ex.query}
                  </span>
                  <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
            <p className="mt-6 text-[11px] text-muted-foreground leading-relaxed">
              This simulation demonstrates how the backend uses <strong>pgvector</strong> for vector storage and <strong>Spring AI</strong> to orchestrate the retrieval flow, ensuring the AI assistant doesn't hallucinate and stays grounded in Rajeev's actual professional data.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="glass px-6 py-3 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-secondary transition-all"
            >
              Ask Rajeev AI a custom question
              <MessageCircle className="size-4 text-aurora-1" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Step({ active, done, title, desc, icon: Icon }: { active: boolean, done: boolean, title: string, desc: string, icon: any }) {
  return (
    <div className={`flex gap-6 mb-8 last:mb-0 transition-opacity duration-300 ${!active && !done ? 'opacity-40' : 'opacity-100'}`}>
      <div className={`shrink-0 size-10 rounded-full flex items-center justify-center transition-all border ${
        active ? 'bg-aurora-1 border-aurora-1 text-black scale-110 shadow-[0_0_15px_rgba(var(--aurora-1-rgb),0.5)]' : 
        done ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-500' : 'bg-surface-2 border-border text-muted-foreground'
      }`}>
        <Icon className="size-5" />
      </div>
      <div>
        <h4 className={`text-sm font-bold ${active ? 'text-aurora-1' : done ? 'text-emerald-500' : 'text-foreground'}`}>{title}</h4>
        <p className="text-xs text-muted-foreground mt-1">{desc}</p>
      </div>
    </div>
  );
}
