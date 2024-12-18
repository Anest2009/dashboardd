import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface Settings {
  botName: string;
  botAvatar: string;
  notifications: {
    newTickets: boolean;
    updates: boolean;
    reports: boolean;
  };
}

const initialSettings: Settings = {
  botName: 'SalesBot',
  botAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop',
  notifications: {
    newTickets: true,
    updates: true,
    reports: true
  }
};

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(initialSettings);

  const updateSettings = (updates: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...updates }));
    toast.success('Settings updated successfully!');
  };

  return {
    settings,
    updateSettings
  };
}