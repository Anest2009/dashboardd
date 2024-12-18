import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import type { Ticket } from '../types';
import FutureBuyersPipeline from './pages/FutureBuyersPipeline';

interface CreateTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (ticket: Omit<Ticket, 'id' | 'createdAt'>) => void;
}

export function CreateTicketModal({ isOpen, onClose, onSubmit }: CreateTicketModalProps) {
  const [title, setTitle] = useState('');
  const [server, setServer] = useState('');
  const [priority, setPriority] = useState<Ticket['priority']>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      server,
      priority,
      status: 'open',
      owner: 'John Doe',
      assignedAgent: 'Unassigned'
    });
    onClose();
    setTitle('');
    setServer('');
    setPriority('medium');
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-[#0F1014] rounded-xl p-6 max-w-md w-full border border-gray-800">
          <Dialog.Title className="text-[#FFFFFF] text-lg font-semibold">
            Create New Ticket
          </Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#0A0A0B] border border-gray-800 text-[#FFFFFF] focus:border-[#FF7E39]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Server
              </label>
              <input
                type="text"
                value={server}
                onChange={(e) => setServer(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[#0A0A0B] border border-gray-800 text-[#FFFFFF] focus:border-[#FF7E39]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary mb-1">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as Ticket['priority'])}
                className="w-full px-4 py-2 rounded-lg bg-[#0A0A0B] border border-gray-800 text-[#FFFFFF] focus:border-[#FF7E39]"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-secondary hover:text-primary hover:bg-background-secondary rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#FF7E39] text-white rounded-lg hover:opacity-90"
              >
                Create Ticket
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}