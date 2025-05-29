
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { MapPin, AlertTriangle } from 'lucide-react';

interface ThreatLocation {
  id: string;
  location: string;
  threatLevel: 'low' | 'medium' | 'high';
  type: string;
  time: string;
  coordinates: { x: number; y: number };
}

export function ThreatMap() {
  const threats: ThreatLocation[] = [
    {
      id: '1',
      location: 'Downtown Main St',
      threatLevel: 'high',
      type: 'Suspicious Activity',
      time: '2 mins ago',
      coordinates: { x: 25, y: 30 }
    },
    {
      id: '2',
      location: 'Central Park',
      threatLevel: 'medium',
      type: 'Loitering',
      time: '8 mins ago',
      coordinates: { x: 60, y: 45 }
    },
    {
      id: '3',
      location: 'Shopping Mall',
      threatLevel: 'low',
      type: 'Crowd Detection',
      time: '15 mins ago',
      coordinates: { x: 80, y: 70 }
    }
  ];

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Threat Location Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-muted rounded-lg h-64 mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg">
            {threats.map((threat) => (
              <div
                key={threat.id}
                className="absolute group cursor-pointer"
                style={{
                  left: `${threat.coordinates.x}%`,
                  top: `${threat.coordinates.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className={`w-4 h-4 rounded-full ${getThreatColor(threat.threatLevel)} animate-pulse`}>
                  <div className={`w-8 h-8 rounded-full ${getThreatColor(threat.threatLevel)} opacity-30 absolute -inset-2 animate-ping`}></div>
                </div>

                <div className="invisible group-hover:visible absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                  <div className="font-medium">{threat.location}</div>
                  <div className="text-gray-300">{threat.type} - {threat.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-sm">Active Threats</h4>
          {threats.map((threat) => (
            <div key={threat.id} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${getThreatColor(threat.threatLevel)}`}></div>
                <span>{threat.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {threat.type}
                </Badge>
                <span className="text-muted-foreground">{threat.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

