import React, { useState } from 'react';

// Types
interface User {
  email: string;
  ticketTranscripts: string;
  interactionOverview: string;
  emailOpened: boolean;
  sourceReferral: string;
  discord: boolean;
  tags: string[];
  leadScore: number;
  leadDate: string;
  joined: string;
  pfpUrl: string;
}

// Expanded mock data
const mockUsers: User[] = [
  {
    email: 'sarah.parker@gmail.com',
    ticketTranscripts: '#12345 - Payment Processing Issue',
    interactionOverview: 'High engagement, multiple inquiries',
    emailOpened: true,
    sourceReferral: 'LinkedIn',
    discord: true,
    tags: ['P', 'R'],
    leadScore: 85,
    leadDate: '12/4/2024',
    joined: '2 hours ago',
    pfpUrl: '/api/placeholder/40/40'
  },
  {
    email: 'james.wilson@outlook.com',
    ticketTranscripts: '#54321 - Feature Request',
    interactionOverview: 'Active in community discussions',
    emailOpened: false,
    sourceReferral: 'Twitter',
    discord: true,
    tags: ['P'],
    leadScore: 72,
    leadDate: '10/7/2024',
    joined: '1 day ago',
    pfpUrl: '/api/placeholder/40/40'
  },
  {
    email: 'robert.jhonson@outlook.com',
    ticketTranscripts: '#54521 - Feature Request',
    interactionOverview: 'Active in community discussions',
    emailOpened: false,
    sourceReferral: 'Twitter',
    discord: true,
    tags: ['P'],
    leadScore: 72,
    leadDate: '10/7/2024',
    joined: '1 day ago',
    pfpUrl: '/api/placeholder/40/40'
  },
  {
    email: 'james.wilson@outlook.com',
    ticketTranscripts: '#54321 - Feature Request',
    interactionOverview: 'Active in community discussions',
    emailOpened: false,
    sourceReferral: 'Twitter',
    discord: true,
    tags: ['P'],
    leadScore: 72,
    leadDate: '10/7/2024',
    joined: '1 day ago',
    pfpUrl: '/api/placeholder/40/40'
  },
  {
    email: 'james.wilson@outlook.com',
    ticketTranscripts: '#54321 - Feature Request',
    interactionOverview: 'Active in community discussions',
    emailOpened: false,
    sourceReferral: 'Twitter',
    discord: true,
    tags: ['P'],
    leadScore: 72,
    leadDate: '10/7/2024',
    joined: '1 day ago',
    pfpUrl: '/api/placeholder/40/40'
  },
  {
    email: 'james.wilson@outlook.com',
    ticketTranscripts: '#54321 - Feature Request',
    interactionOverview: 'Active in community discussions',
    emailOpened: false,
    sourceReferral: 'Twitter',
    discord: true,
    tags: ['P'],
    leadScore: 72,
    leadDate: '10/7/2024',
    joined: '1 day ago',
    pfpUrl: '/api/placeholder/40/40'
  },
];

// User Table Component
const UserTable = ({ users }: { users: User[] }) => {
  return (
    <div className="w-full p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <div className="overflow-x-auto overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
        <table className="w-full min-w-max text-left text-gray-200 rounded-lg">
          <thead className="text-xs font-medium uppercase text-gray-400 bg-gray-800 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3">User</th>
              <th className="px-6 py-3 whitespace-nowrap">Lead Date</th>
              <th className="px-6 py-3">Source</th>
              <th className="px-6 py-3">Lead Score</th>
              <th className="px-6 py-3">Email Status</th>
              <th className="px-6 py-3">Ticket Transcripts</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition duration-200">
                <td className="px-6 py-4 flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-xs text-white">
                    {user.email.charAt(0).toUpperCase()}
                  </div>
                  <span className="truncate max-w-xs">{user.email}</span>
                </td>
                <td className="px-6 py-4 text-sm">{user.leadDate}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="bg-green-500/20 text-green-400 py-1 px-2 rounded-full">
                    {user.sourceReferral}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className={`font-medium ${user.leadScore < 50 ? 'text-red-500' : 'text-green-500'}`}>
                    {user.leadScore}%
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className={`py-1 px-2 rounded-full ${user.emailOpened ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {user.emailOpened ? 'Opened' : 'Closed'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm truncate max-w-xs">
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    {user.ticketTranscripts}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// UserEmails Component with Search
const UserEmails = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Step 1: State for search query

  // Step 2: Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = mockUsers.filter((user) =>
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-gray-900 p-8 rounded-lg">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search by email..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full pl-12 pr-6 py-3 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mx-auto">
        <UserTable users={filteredUsers} />
      </div>
    </div>
  );
};

export default UserEmails;