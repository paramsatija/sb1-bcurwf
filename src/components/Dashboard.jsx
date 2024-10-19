import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Calendar, Users, BarChart2, Settings, Briefcase, MessageSquare } from 'lucide-react';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DashboardCard
              title="Omnichannel Chat"
              icon={<MessageCircle className="h-8 w-8 text-blue-500" />}
              description="Interact across multiple platforms"
              link="/chat"
            />
            <DashboardCard
              title="Calendar"
              icon={<Calendar className="h-8 w-8 text-green-500" />}
              description="Manage your schedule"
              link="/calendar"
            />
            <DashboardCard
              title="Lead Management"
              icon={<Users className="h-8 w-8 text-purple-500" />}
              description="Track and prioritize leads"
              link="/leads"
            />
            <DashboardCard
              title="Campaign Monitoring"
              icon={<BarChart2 className="h-8 w-8 text-yellow-500" />}
              description="Analyze campaign performance"
              link="/campaigns"
            />
            <DashboardCard
              title="CRM Integration"
              icon={<Briefcase className="h-8 w-8 text-red-500" />}
              description="Connect with Salesforce and HubSpot"
              link="/crm"
            />
            <DashboardCard
              title="Social Platforms"
              icon={<MessageSquare className="h-8 w-8 text-indigo-500" />}
              description="Manage social media interactions"
              link="/social"
            />
            <DashboardCard
              title="Settings"
              icon={<Settings className="h-8 w-8 text-gray-500" />}
              description="Configure your preferences"
              link="/settings"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

function DashboardCard({ title, icon, description, link }) {
  return (
    <Link to={link} className="block">
      <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">{icon}</div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
                <dd>
                  <div className="text-lg font-medium text-gray-900">{description}</div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Dashboard;