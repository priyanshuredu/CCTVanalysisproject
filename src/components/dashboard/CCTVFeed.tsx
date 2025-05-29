
import React, { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ThreatLevelBadge } from './ThreatLevelBadge';
import { AlertTriangle, MoreVertical, MapPin, Video, Square, Circle } from 'lucide-react';
import { cn } from '../../libs/utils';

interface CCTVFeedProps {
  id: string;
  name: string;
  location: string;
  videoSrc: string;
  status: 'active' | 'alert';
  threatLevel?: 'low' | 'medium' | 'high';
  lastDetection?: string;
  className?: string;
}

export function CCTVFeed({ 
  id, 
  name, 
  location, 
  videoSrc, 
  status,
  threatLevel,
  lastDetection,
  className 
}: CCTVFeedProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [motionDetected, setMotionDetected] = useState(false);
  const [lastMotionTime, setLastMotionTime] = useState<Date | null>(null);

  // Simulate motion detection
  useEffect(() => {
    const interval = setInterval(() => {
      const hasMotion = Math.random() > 0.7; // 30% chance of motion
      setMotionDetected(hasMotion);
      
      if (hasMotion) {
        setLastMotionTime(new Date());
        // Auto start recording on motion detection
        if (!isRecording) {
          handleStartRecording();
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isRecording]);

  const handleStartRecording = () => {
    setIsRecording(true);
    console.log(`Started recording for camera ${id}`);
    // In a real implementation, this would start actual video recording
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    console.log(`Stopped recording for camera ${id}`);
  };

  return (
    <Card className={cn(
      "overflow-hidden", 
      status === 'alert' && "ring-2 ring-threat-high",
      motionDetected && "ring-2 ring-yellow-400",
      className
    )}>
      <div className="relative">
        <div className="aspect-video bg-cctv-darker relative overflow-hidden">
          <video 
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            onLoadStart={() => console.log(`Loading video for camera ${id}`)}
          />
          
          {status === 'alert' && (
            <div className="absolute inset-0 bg-threat-high/10 flex items-center justify-center">
              <div className="bg-threat-high text-white rounded-full p-3">
                <AlertTriangle className="h-6 w-6" />
              </div>
            </div>
          )}

          {motionDetected && (
            <div className="absolute top-16 left-2">
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 animate-pulse">
                MOTION DETECTED
              </Badge>
            </div>
          )}
          
          <div className="absolute top-2 left-2 flex items-center space-x-2">
            <Badge variant="secondary" className="bg-cctv-dark/80 text-xs font-medium">
              CAMERA #{id}
            </Badge>
            
            {threatLevel && (
              <ThreatLevelBadge level={threatLevel} />
            )}

            {isRecording && (
              <Badge variant="secondary" className="bg-red-500/80 text-white text-xs animate-pulse">
                <Circle className="h-2 w-2 mr-1 fill-current" />
                REC
              </Badge>
            )}
          </div>
          
          <div className="absolute top-2 right-2">
            <button className="text-white hover:bg-cctv-dark/50 p-1 rounded-full">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-white">{name}</h3>
                <div className="flex items-center text-xs text-white/80 mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{location}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {!isRecording ? (
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={handleStartRecording}
                    className="h-8 px-2"
                  >
                    <Video className="h-3 w-3 mr-1" />
                    Record
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={handleStopRecording}
                    className="h-8 px-2"
                  >
                    <Square className="h-3 w-3 mr-1" />
                    Stop
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CardFooter className="px-3 py-2 bg-card text-xs text-muted-foreground">
        <div className="flex justify-between items-center w-full">
          <span>
            {lastDetection || 'No recent activity'}
          </span>
          {lastMotionTime && (
            <span className="text-yellow-400">
              Motion: {lastMotionTime.toLocaleTimeString()}
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

