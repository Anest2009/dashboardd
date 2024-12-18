import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function StatsCard({ title, value, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-orange-500/20 rounded-lg">
          <Icon className="w-6 h-6 text-orange-400" />
        </div>
        {trend && (
          <span className={`text-sm font-medium ${
            trend.isPositive ? 'text-emerald-500' : 'text-red-500'
          }`}>
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
          </span>
        )}
      </div>
      <div>
        <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
        <p className="text-white text-3xl font-bold tracking-tight">{value}</p>
      </div>
    </div>
  );
}