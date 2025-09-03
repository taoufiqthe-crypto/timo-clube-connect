import React, { useState } from 'react';
import { Heart, Zap } from 'lucide-react';
import ProfileCard from '@/components/ProfileCard';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-dating.jpg';
import profile1 from '@/assets/profile-1.jpg';
import profile2 from '@/assets/profile-2.jpg';
import profile3 from '@/assets/profile-3.jpg';

const Discover = () => {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);

  const profiles = [
    {
      id: '1',
      name: 'Sofia',
      age: 25,
      location: 'São Paulo, SP',
      image: profile1,
      bio: 'Amo viajar, conhecer lugares novos e pessoas interessantes. Procuro alguém para compartilhar aventuras!',
      interests: ['Viagem', 'Fotografia', 'Café', 'Música'],
    },
    {
      id: '2',
      name: 'Miguel',
      age: 28,
      location: 'Rio de Janeiro, RJ',
      image: profile2,
      bio: 'Engenheiro apaixonado por tecnologia e praia. Adoro um bom filme e uma conversa interessante.',
      interests: ['Tecnologia', 'Praia', 'Cinema', 'Livros'],
    },
    {
      id: '3',
      name: 'Camila',
      age: 24,
      location: 'Belo Horizonte, MG',
      image: profile3,
      bio: 'Artista visual e amante da natureza. Sempre em busca de inspiração e conexões verdadeiras.',
      interests: ['Arte', 'Natureza', 'Yoga', 'Culinária'],
    },
  ];

  const handleLike = (id: string) => {
    toast({
      title: "❤️ É um match!",
      description: "Vocês se curtiram mutuamente! Que tal começar uma conversa?",
    });
    nextProfile();
  };

  const handlePass = (id: string) => {
    nextProfile();
  };

  const nextProfile = () => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const currentProfile = profiles[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-primary/80" />
        </div>
        <div className="relative z-10 px-6 py-8 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-bold">Tlove</h1>
          </div>
          <p className="text-white/90">Encontre conexões verdadeiras</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 py-6 pb-24">
        <div className="max-w-md mx-auto">
          {/* Super Like Button */}
          <div className="flex justify-center mb-6">
            <Button className="bg-gradient-love text-white px-6 py-3 rounded-full shadow-love hover:shadow-float transition-all duration-300 transform hover:scale-105">
              <Zap className="w-5 h-5 mr-2" />
              Super Like
            </Button>
          </div>

          {/* Profile Card */}
          <ProfileCard
            {...currentProfile}
            onLike={handleLike}
            onPass={handlePass}
          />

          {/* Stats */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              {profiles.length - currentIndex - 1} pessoas próximas de você
            </p>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Discover;