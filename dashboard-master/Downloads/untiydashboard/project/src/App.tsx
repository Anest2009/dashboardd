import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { TicketsPage } from './pages/TicketsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { SettingsPage } from './pages/SettingsPage';
import { ServerSelectionPage } from './pages/ServerSelectionPage';
import UserEmails from './pages/UserEmails';
import FutureBuyersPipeline from './pages/FutureBuyersPipeline';


function App() {
  return (
    <div className="dark min-h-screen bg-gradient-to-br from-dark-800 to-dark-900 text-white">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Toaster 
          position="top-right"
          toastOptions={{
            className: 'dark:bg-dark-700 dark:text-white',
            style: {
              background: '#1e293b',
              color: '#fff',
            },
          }}
        />
        <Routes>
        
          <Route path="/" element={<ServerSelectionPage />} />
          <Route path="/dashboard" element={<Layout />}>
          <Route path="manage-server/:id" element={<ServerSelectionPage />} /> 
            <Route index element={<Dashboard />} />
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="user-emails" element={<UserEmails />} />
            <Route path="future-buyers" element={<FutureBuyersPipeline />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;