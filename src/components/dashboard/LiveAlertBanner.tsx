import React, { useState, useEffect } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';

interface LiveAlertBannerProps {
  incident: {
    id: string;
    title: string;
    location: string;
    cameraId: string;
    threatLevel: 'low' | 'medium' | 'high';
  };
  onDismiss: () => void;
}

export function LiveAlertBanner({ incident, onDismiss }: LiveAlertBannerProps) {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleDispatch = () => {
    toast.success('Alert dispatched to nearest police station', {
      description: `Response team notified for incident #${incident.id}`
    });
    onDismiss();
  };

  const getBgColor = () => {
    switch (incident.threatLevel) {
      case 'low':
        return 'bg-threat-low/20 border-threat-low/30';
      case 'medium':
        return 'bg-threat-medium/20 border-threat-medium/30';
      case 'high':
        return 'bg-threat-high/20 border-threat-high/30';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className={`flex items-center justify-between p-3 rounded-md border ${getBgColor()} animate-pulse-alert`}>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <AlertCircle className="h-6 w-6 text-threat-high" />
        </div>

        <div>
          <h3 className="font-medium">LIVE ALERT: {incident.title}</h3>
          <p className="text-sm text-muted-foreground">
            Camera #{incident.cameraId} at {incident.location}
            {countdown > 0 && <span> - Auto-dispatch in {countdown}s</span>}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="destructive" onClick={handleDispatch}>
          Dispatch Now
        </Button>

        <Button variant="ghost" size="icon" onClick={onDismiss}>
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      </div>
    </div>
  );
}
