import React from 'react';
import { Chart } from '../components/Chart';
import { StatsCard } from '../components/StatsCard';
import { ServerList } from '../components/analytics/ServerList';
import { Users, MessageSquare, TrendingUp, Target } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

export function AnalyticsPage() {
  const { metrics, serverData, activityData, growthData } = useAnalytics();

  const analyticsStats = [
    {
      title: "Total Users",
      value: "12,345",
      icon: Users,
      trend: { value: 12, isPositive: true }
    },
    {
      title: "Messages Sent",
      value: "48,234",
      icon: MessageSquare,
      trend: { value: 8, isPositive: true }
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      icon: Target,
      trend: { value: 2, isPositive: true }
    },
    {
      title: "Growth Rate",
      value: "+24%",
      icon: TrendingUp,
      trend: { value: 5, isPositive: true }
    }
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Analytics</h1>
        <p className="text-gray-400">
          Detailed insights into your bot's performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {analyticsStats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Chart data={activityData} title="Daily Active Users" />
        <Chart data={growthData} title="User Growth" />
      </div>

      <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
        <h2 className="text-xl font-bold mb-6 text-white">Top Performing Servers</h2>
        <ServerList servers={serverData} />
      </div>
    </>
  );
}