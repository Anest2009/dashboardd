import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface Server {
  id: string;
  name: string;
  members: number;
  activity: number;
  growth: number;
}

interface ServerListProps {
  servers: Server[];
}

export function ServerList({ servers }: ServerListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500">
            <th className="pb-4">Server</th>
            <th className="pb-4">Members</th>
            <th className="pb-4">Activity</th>
            <th className="pb-4">Growth</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {servers.map((server) => (
            <tr key={server.id}>
              <td className="py-4">
                <span className="text-white">{server.name}</span>
              </td>
              <td className="py-4 text-gray-400">
                {server.members.toLocaleString()}
              </td>
              <td className="py-4">
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500"
                      style={{ width: `${server.activity}%` }}
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-400">
                    {server.activity}%
                  </span>
                </div>
              </td>
              <td className="py-4">
                <span className={`flex items-center ${
                  server.growth > 0 ? 'text-emerald-500' : 'text-red-500'
                }`}>
                  {server.growth > 0 ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {Math.abs(server.growth)}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}