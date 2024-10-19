import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react';
import Sidebar from './Sidebar';

function Calendar() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Team Meeting', date: '2023-06-15', time: '10:00 AM', attendees: 5 },
    { id: 2, title: 'Client Call', date: '2023-06-16', time: '2:00 PM', attendees: 2 },
    { id: 3, title: 'Product Demo', date: '2023-06-17', time: '11:00 AM', attendees: 3 },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Upcoming Events</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              {events.map((event) => (
                <li key={event.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CalendarIcon className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" />
                      <p className="text-sm font-medium text-indigo-600 truncate">{event.title}</p>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {event.date}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        {event.time}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <Users className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                        {event.attendees} attendees
                      </p>
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

export default Calendar;