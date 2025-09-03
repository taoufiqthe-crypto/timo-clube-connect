import React from 'react';
import { MessageCircle, Video, Phone } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profile1 from '@/assets/profile-1.jpg';
import profile2 from '@/assets/profile-2.jpg';

const Chat = () => {
  const conversations = [
    {
      id: '1',
      name: 'Sofia',
      image: profile1,
      lastMessage: 'Que tal nos encontrarmos para um café?',
      time: '10min',
      unread: 2,
      isOnline: true,
    },
    {
      id: '2',
      name: 'Miguel',
      image: profile2,
      lastMessage: 'Adorei suas fotos de viagem! 📸',
      time: '2h',
      unread: 0,
      isOnline: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary px-6 py-8 text-white">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MessageCircle className="w-7 h-7" />
          <h1 className="text-2xl font-bold">Conversas</h1>
        </div>
        <p className="text-center text-white/90">
          Continue suas conversas
        </p>
      </header>

      {/* Chat List */}
      <div className="px-4 py-6 pb-24">
        <div className="max-w-md mx-auto space-y-4">
          {conversations.length > 0 ? (
            conversations.map((chat) => (
              <Card key={chat.id} className="p-4 shadow-card hover:shadow-love transition-all duration-200 cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={chat.image}
                      alt={chat.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {chat.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-lg truncate">{chat.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{chat.time}</span>
                        {chat.unread > 0 && (
                          <div className="w-5 h-5 bg-gradient-love rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{chat.unread}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className={`text-sm truncate ${chat.unread > 0 ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                      {chat.lastMessage}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button size="sm" className="bg-gradient-love text-white rounded-full w-10 h-10 p-0">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhuma conversa ainda</h3>
              <p className="text-muted-foreground mb-6">
                Quando você tiver matches, suas conversas aparecerão aqui!
              </p>
              <Button className="bg-gradient-love text-white">
                Encontrar Matches
              </Button>
            </div>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Chat;