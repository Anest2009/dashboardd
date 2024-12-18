import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: {
    value: number;
    trend: 'up' | 'down';
  };
  icon: LucideIcon;
}

export function MetricCard({ title, value, change, icon: Icon }: MetricCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="p-2 bg-orange-100 dark:bg-orange-800/20 rounded-md">
          <Icon className="w-5 h-5 text-orange-500" />
        </div>
        <span className={`text-sm font-medium ${
          change.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
        }`}>
          {change.trend === 'up' ? '+' : '-'}{Math.abs(change.value)}%
        </span>
      </div>
      <div className="mt-2">
        <h3 className="text-sm text-gray-600 dark:text-gray-300">{title}</h3>
        <p className="text-xl font-semibold mt-1 dark:text-white">{value}</p>
      </div>
    </div>
  );
}