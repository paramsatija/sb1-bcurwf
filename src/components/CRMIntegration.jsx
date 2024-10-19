import React, { useState } from 'react';
import { Briefcase, RefreshCw } from 'lucide-react';
import Sidebar from './Sidebar';

const crmSystems = [
  { name: 'Salesforce', color: 'bg-blue-500' },
  { name: 'HubSpot', color: 'bg-orange-500' },
];

function CRMIntegration() {
  const [selectedCRM, setSelectedCRM] = useState(crmSystems[0]);
  const [crmData, setCrmData] = useState({
    leads: 150,
    opportunities: 45,
    closedDeals: 20,
  });

  const refreshCRMData = () => {
    // Simulate fetching new data
    setCrmData({
      leads: Math.floor(Math.random() * 200) + 100,
      opportunities: Math.floor(Math.random() * 50) + 30,
      closedDeals: Math.floor(Math.random() * 30) + 10,
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">CRM Integration</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">CRM Dashboard</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Connected to {selectedCRM.name}</p>
              </div>
              <div className="flex space-x-4">
                {crmSystems.map((crm) => (
                  <button
                    key={crm.name}
                    onClick={() => setSelectedCRM(crm)}
                    className={`px-4 py-2 rounded-md text-white ${crm.color}`}
                  >
                    {crm.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Total Leads</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{crmData.leads}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Open Opportunities</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{crmData.opportunities}</dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Closed Deals</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{crmData.closedDeals}</dd>
                </div>
              </dl>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={refreshCRMData}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Refresh Data
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CRMIntegration;