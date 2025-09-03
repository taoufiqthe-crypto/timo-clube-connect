import React, { useState } from 'react';
import { Heart, X, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProfileCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string;
  bio: string;
  interests: string[];
  onLike: (id: string) => void;
  onPass: (id: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  name,
  age,
  location,
  image,
  bio,
  interests,
  onLike,
  onPass,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="relative w-full max-w-sm mx-auto h-[600px] overflow-hidden shadow-card bg-gradient-card backdrop-blur-sm border-0">
      <div className="relative h-full">
        <div className="h-2/3 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={`${name}'s profile`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-primary animate-pulse" />
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold">{name}</h3>
              <div className="flex items-center gap-1 text-white/80">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{age}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-white/80 mb-3">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          <p className="text-sm text-white/90 mb-4 line-clamp-2">{bio}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {interests.slice(0, 3).map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white"
              >
                {interest}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-6">
            <Button
              size="lg"
              variant="outline"
              onClick={() => onPass(id)}
              className="w-16 h-16 rounded-full border-2 border-white/30 bg-black/20 backdrop-blur-sm hover:bg-black/40 hover:border-white/50 transition-all duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </Button>
            <Button
              size="lg"
              onClick={() => onLike(id)}
              className="w-16 h-16 rounded-full bg-gradient-love hover:shadow-love transition-all duration-200 transform hover:scale-105"
            >
              <Heart className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;