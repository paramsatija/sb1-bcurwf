import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, Calendar, Users, BarChart2, Settings, LogOut } from 'lucide-react';

function Sidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Chat', icon: MessageCircle, path: '/chat' },
    { name: 'Calendar', icon: Calendar, path: '/calendar' },
    { name: 'Leads', icon: Users, path: '/leads' },
    { name: 'Campaigns', icon: BarChart2, path: '/campaigns' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  return (
    <div className="flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white font-bold text-lg">AI Sales Assistant</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white ${
                  location.pathname === item.path ? 'bg-gray-700 text-white' : ''
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <button className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded">
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;