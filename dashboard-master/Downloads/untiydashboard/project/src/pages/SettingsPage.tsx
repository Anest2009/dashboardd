
import { Bot, User, Bell, Shield } from 'lucide-react';
import { useSettings } from '../hooks/useSettings';

export function SettingsPage() {
  const { settings, updateSettings } = useSettings();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-400">Manage your bot and account preferences</p>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-900 rounded-lg p-4">
          <h2 className="text-white text-lg font-bold">Settings</h2>
          <p className="text-gray-400">Manage your bot settings</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-800/20 rounded-md">
              <Bot className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h2 className="text-md font-semibold dark:text-white">Bot Settings</h2>
              <p className="text-gray-600 dark:text-gray-400">Configure your bot's appearance and behavior</p>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Bot Name
              </label>
              <input
                type="text"
                value={settings.botName}
                onChange={(e) => updateSettings({ botName: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Bot Avatar URL
              </label>
              <input
                type="text"
                value={settings.botAvatar}
                onChange={(e) => updateSettings({ botAvatar: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-orange-500 rounded-md">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-md font-semibold dark:text-white">Notification Settings</h2>
              <p className="text-gray-600 dark:text-gray-400">Configure how you receive notifications</p>
            </div>
          </div>

          <div className="space-y-2">
            {['New ticket notifications', 'Ticket updates', 'Daily reports'].map((setting) => (
              <div key={setting} className="flex items-center justify-between">
                <span className="text-gray-300">{setting}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-orange-500"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:opacity-90">
        Save Changes
      </button>
    </div>
  );
}
