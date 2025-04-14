import React from 'react';
import { Card, CardContent } from '../ui/card';
import { ThreatLevelBadge } from './ThreatLevelBadge';
import { MapPin, Clock } from 'lucide-react';

interface RecentIncidentProps {
  id: string;
  title: string;
  description: string;
  location: string;
  time: string;
  threatLevel: 'low' | 'medium' | 'high';
  className?: string;
}

export function RecentIncident({
  id,
  title,
  description,
  location,
  time,
  threatLevel,
  className,
}: RecentIncidentProps) {
  return (
    <Card className={className}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{title}</h3>
              <ThreatLevelBadge level={threatLevel} />
            </div>

            <p className="text-sm text-muted-foreground mt-1">{description}</p>

            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center text-xs text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                <span>{location}</span>
              </div>

              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                <span>{time}</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground font-mono">
            #{id}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
