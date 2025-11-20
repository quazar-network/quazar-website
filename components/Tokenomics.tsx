import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { AllocationData } from '../types';

const data: AllocationData[] = [
  { name: 'GPU Mining', value: 60, color: '#00f0ff' }, // Cyan
  { name: 'Team', value: 20, color: '#4ade80' }, // Green
  { name: 'ICO', value: 12, color: '#facc15' }, // Yellow
  { name: 'Liquidity', value: 6, color: '#3b82f6' }, // Blue
  { name: 'Airdrop', value: 2, color: '#f87171' }, // Red
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel p-3 rounded border border-gray-700">
          <p className="text-white font-bold">{payload[0].name}: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
};

export const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Chart */}
            <div className="w-full lg:w-1/2 h-[400px] relative">
                <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                    <div className="w-64 h-64 bg-quazar-primary/5 rounded-full blur-3xl"></div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={140}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} className="outline-none hover:opacity-80 transition-opacity duration-300" />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend 
                        verticalAlign="bottom" 
                        height={36} 
                        iconType="circle"
                        formatter={(value, entry: any) => <span className="text-gray-300 ml-2 font-medium">{value}</span>}
                    />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Info */}
            <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-bold text-white mb-8">Token Allocation</h2>
                <div className="space-y-6">
                    {data.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 glass-panel rounded-lg border-l-4 hover:translate-x-2 transition-transform" style={{ borderLeftColor: item.color }}>
                            <div>
                                <h4 className="text-white font-bold">{item.name}</h4>
                                <p className="text-xs text-gray-500 uppercase mt-1">
                                    {item.name === 'GPU Mining' ? '6 month Cliff • 1/60 per epoch' : 
                                     item.name === 'Team' ? '12 month Cliff • 5 year linear' : 
                                     item.name === 'ICO' ? '0 Cliff • 24 month linear' : 'Standard vesting'}
                                </p>
                            </div>
                            <div className="text-xl font-bold text-white">{item.value}%</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};