import { useState } from 'react';
import type { Ticket } from '../types';

const initialTickets: Ticket[] = [
  {
    id: '1',
    title: 'Integration Issue with Discord API',
    status: 'open',
    priority: 'high',
    createdAt: new Date('2024-03-10'),
    owner: 'Jane Cooper',
    assignedAgent: 'Alex Smith',
    server: 'Gaming Community'
  },
  {
    id: '2',
    title: 'Bot Configuration Error',
    status: 'in_progress',
    priority: 'medium',
    createdAt: new Date('2024-03-11'),
    owner: 'John Doe',
    assignedAgent: 'Sarah Johnson',
    server: 'Tech Support'
  },
  {
    id: '3',
    title: 'Payment Processing Failed',
    status: 'open',
    priority: 'high',
    createdAt: new Date('2024-03-12'),
    owner: 'Robert Chen',
    assignedAgent: 'Mike Wilson',
    server: 'E-commerce Hub'
  },
  {
    id: '4',
    title: 'Automated Response Issue',
    status: 'resolved',
    priority: 'low',
    createdAt: new Date('2024-03-09'),
    owner: 'Emma Watson',
    assignedAgent: 'David Miller',
    server: 'Customer Support'
  },
  {
    id: '5',
    title: 'Server Performance Degradation',
    status: 'in_progress',
    priority: 'high',
    createdAt: new Date('2024-03-11'),
    owner: 'Michael Scott',
    assignedAgent: 'Jim Halpert',
    server: 'Gaming Community'
  },
  {
    id: '6',
    title: 'Custom Command Not Working',
    status: 'open',
    priority: 'medium',
    createdAt: new Date('2024-03-12'),
    owner: 'Pam Beesly',
    assignedAgent: 'Unassigned',
    server: 'Developer Hub'
  },
  {
    id: '7',
    title: 'User Authentication Failed',
    status: 'resolved',
    priority: 'high',
    createdAt: new Date('2024-03-08'),
    owner: 'Dwight Schrute',
    assignedAgent: 'Angela Martin',
    server: 'Security Team'
  },
  {
    id: '8',
    title: 'Webhook Integration Down',
    status: 'in_progress',
    priority: 'medium',
    createdAt: new Date('2024-03-11'),
    owner: 'Oscar Martinez',
    assignedAgent: 'Kevin Malone',
    server: 'Integration Team'
  }
];

export function useTickets() {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

  const createTicket = (newTicket: Omit<Ticket, 'id' | 'createdAt'>) => {
    const ticket: Ticket = {
      ...newTicket,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date()
    };
    setTickets(prev => [ticket, ...prev]);
  };

  const updateTicket = (id: string, updates: Partial<Ticket>) => {
    setTickets(prev => prev.map(ticket => 
      ticket.id === id ? { ...ticket, ...updates } : ticket
    ));
  };

  return {
    tickets,
    createTicket,
    updateTicket
  };
}