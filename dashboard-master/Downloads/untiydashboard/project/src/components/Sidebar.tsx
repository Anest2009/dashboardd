import React, { useState } from 'react';
import { Bot, BarChart2, Ticket, Settings, Menu, X, Sun, Moon, Server } from 'lucide-react';
import { NavLink } from './NavLink';

// Define the props interface
interface SidebarProps {
    isCollapsed: boolean;
    setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
    const [isDark, setIsDark] = useState(true);

    return (
        <div className={`fixed left-0 top-0 h-full bg-gray-900 border-r border-gray-800 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <div className="flex items-center gap-2">
                    <Bot className="w-8 h-8 text-orange-400" />
                    {!isCollapsed && <h1 className="text-white text-xl font-bold">SalesBot</h1>}
                </div>
                <button 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                    {isCollapsed ? <Menu className="w-5 h-5 text-gray-400" /> : <X className="w-5 h-5 text-gray-400" />}
                </button>
            </div>

            <nav className="p-4 space-y-2">
                <NavLink to="/" icon={BarChart2} collapsed={isCollapsed}>Dashboard</NavLink>
                <NavLink to="/tickets" icon={Ticket} collapsed={isCollapsed}>Tickets</NavLink>
                <NavLink to="/analytics" icon={BarChart2} collapsed={isCollapsed}>Analytics</NavLink>
                <NavLink to="/settings" icon={Settings} collapsed={isCollapsed}>Settings</NavLink>
                <NavLink to="/select-server" icon={Server} collapsed={isCollapsed}>Select Server</NavLink>
            </nav>

            <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-800">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
                >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    {!isCollapsed && <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>}
                </button>
                
                {/* Profile Section */}
                <div className={`mt-4 flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-900/70 ${isCollapsed ? 'justify-center' : ''}`}>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop"
                            alt="Profile"
                            className="w-10 h-10 rounded-full border-2 border-orange-400"
                        />
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
                    </div>
                    {!isCollapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="text-white font-medium truncate">John Doe</p>
                            <p className="text-gray-400 text-sm truncate">Administrator</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}