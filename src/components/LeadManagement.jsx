import React, { useState } from 'react';
import { Star, Phone, Mail } from 'lucide-react';
import Sidebar from './Sidebar';

function LeadManagement() {
  const [leads, setLeads] = useState([
    { id: 1, name: 'John Doe', company: 'Tech Corp', priority: 'High', email: 'john@techcorp.com', phone: '+1 234 567 8901' },
    { id: 2, name: 'Jane Smith', company: 'Design Inc', priority: 'Medium', email: 'jane@designinc.com', phone: '+1 987 654 3210' },
    { id: 3, name: 'Bob Johnson', company: 'Sales Co', priority: 'Low', email: 'bob@salesco.com', phone: '+1 456 789 0123' },
  ]);

  const priorityColors = {
    High: 'bg-red-100 text-red-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Low: 'bg-green-100 text-green-800',
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Lead Management</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-gray-200">
              {leads.map((lead) => (
                <li key={lead.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="flex-shrink-0 mr-2 h-5 w-5 text-yellow-400" />
                      <p className="text-sm font-medium text-indigo-600 truncate">{lead.name}</p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${priorityColors[lead.priority]}`}>
                        {lead.priority} Priority
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        {lead.company}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <Mail className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                      <p>{lead.email}</p>
                      <Phone className="flex-shrink-0 ml-4 mr-1.5 h-5 w-5 text-gray-400" />
                      <p>{lead.phone}</p>
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

export default LeadManagement;