import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Good morning! Here's your daily brief:", sender: 'assistant' },
    { id: 2, text: "- Meeting with John Doe at 10 AM\n- Follow up with lead: Sarah from TechCorp\n- Campaign 'Summer Sale' performance update available", sender: 'assistant' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: input, sender: 'user' }]);
      setInput('');
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { id: prev.length + 1, text: "I've received your message. How can I assist you further?", sender: 'assistant' }]);
      }, 1000);
    }
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-md">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg ${message.sender === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {message.text}
            </div>
            {message.sender === 'assistant' && (
              <div className="mt-2 flex justify-start space-x-2">
                <button className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">Confirm</button>
                <button className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">Set Reminder</button>
                <button className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">Send Follow-Up</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-gray-200 p-2 rounded-r-lg" onClick={() => {}}>
            <Paperclip size={20} className="text-gray-600" />
          </button>
          <button className="bg-indigo-500 text-white p-2 rounded-lg ml-2" onClick={handleSend}>
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;