import React from 'react';
import { Users, MessageSquare, Clock, Activity } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';
import { TicketList } from '../components/TicketList';
import { Chart } from '../components/Chart';
import { useTickets } from '../hooks/useTickets';

export function Dashboard() {
  const { tickets } = useTickets();

  const chartData = [
    { name: 'Mon', value: 400 },
    { name: 'Tue', value: 300 },
    { name: 'Wed', value: 600 },
    { name: 'Thu', value: 800 },
    { name: 'Fri', value: 500 },
    { name: 'Sat', value: 400 },
    { name: 'Sun', value: 700 }
  ];

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's what's happening with your bot.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Active Users"
          value="1,234"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Total Tickets"
          value={tickets.length}
          icon={MessageSquare}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Avg. Response Time"
          value="2.4h"
          icon={Clock}
          trend={{ value: 5, isPositive: false }}
        />
        <StatsCard
          title="Success Rate"
          value="94%"
          icon={Activity}
          trend={{ value: 2, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Chart data={chartData} title="User Activity" />
        <Chart data={chartData} title="Tickets Created" />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Recent Tickets</h2>
        <TicketList tickets={tickets.slice(0, 5)} />
      </div>
    </>
  );
}