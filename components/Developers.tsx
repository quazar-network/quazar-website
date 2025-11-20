import React from 'react';
import { Terminal, Copy, Check, Code2, Cpu, Zap, Box } from 'lucide-react';

export const Developers: React.FC = () => {
  const [isCopied, setIsCopied] = React.useState(false);

  const codeSnippet = `from openai import OpenAI

# Initialize connection to Quazar Network
client = OpenAI(
    base_url="https://node1.quazar.io/v1", 
    api_key="qz_sk_7f92a...8b2"
)

# Run inference on decentralized GPU nodes
response = client.chat.completions.create(
    model="quazar-llama-3-70b-instruct",
    messages=[
        {"role": "system", "content": "You are a blockchain expert."},
        {"role": "user", "content": "Explain Proof-of-Compute."}
    ],
    stream=False
)

print(f"Node Response: {response.choices[0].message.content}")
print(f"Compute Cost: {response.usage.total_tokens * 0.0002} QZAR")`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const scrollToRoadmap = () => {
    const element = document.getElementById('roadmap');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-6">
                <Box size={14} className="text-white" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">SDK & API</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Developer <span className="text-gray-500">Environment</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Seamless integration. Connect directly to Quazar nodes using our <span className="text-white">OpenAI-compatible interface</span>. Execute decentralized AI inference by simply pointing your client to the Quazar network endpoint.
            </p>

            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                        <Zap className="text-white" size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-base">Adapted Interface</h4>
                        <p className="text-gray-500 text-sm mt-1">Custom fork of the OpenAI API spec, re-engineered to support decentralized routing and consensus verification.</p>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0">
                        <Cpu className="text-white" size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-base">Verifiable Inference</h4>
                        <p className="text-gray-500 text-sm mt-1">Cryptographically verified outputs via the Quazar Consensus Protocol.</p>
                    </div>
                </div>
            </div>

            <button 
                onClick={scrollToRoadmap}
                className="mt-10 px-6 py-3 bg-white text-black text-sm font-bold uppercase tracking-wide rounded-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
                Read Documentation
                <Terminal size={16} />
            </button>
          </div>

          {/* IDE Simulation */}
          <div className="relative">
            {/* Minimal Glow */}
            <div className="absolute -inset-1 bg-quazar-primary/20 blur-xl opacity-20"></div>
            
            <div className="relative bg-[#0a0a0a] rounded-md border border-white/10 overflow-hidden shadow-2xl font-mono text-sm">
                
                {/* Window Header */}
                <div className="bg-[#111] px-4 py-2 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-2 opacity-50">
                        <div className="w-3 h-3 rounded-full bg-white/10"></div>
                        <div className="w-3 h-3 rounded-full bg-white/10"></div>
                    </div>
                    <div className="text-gray-500 text-xs flex items-center gap-2">
                        <span>main.py</span>
                    </div>
                    <button onClick={copyCode} className="text-gray-500 hover:text-white transition-colors">
                        {isCopied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                </div>

                {/* Code Area */}
                <div className="p-6 overflow-x-auto bg-[#0a0a0a]">
                    <pre className="text-gray-300 leading-relaxed text-xs md:text-sm">
                        <code>
<span className="text-purple-400">from</span> openai <span className="text-purple-400">import</span> OpenAI

<span className="text-gray-600"># Initialize connection to Quazar Network</span>
client = OpenAI(
    base_url=<span className="text-green-400">"https://node1.quazar.io/v1"</span>, 
    api_key=<span className="text-green-400">"qz_sk_7f92a...8b2"</span>
)

<span className="text-gray-600"># Run inference on decentralized nodes</span>
response = client.chat.completions.create(
    model=<span className="text-green-400">"quazar-llama-3-70b-instruct"</span>,
    messages=[
        {'{'}<span className="text-yellow-600">"role"</span>: <span className="text-green-400">"user"</span>, <span className="text-yellow-600">"content"</span>: <span className="text-green-400">"Explain Proof-of-Compute."</span>{'}'}
    ]
)

<span className="text-purple-400">print</span>(f<span className="text-green-400">"Response: &#123;response.choices[0].message.content&#125;"</span>)
                        </code>
                    </pre>
                </div>

                {/* Terminal / Output */}
                <div className="bg-[#050505] border-t border-white/10 p-4">
                    <div className="flex items-center gap-2 text-[10px] text-gray-600 mb-2 uppercase tracking-wider font-bold">
                        <Terminal size={10} />
                        Terminal Output
                    </div>
                    <div className="font-mono text-xs space-y-1.5">
                        <div className="flex gap-2">
                            <span className="text-green-500">➜</span>
                            <span className="text-gray-400">python3 main.py</span>
                        </div>
                        <div className="text-gray-500 pl-4">
                            [09:41:22] Resolving decentralized mesh... OK
                        </div>
                         <div className="text-gray-500 pl-4">
                            [09:41:23] Handshake node_id=QZ-882... OK
                        </div>
                        <div className="text-gray-300 pl-4 pt-1">
                            Response: Proof-of-Compute is a consensus mechanism where miners validate blocks by performing useful AI inference...
                        </div>
                    </div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};