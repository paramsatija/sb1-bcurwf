import React, { useState } from 'react';
import { BarChart2, TrendingUp, TrendingDown } from 'lucide-react';
import Sidebar from './Sidebar';

function CampaignMonitoring() {
  const [campaigns, setCampaigns] = useState([
    { id: 1, name: 'Summer Sale', performance: 'High', clicks: 15000, conversions: 1200, revenue: 50000 },
    { id: 2, name: 'New Product Launch', performance: 'Medium', clicks: 10000, conversions: 800, revenue: 30000 },
    { id: 3, name: 'Holiday Special', performance: 'Low', clicks: 5000, conversions: 300, revenue: 15000 },
  ]);

  const performanceColors = {
    High: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-red-100 text-red-800',
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Campaign Monitoring</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <li key={campaign.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BarChart2 className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
                      <p className="text-sm font-medium text-indigo-600 truncate">{campaign.name}</p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${performanceColors[campaign.performance]}`}>
                        {campaign.performance} Performance
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <TrendingUp className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        {campaign.clicks.toLocaleString()} clicks
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <TrendingDown className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        {campaign.conversions.toLocaleString()} conversions
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p className="font-medium text-gray-900">${campaign.revenue.toLocaleString()} revenue</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CampaignMonitoring;