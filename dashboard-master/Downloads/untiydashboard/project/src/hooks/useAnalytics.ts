import { useState } from 'react';
import { Users, MessageSquare, TrendingUp } from 'lucide-react';

export function useAnalytics() {
  const [metrics] = useState([
    {
      id: '1',
      title: 'Total Users',
      value: '12,345',
      change: { value: 12, trend: 'up' as const },
      icon: Users
    },
    {
      id: '2',
      title: 'Messages Sent',
      value: '48,234',
      change: { value: 8, trend: 'up' as const },
      icon: MessageSquare
    },
    {
      id: '3',
      title: 'Conversion Rate',
      value: '3.2%',
      change: { value: 2, trend: 'down' as const },
      icon: TrendingUp
    }
  ]);

  const [serverData] = useState([
    {
      id: '1',
      name: 'Gaming Community',
      members: 15234,
      activity: 78,
      growth: 12
    },
    {
      id: '2',
      name: 'Tech Support',
      members: 8456,
      activity: 92,
      growth: 24
    },
    {
      id: '3',
      name: 'Developer Hub',
      members: 6234,
      activity: 85,
      growth: -5
    }
  ]);

  const [activityData] = useState([
    { name: 'Mon', value: 4000 },
    { name: 'Tue', value: 3000 },
    { name: 'Wed', value: 6000 },
    { name: 'Thu', value: 8000 },
    { name: 'Fri', value: 5000 },
    { name: 'Sat', value: 4000 },
    { name: 'Sun', value: 7000 }
  ]);

  const [growthData] = useState([
    { name: 'Week 1', value: 1000 },
    { name: 'Week 2', value: 2000 },
    { name: 'Week 3', value: 3000 },
    { name: 'Week 4', value: 5000 }
  ]);

  return {
    metrics,
    serverData,
    activityData,
    growthData
  };
}