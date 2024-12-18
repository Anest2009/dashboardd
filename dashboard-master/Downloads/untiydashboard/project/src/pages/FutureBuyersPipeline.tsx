import React, { useState } from 'react';
// Removed FontAwesome imports

const FutureBuyersPipeline = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const tableData = [
    {
      email: 'giver@gmail.com',
      leadDate: '12/12/2024',
      source: { name: 'Facebook' },
      leadScore: '25%',
      priority: 'High',
      timeline: '2 Weeks',
      reasonForDelay: {
        short: 'Too Expensive',
        full: "I can't buy it, it's expensive. The pricing is beyond my budget, and I need to consider other options that fit within my financial constraints. I hope to revisit this once I have a clearer budget."
      },
      ticketTranscripts: 'Transcript #12345',
    },
    {
      email: 'johndoe@gmail.com',
      leadDate: '10/7/2024',
      source: { name: 'Instagram' },
      leadScore: '67%',
      priority: 'Low',
      timeline: 'Not sure',
      reasonForDelay: {
        short: 'Budget constraints',
        full: 'I have budget constraints that prevent me from moving forward. Currently, I am evaluating my financial situation and looking for ways to allocate funds more effectively. I appreciate your understanding as I navigate this process.'
      },
      ticketTranscripts: 'Transcript #12346',
    },
    {
      email: 'janesmit@gmail.com',
      leadDate: '11/15/2024',
      source: { name: 'LinkedIn' }, 
      leadScore: '55%',
      priority: 'Medium',
      timeline: '3 Weeks',
      reasonForDelay: {
        short: 'Evaluating competitors',
        full: 'I am currently evaluating competitors before making a decision. It is crucial for me to ensure that I choose the best option available, and I want to compare features, pricing, and customer support before committing to a purchase.'
      },
      ticketTranscripts: 'Transcript #12347',
    },
    {
      email: 'mikebrown@gmail.com',
      leadDate: '9/22/2024',
      source: { name: 'Google Ads' }, 
      leadScore: '80%',
      priority: 'High',
      timeline: 'Not sure',
      reasonForDelay: {
        short: 'Final approval pending',
        full: 'I am waiting for final approval from my manager. The decision requires a thorough review, and I want to ensure that all stakeholders are on board before proceeding. I will keep you updated on any developments.'
      },
      ticketTranscripts: 'Transcript #12348',
    },
    {
      email: 'sarahlee@gmail.com',
      leadDate: '10/30/2024',
      source: { name: 'Twitter' }, 
      leadScore: '40%',
      priority: 'Low',
      timeline: '4 Weeks',
      reasonForDelay: {
        short: 'Need more information',
        full: 'I need more information before I can proceed. I am currently gathering data and insights to make an informed decision. Once I have all the necessary details, I will be in a better position to move forward.'
      },
      ticketTranscripts: 'Transcript #12349',
    },
    {
      email: 'tomwilson@gmail.com',
      leadDate: '11/5/2024',
      source: { name: 'Referral' }, 
      leadScore: '75%',
      priority: 'High',
      timeline: 'Not sure',
      reasonForDelay: {
        short: 'Contract review',
        full: 'I am currently reviewing the contract details. It is essential for me to understand all terms and conditions before signing. I want to ensure that everything aligns with our expectations and requirements.'
      },
      ticketTranscripts: 'Transcript #12350',
    }
  ];

  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  
  const filteredData = tableData.filter(row =>
    row.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const openModal = (fullMessage: string) => {
    setSelectedMessage(fullMessage);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };

  return (
    <div className="w-full p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Search Bar */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search by email..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full pl-12 pr-6 py-3 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gray-600">
        <table className="w-full min-w-max text-left text-gray-200 rounded-lg">
          <thead className="text-xs font-medium text-gray-400 bg-gray-800 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3">User</th>
              <th className="px-6 py-3 text-center">Lead date</th>
              <th className="px-6 py-3 text-center">Source</th>
              <th className="px-6 py-3 text-center">Lead score</th>
              <th className="px-6 py-3 text-center">Priority</th>
              <th className="px-6 py-3 text-center">Purchase Timelines</th>
              <th className="px-6 py-3 text-center">Reason for delay</th>
              <th className="px-6 py-3 text-center">Ticket transcripts</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-700 hover:bg-gray-800 transition duration-200"
              >
                <td className="px-6 py-4 flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-xs text-white">
                    {row.email.charAt(0).toUpperCase()}
                  </div>
                  <span className="truncate max-w-xs">{row.email}</span>
                </td>
                <td className="px-6 py-4 text-sm text-center">{row.leadDate}</td>
                <td className="px-6 py-4 text-sm text-center flex items-center justify-center">
                  <span className="bg-green-500/20 text-green-400 py-1 px-2 rounded-full">
                    {row.source.name}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-center">
                  <span
                    className={`font-medium ${
                      parseInt(row.leadScore) < 50
                        ? 'text-red-500'
                        : 'text-green-500'
                    }`}
                  >
                    {row.leadScore}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-center">
                  <span
                    className={`py-1 px-2 rounded-full text-xs ${
                      row.priority === 'High'
                        ? 'bg-red-500/20 text-red-400'
                        : row.priority === 'Medium'
                        ? 'bg-orange-500/20 text-orange-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}
                  >
                    {row.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-center">
                  <span
                    className="py-1 px-2 rounded-full text-xs"
                    style={{
                      backgroundColor: '#302011', 
                      color: '#EBCA50', 
                    }}
                  >
                    {row.timeline}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-center truncate max-w-xs">
                  <div>
                    <span className="font-bold">{row.reasonForDelay.short}</span>
                    <br />
                    <span className="text-gray-400 cursor-pointer" onClick={() => openModal(row.reasonForDelay.full)}>
                      Read more
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-center truncate max-w-xs">
                  {row.ticketTranscripts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for displaying full message */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-bold text-white">Full Message</h2>
            <p className="mt-2 text-gray-300">{selectedMessage}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FutureBuyersPipeline;
