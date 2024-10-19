import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import OmnichannelChat from './components/OmnichannelChat';
import LeadManagement from './components/LeadManagement';
import Calendar from './components/Calendar';
import CampaignMonitoring from './components/CampaignMonitoring';
import CRMIntegration from './components/CRMIntegration';
import Settings from './components/Settings';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/chat"
            element={
              isAuthenticated ? (
                <OmnichannelChat />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/leads"
            element={
              isAuthenticated ? (
                <LeadManagement />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/calendar"
            element={
              isAuthenticated ? (
                <Calendar />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/campaigns"
            element={
              isAuthenticated ? (
                <CampaignMonitoring />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/crm"
            element={
              isAuthenticated ? (
                <CRMIntegration />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/settings"
            element={
              isAuthenticated ? (
                <Settings />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;