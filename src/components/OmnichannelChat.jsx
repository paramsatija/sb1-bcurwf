import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';
import Sidebar from './Sidebar';

const platforms = [
  { name: 'WhatsApp', color: 'bg-green-500' },
  { name: 'Slack', color: 'bg-purple-500' },
  { name: 'Discord', color: 'bg-indigo-500' },
  { name: 'iMessage', color: 'bg-blue-500' },
  { name: 'Telegram', color: 'bg-sky-500' },
];

function OmnichannelChat() {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { text: inputMessage, sender: 'user', platform: selectedPlatform.name }]);
      setInputMessage('');
      // Simulate AI response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { 
          text: `AI response from ${selectedPlatform.name}`, 
          sender: 'ai', 
          platform: selectedPlatform.name 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Omnichannel Chat</h1>
          </div>
        </header>
        <div className="flex-1 overflow-hidden flex">
          <div className="w-64 bg-white border-r">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-4">Platforms</h2>
              {platforms.map((platform) => (
                <button
                  key={platform.name}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`w-full text-left p-2 rounded mb-2 ${
                    selectedPlatform.name === platform.name ? platform.color + ' text-white' : 'bg-gray-100'
                  }`}
                >
                  {platform.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  } mb-4`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-800 border border-gray-300'
                    }`}
                  >
                    <p className="text-sm text-gray-500 mb-1">{message.platform}</p>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="bg-white p-4 border-t border-gray-200">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={`Type a message for ${selectedPlatform.name}...`}
                  className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="bg-gray-100 text-gray-600 px-4 py-2 border border-gray-300 border-l-0"
                >
                  <Paperclip className="h-5 w-5" />
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OmnichannelChat;