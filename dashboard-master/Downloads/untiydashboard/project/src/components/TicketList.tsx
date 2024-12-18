import React from 'react';
import { format } from 'date-fns';
import { Clock, AlertCircle, CheckCircle } from 'lucide-react';
import type { Ticket } from '../types';

const statusIcons = {
  open: AlertCircle,
  in_progress: Clock,
  resolved: CheckCircle,
};

const statusColors = {
  open: 'bg-red-100 text-red-800',
  in_progress: 'bg-yellow-100 text-yellow-800',
  resolved: 'bg-green-100 text-green-800',
};

interface TicketListProps {
  tickets: Ticket[];
}

export function TicketList({ tickets }: TicketListProps) {
  return (
    <div className="bg-[#0F1014] rounded-xl">
      <table className="w-full">
        <thead className="bg-[#0A0A0B]">
          <tr>
            <th className="text-[#B0B0B0] text-left px-6 py-3">
              Ticket
            </th>
            <th className="text-[#B0B0B0] text-left px-6 py-3">
              Status
            </th>
            <th className="text-[#B0B0B0] text-left px-6 py-3">
              Owner
            </th>
            <th className="text-[#B0B0B0] text-left px-6 py-3">
              Created
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {tickets.map((ticket) => {
            const StatusIcon = statusIcons[ticket.status];
            return (
              <tr key={ticket.id} className="hover:bg-[#0A0A0B]">
                <td className="px-6 py-4">
                  <div className="text-[#FFFFFF]">{ticket.title}</div>
                  <div className="text-[#B0B0B0]">{ticket.server}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[ticket.status]}`}>
                    <StatusIcon className="w-4 h-4 mr-1" />
                    {ticket.status.replace('_', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-[#B0B0B0]">
                  {ticket.owner}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-[#B0B0B0]">
                  {format(ticket.createdAt, 'MMM d, yyyy')}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}