import React from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const CalendarWidget = () => {
  const events = [
    { id: 1, title: 'Meeting with John Doe', time: '10:00 AM', priority: 'high' },
    { id: 2, title: 'Product Demo for XYZ Corp', time: '2:00 PM', priority: 'medium' },
    { id: 3, title: 'Team Sync', time: '4:30 PM', priority: 'low' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <CalendarIcon className="mr-2" /> Calendar
      </h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
            <div className={`w-2 h-2 rounded-full mr-3 ${
              event.priority === 'high' ? 'bg-red-500' :
              event.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
            }`}></div>
            <div className="flex-1">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600 flex items-center">
                <Clock size={14} className="mr-1" /> {event.time}
              </p>
            </div>
            <button className="text-indigo-600 hover:text-indigo-800">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;