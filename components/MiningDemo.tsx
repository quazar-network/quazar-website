import React, { useEffect, useRef, useState } from 'react';
import { Activity, Server, Database, CheckCircle2, Terminal as TerminalIcon } from 'lucide-react';

export const MiningDemo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [computeLoad, setComputeLoad] = useState(0);
  const [hashes, setHashes] = useState("0x0000000000000000");

  // Simulate random hex generation
  const generateHex = () => Math.random().toString(16).substring(2, 14).toUpperCase();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsActive(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      // Randomize stats to look alive
      setComputeLoad(prev => {
         const noise = Math.random() * 10 - 5;
         return Math.min(Math.max(prev + noise, 85), 99);
      });
      setHashes(`0x${generateHex()}${generateHex()}`);
      
      // Add log lines periodically
      if (Math.random() > 0.7) {
        const actions = ["ALLOCATING_TENSORS", "VERIFYING_ZKP", "COMPUTING_GRADIENTS", "SYNCING_STATE"];
        const action = actions[Math.floor(Math.random() * actions.length)];
        const newLog = `[${new Date().toISOString().split('T')[1].slice(0,8)}] ${action} >> OK`;
        setLogs(prev => [newLog, ...prev].slice(0, 5));
      }

    }, 100);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <section id="mining" ref={sectionRef} className="py-24 bg-quazar-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-quazar-primary animate-pulse"></div>
                    <span className="text-quazar-primary font-mono text-xs tracking-widest uppercase">System Architecture</span>
                </div>
                <h2 className="text-3xl font-bold text-white">Proof of Compute</h2>
                <p className="text-gray-400 mt-2 max-w-xl text-sm leading-relaxed">
                    Users pay QZAR to request inference. Nodes utilize GPU cycles to execute the workload, 
                    and rewards are distributed to miners and validators only after consensus verification.
                </p>
            </div>
            <div className="flex gap-4 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>NETWORK ONLINE</span>
                </div>
                <div className="flex items-center gap-2">
                    <Activity size={14} />
                    <span>LATENCY: 12ms</span>
                </div>
            </div>
        </div>

        {/* Schematic Dashboard */}
        <div className="relative rounded-lg border border-white/10 bg-[#0a0a0a] overflow-hidden">
          
          {/* Header Bar */}
          <div className="h-10 bg-[#111] border-b border-white/5 flex items-center justify-between px-4">
            <span className="text-xs font-mono text-gray-400">NODE_ID: QZ-8829-ALPHA</span>
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
            
            {/* Panel 1: Input Stream */}
            <div className="p-6 relative">
                <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Database size={64} />
                </div>
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Server size={14} className="text-quazar-primary"/> 
                    Ingest Stream
                </h4>
                
                <div className="space-y-3">
                    <div className="bg-black/50 p-3 border-l-2 border-quazar-primary">
                        <div className="text-[10px] text-gray-500 font-mono mb-1">CURRENT BATCH</div>
                        <div className="text-white font-mono text-sm truncate">{hashes}</div>
                    </div>
                    <div className="bg-black/50 p-3 border-l-2 border-gray-700 opacity-50">
                        <div className="text-[10px] text-gray-500 font-mono mb-1">PENDING BATCH</div>
                        <div className="text-white font-mono text-sm truncate">0xWAITING...</div>
                    </div>
                </div>
                
                <div className="mt-6">
                    <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                        <span>BUFFER CAPACITY</span>
                        <span>42%</span>
                    </div>
                    <div className="w-full h-1 bg-gray-800">
                        <div className="h-full bg-quazar-primary w-[42%]"></div>
                    </div>
                </div>
            </div>

            {/* Panel 2: Compute Engine */}
            <div className="p-6 relative bg-quazar-primary/5">
                 <div className="absolute top-2 right-2 animate-pulse">
                    <div className="w-2 h-2 bg-quazar-primary rounded-full"></div>
                </div>
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Activity size={14} className="text-quazar-primary"/> 
                    Inference Engine
                </h4>

                <div className="flex flex-col items-center justify-center py-2">
                    {/* Animated Diagram */}
                    <div className="relative w-32 h-32 border border-quazar-primary/30 rounded-full flex items-center justify-center mb-4">
                        <div className="absolute inset-0 border-t border-quazar-primary animate-spin rounded-full"></div>
                        <div className="absolute inset-4 border border-white/10 rounded-full"></div>
                        <div className="text-2xl font-bold font-mono text-white">{computeLoad.toFixed(0)}%</div>
                    </div>
                    <div className="text-xs font-mono text-quazar-primary animate-pulse">PROCESSING TENSORS</div>
                </div>
            </div>

            {/* Panel 3: Settlement & Logs */}
            <div className="p-6 flex flex-col">
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <TerminalIcon size={14} className="text-quazar-primary"/> 
                    System Logs
                </h4>
                
                <div className="flex-1 bg-black border border-white/10 p-3 font-mono text-[10px] text-green-500 space-y-1 overflow-hidden relative">
                    <div className="absolute inset-0 bg-green-500/5 pointer-events-none"></div>
                    {logs.map((log, i) => (
                        <div key={i} className="opacity-80 border-b border-dashed border-white/5 pb-0.5">{log}</div>
                    ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                        <div className="text-[10px] text-gray-500 font-mono">ESTIMATED REWARD</div>
                        <div className="text-lg font-bold text-white font-mono">+0.0420 QZAR</div>
                    </div>
                    <CheckCircle2 className="text-quazar-primary" size={24} />
                </div>
            </div>

          </div>
          
          {/* Schematic Overlay Lines */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

      </div>
    </section>
  );
};