export interface Ticket {
  id: string;
  title: string;
  status: 'open' | 'in_progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  owner: string;
  assignedAgent: string;
  server: string;
}

export interface BotStats {
  activeUsers: number;
  totalTickets: number;
  resolvedTickets: number;
  averageResponseTime: number;
}