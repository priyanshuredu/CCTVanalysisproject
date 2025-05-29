
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ThreatLevelBadge } from '../dashboard/ThreatLevelBadge';
import { Eye, MapPin, Clock } from 'lucide-react';

interface Incident {
  id: string;
  title: string;
  description: string;
  location: string;
  time: string;
  status: 'active' | 'resolved' | 'investigating';
  threatLevel: 'low' | 'medium' | 'high';
  cameraId?: string;
  evidence?: string[];
}

interface IncidentTableProps {
  incidents: Incident[];
  onViewDetails: (incident: Incident) => void;
}

export function IncidentTable({ incidents, onViewDetails }: IncidentTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-red-500/20 text-red-500';
      case 'resolved':
        return 'bg-green-500/20 text-green-500';
      case 'investigating':
        return 'bg-yellow-500/20 text-yellow-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Incidents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {incidents.map((incident) => (
            <div key={incident.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">{incident.title}</h3>
                    <ThreatLevelBadge level={incident.threatLevel} />
                    <Badge className={getStatusColor(incident.status)}>
                      {incident.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-2">{incident.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{incident.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{incident.time}</span>
                    </div>
                    {incident.cameraId && (
                      <div className="flex items-center gap-1">
                        <span>Camera #{incident.cameraId}</span>
                      </div>
                    )}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onViewDetails(incident)}
                  className="ml-4"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
