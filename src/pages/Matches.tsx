import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profile1 from '@/assets/profile-1.jpg';
import profile2 from '@/assets/profile-2.jpg';

const Matches = () => {
  const matches = [
    {
      id: '1',
      name: 'Sofia',
      image: profile1,
      lastMessage: 'Oi! Como você está?',
      time: '2h',
      isOnline: true,
    },
    {
      id: '2',
      name: 'Miguel',
      image: profile2,
      lastMessage: 'Adorei suas fotos de viagem!',
      time: '1d',
      isOnline: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary px-6 py-8 text-white">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="w-7 h-7" />
          <h1 className="text-2xl font-bold">Seus Matches</h1>
        </div>
        <p className="text-center text-white/90">
          {matches.length} conexões esperando por você
        </p>
      </header>

      {/* Matches List */}
      <div className="px-4 py-6 pb-24">
        <div className="max-w-md mx-auto space-y-4">
          {matches.length > 0 ? (
            matches.map((match) => (
              <Card key={match.id} className="p-4 shadow-card hover:shadow-love transition-all duration-200">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={match.image}
                      alt={match.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {match.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-lg truncate">{match.name}</h3>
                      <span className="text-xs text-muted-foreground">{match.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {match.lastMessage}
                    </p>
                  </div>
                  
                  <Button size="sm" className="bg-gradient-love text-white rounded-full">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhum match ainda</h3>
              <p className="text-muted-foreground mb-6">
                Continue descobrindo pessoas para encontrar seus matches!
              </p>
              <Button className="bg-gradient-love text-white">
                Descobrir Pessoas
              </Button>
            </div>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Matches;