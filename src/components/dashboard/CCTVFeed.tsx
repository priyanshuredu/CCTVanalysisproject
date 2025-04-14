import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { ThreatLevelBadge } from './ThreatLevelBadge';
import { AlertTriangle, MoreVertical, MapPin } from 'lucide-react';
import { cn } from '../../libs/utils';

interface CCTVFeedProps {
  id: string;
  name: string;
  location: string;
  image: string;
  status: 'active' | 'alert';
  threatLevel?: 'low' | 'medium' | 'high';
  lastDetection?: string;
  className?: string;
}

export function CCTVFeed({
  id,
  name,
  location,
  image,
  status,
  threatLevel,
  lastDetection,
  className
}: CCTVFeedProps) {
  return (
    <Card className={cn(
      "overflow-hidden",
      status === 'alert' && "ring-2 ring-threat-high",
      className
    )}>
      <div className="relative">
        <div className="aspect-video bg-cctv-darker relative overflow-hidden">
          <img
            src={image}
            alt={`CCTV Feed ${name}`}
            className="w-full h-full object-cover"
          />

          {status === 'alert' && (
            <div className="absolute inset-0 bg-threat-high/10 flex items-center justify-center">
              <div className="bg-threat-high text-white rounded-full p-3">
                <AlertTriangle className="h-6 w-6" />
              </div>
            </div>
          )}

          <div className="absolute top-2 left-2 flex items-center space-x-2">
            <Badge variant="secondary" className="bg-cctv-dark/80 text-xs font-medium">
              CAMERA #{id}
            </Badge>

            {threatLevel && (
              <ThreatLevelBadge level={threatLevel} />
            )}
          </div>

          <div className="absolute top-2 right-2">
            <button className="text-white hover:bg-cctv-dark/50 p-1 rounded-full">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="font-medium text-white">{name}</h3>
            <div className="flex items-center text-xs text-white/80 mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>

      {lastDetection && (
        <CardFooter className="px-3 py-2 bg-card text-xs text-muted-foreground">
          Last detection: {lastDetection}
        </CardFooter>
      )}
    </Card>
  );
}
