import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
  title: string;
}

export function Chart({ data, title }: ChartProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
      <h3 className="text-white text-lg font-medium mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF6F20" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#FF6F20" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#374151" 
              vertical={false}
            />
            <XAxis 
              dataKey="name" 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              axisLine={{ stroke: '#374151' }}
            />
            <YAxis 
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              axisLine={{ stroke: '#374151' }}
              tickLine={{ stroke: '#374151' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                padding: '8px 12px'
              }}
              itemStyle={{ color: '#ffffff' }}
              labelStyle={{ color: '#9ca3af' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#FF6F20"
              strokeWidth={2}
              fill="url(#colorGradient)"
              dot={{ fill: '#FF6F20', strokeWidth: 2 }}
              activeDot={{ 
                r: 6, 
                fill: '#FF6F20',
                stroke: '#ffffff',
                strokeWidth: 2
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}