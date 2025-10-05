import React, { useState } from 'react';
import Card from '../ui/Card';

const WhatsAppChat = () => {
  const [selectedChat, setSelectedChat] = useState(0);

  const chatMessages = [
    {
      id: 1,
      name: "Sarah M.",
      avatar: "/avatars/sarah.jpg",
      messages: [
        {
          type: "received",
          text: "Hi! I just completed the 6-month recovery program and wanted to share my results!",
          time: "2:14 PM"
        },
        {
          type: "received",
          text: "I've been clean for 8 months now and feel like a completely new person. The 10-phase methodology really works!",
          time: "2:15 PM"
        },
        {
          type: "sent",
          text: "That\'s incredible Sarah! Congratulations on your transformation 🎉",
          time: "2:16 PM"
        },
        {
          type: "received",
          text: "Thank you! I'm now helping others in my community. This program saved my life ❤️",
          time: "2:17 PM"
        }
      ]
    },
    {
      id: 2,
      name: "Mike R.",
      avatar: "/avatars/mike.jpg",
      messages: [
        {
          type: "received",
          text: "Just finished Phase 7 of the program. The support has been amazing!",
          time: "Yesterday"
        },
        {
          type: "received",
          text: "My family can\'t believe the change in me. I\'m finally the father my kids deserve.",
          time: "Yesterday"
        },
        {
          type: "sent",
          text: "So proud of your progress Mike! Keep going strong 💪",
          time: "Yesterday"
        }
      ]
    },
    {
      id: 3,
      name: "Jennifer L.",
      avatar: "/avatars/jennifer.jpg",
      messages: [
        {
          type: "received",
          text: "One year clean today! 🎊 The Last Recovery Method changed everything for me.",
          time: "3 days ago"
        },
        {
          type: "received",
          text: "I got my dream job back and rebuilt my relationships. Forever grateful!",
          time: "3 days ago"
        },
        {
          type: "sent",
          text: "Amazing milestone Jennifer! You're an inspiration to others ✨",
          time: "3 days ago"
        }
      ]
    }
  ];

  const currentChat = chatMessages?.[selectedChat];

  return (
    <div className="w-full max-w-md mx-auto">
      <Card 
        layout_width="full"
        layout_height="auto"
        padding="none"
        margin="none"
        position="relative"
        variant="default"
        paddingVariant="none"
        onClick={() => {}}
        className="bg-background-white shadow-lg overflow-hidden"
      >
        {/* WhatsApp Header */}
        <div className="bg-secondary-background text-secondary-foreground p-4 flex items-center">
          <div className="w-10 h-10 bg-secondary-light rounded-full flex items-center justify-center mr-3">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Recovery Support</h3>
            <p className="text-sm text-secondary-light">Online</p>
          </div>
        </div>

        {/* Chat Selector */}
        <div className="bg-background-main p-2 border-b border-border-accent-light-gray">
          <div className="flex space-x-2 overflow-x-auto">
            {chatMessages?.map((chat, index) => (
              <button
                key={chat?.id}
                onClick={() => setSelectedChat(index)}
                className={`flex-shrink-0 px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedChat === index
                    ? 'bg-primary-background text-primary-foreground'
                    : 'bg-background-white text-text-primary hover:bg-primary-light'
                }`}
              >
                {chat?.name}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-3">
          {currentChat?.messages?.map((message, index) => (
            <div
              key={index}
              className={`flex ${message?.type === 'sent' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message?.type === 'sent' ?'bg-secondary-background text-secondary-foreground' :'bg-background-white border border-border-accent-light-gray text-text-primary'
                }`}
              >
                <p className="text-sm">{message?.text}</p>
                <p className={`text-xs mt-1 ${
                  message?.type === 'sent' ? 'text-secondary-light' : 'text-accent-gray'
                }`}>
                  {message?.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-border-accent-light-gray bg-background-main">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-border-accent-light-gray rounded-full focus:outline-none focus:ring-2 focus:ring-secondary-background"
              disabled
            />
            <button
              className="bg-secondary-background text-secondary-foreground p-2 rounded-full hover:bg-secondary-dark transition-colors duration-200"
              disabled
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
              </svg>
            </button>
          </div>
          <p className="text-xs text-accent-gray mt-2 text-center">
            Real conversations from our recovery community
          </p>
        </div>
      </Card>
    </div>
  );
};

export default WhatsAppChat;