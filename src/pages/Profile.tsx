import React from 'react';
import { Settings, Edit, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profile1 from '@/assets/profile-1.jpg';

const Profile = () => {
  const interests = [
    'Viagem', 'Fotografia', 'Café', 'Música', 'Livros', 'Cinema', 'Arte', 'Natureza'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary px-6 py-8 text-white relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold">Seu Perfil</h1>
            <p className="text-white/90">Complete seu perfil para mais matches</p>
          </div>
          <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/20">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Profile Content */}
      <div className="px-4 py-6 pb-24">
        <div className="max-w-md mx-auto space-y-6">
          {/* Profile Picture */}
          <Card className="p-6 shadow-card text-center">
            <div className="relative inline-block mb-4">
              <img
                src={profile1}
                alt="Seu perfil"
                className="w-32 h-32 rounded-full object-cover mx-auto shadow-love"
              />
              <Button
                size="sm"
                className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-love text-white shadow-love"
              >
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <h2 className="text-2xl font-bold mb-2">Sofia, 25</h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>São Paulo, SP</span>
            </div>
          </Card>

          {/* About Me */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Sobre mim</h3>
              <Button size="sm" variant="ghost" className="text-primary">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-muted-foreground">
              Amo viajar, conhecer lugares novos e pessoas interessantes. 
              Procuro alguém para compartilhar aventuras e criar memórias incríveis juntos!
            </p>
          </Card>

          {/* Info Cards */}
          <div className="space-y-4">
            <Card className="p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Profissão</p>
                  <p className="text-sm text-muted-foreground">Designer Gráfica</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-love rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Educação</p>
                  <p className="text-sm text-muted-foreground">Universidade de São Paulo</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Interests */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Interesses</h3>
              <Button size="sm" variant="ghost" className="text-primary">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-primary text-white rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Card>

          {/* Action Button */}
          <Button className="w-full bg-gradient-love text-white py-3 text-lg font-semibold shadow-love hover:shadow-float transition-all duration-300">
            Editar Perfil Completo
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Profile;