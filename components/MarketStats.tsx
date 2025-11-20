import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  {
    name: '2025 (Billions)',
    crypto: 3100,
    ai: 391,
  },
  {
    name: '2030+ (Billions)',
    crypto: 9000,
    ai: 3500,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel p-4 rounded border border-gray-700">
        <p className="text-white font-bold mb-2">{label}</p>
        <p className="text-cyan-400 text-sm">
          Crypto: ${payload[0].value.toLocaleString()} B
        </p>
        <p className="text-purple-400 text-sm">
          AI: ${payload[1].value.toLocaleString()} B
        </p>
      </div>
    );
  }
  return null;
};

export const MarketStats: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Market Convergence: <span className="text-quazar-primary">Crypto & AI</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              By 2025, the AI market is projected to reach <span className="text-white font-bold">$391 Billion</span>, while the Crypto market aims for <span className="text-white font-bold">$3.1 Trillion</span>. Quazar positions itself at the intersection of these two explosive industries.
            </p>
            
            <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl border-l-4 border-quazar-primary">
                    <h4 className="text-white font-bold text-lg">Generative AI Boom</h4>
                    <p className="text-gray-400 text-sm mt-1">Projected $59-63 Billion by 2025. Global investment reaching $200B.</p>
                </div>
                <div className="glass-panel p-6 rounded-xl border-l-4 border-purple-500">
                    <h4 className="text-white font-bold text-lg">Massive Scale</h4>
                    <p className="text-gray-400 text-sm mt-1">Long term forecasts predict a combined market cap exceeding $12 Trillion by 2035.</p>
                </div>
            </div>
          </div>

          <div className="h-[400px] w-full glass-panel p-6 rounded-2xl border border-white/5">
            <h3 className="text-center text-white mb-6 font-semibold">Market Size Projection (USD Billions)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} />
                <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickFormatter={(value) => `$${value/1000}T`} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                <Bar dataKey="crypto" name="Crypto Market" fill="#00f0ff" radius={[4, 4, 0, 0]} />
                <Bar dataKey="ai" name="AI Market" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-quazar-primary rounded-sm"></div>
                    <span className="text-sm text-gray-400">Crypto Market</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                    <span className="text-sm text-gray-400">AI Market</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};