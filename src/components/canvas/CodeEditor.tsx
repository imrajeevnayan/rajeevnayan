import { motion } from 'framer-motion';

const CodeEditor = () => {
    const codeLines = [
        { text: 'public class CoreKernel {', color: 'text-violet-500' },
        { text: '  @Autowired', color: 'text-sky-500', indent: true },
        { text: '  private SystemCluster cluster;', color: 'text-[var(--text-main)]', indent: true },
        { text: '', color: '' },
        { text: '  public void initialize() {', color: 'text-violet-500', indent: true },
        { text: '    log.info("Optimizing nodes...");', color: 'text-emerald-500', indent: true, doubleIndent: true },
        { text: '    cluster.sync(StatelessMode.ENABLED);', color: 'text-sky-400', indent: true, doubleIndent: true },
        { text: '    this.status = Status.PERFORMANCE_MAX;', color: 'text-violet-400', indent: true, doubleIndent: true },
        { text: '  }', color: 'text-violet-500', indent: true },
        { text: '}', color: 'text-violet-500' },
    ];

    return (
        <div className="w-full h-full p-8 font-mono text-[11px] md:text-sm leading-relaxed overflow-hidden">
            <div className="flex flex-col gap-1">
                {codeLines.map((line, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 group"
                    >
                        <span className="w-6 text-right text-[var(--text-dim)]/30 select-none">{i + 1}</span>
                        <div className={`
                            ${line.indent ? 'ml-6' : ''} 
                            ${line.doubleIndent ? 'ml-6' : ''}
                            ${line.color} font-medium
                        `}>
                            {line.text}
                            {line.text && <motion.span 
                                animate={{ opacity: [1, 0, 1] }} 
                                transition={{ repeat: Infinity, duration: 1 }}
                                className="inline-block w-1 h-4 ml-1 bg-violet-500/50 align-middle"
                            />}
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Visual background noise/texture */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-violet-500/5 via-transparent to-sky-500/5" />
        </div>
    );
};

export default CodeEditor;
