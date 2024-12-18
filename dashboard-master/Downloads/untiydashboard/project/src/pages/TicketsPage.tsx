import React, { useState, useMemo } from 'react'; // Add useState and useMemo here
import { Plus, Search, Filter } from 'lucide-react';
import { TicketList } from '../components/TicketList';
import { CreateTicketModal } from '../components/CreateTicketModal';
import { useTickets } from '../hooks/useTickets';

export function TicketsPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { tickets, createTicket } = useTickets();

  const filteredTickets = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return tickets.filter(ticket => 
      ticket.title.toLowerCase().includes(query) ||
      ticket.server.toLowerCase().includes(query) ||
      ticket.owner.toLowerCase().includes(query) ||
      ticket.status.toLowerCase().includes(query)
    );
  }, [tickets, searchQuery]);

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Tickets</h1>
          <p className="text-gray-400">Manage and track all support tickets</p>
        </div>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Ticket
        </button>
      </div>

      <div className="bg-[#0F1014] rounded-xl p-4 mb-6 border border-gray-800/50">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B0B0B0] w-5 h-5" />
            <input
              type="text"
              placeholder="Search tickets by title, server, owner, or status..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0A0A0B] border border-gray-800 text-[#FFFFFF] focus:outline-none focus:border-[#FF7E39] transition-colors"
            />
          </div>
          <button className="px-4 py-2 border border-gray-800 rounded-lg flex items-center gap-2 text-[#B0B0B0] hover:text-[#FFFFFF] hover:border-[#FF7E39] transition-colors">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      <TicketList tickets={filteredTickets} />

      <CreateTicketModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={createTicket}
      />
    </>
  );
}