import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { toast } from 'sonner';
import { Plus, Camera } from 'lucide-react';

interface CameraInputProps {
  onCameraAdd: (camera: unknown) => void;
}

export function CameraInput({ onCameraAdd }: CameraInputProps) {
  const [rtspUrl, setRtspUrl] = useState('');
  const [cameraName, setCameraName] = useState('');
  const [location, setLocation] = useState('');
  const [cameraType, setCameraType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rtspUrl || !cameraName || !location) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Use sample video for demo purposes
    const sampleVideos = [
      "src/public/videos/video-demo-0.mp4",
      "src/public/videos/video-demo-0.mp4",
      "src/public/videos/video-demo-0.mp4",
      "src/public/videos/video-demo-0.mp4"
    ];

    const newCamera = {
      id: Date.now().toString(),
      name: cameraName,
      location,
      rtspUrl,
      type: cameraType,
      status: 'active' as const,
      lastDetection: 'Just added',
      videoSrc: sampleVideos[Math.floor(Math.random() * sampleVideos.length)]
    };

    onCameraAdd(newCamera);
    toast.success('Camera added successfully with motion detection enabled');
    
    // Reset form
    setRtspUrl('');
    setCameraName('');
    setLocation('');
    setCameraType('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Add New Camera with Motion Detection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="cameraName">Camera Name *</Label>
              <Input
                id="cameraName"
                value={cameraName}
                onChange={(e) => setCameraName(e.target.value)}
                placeholder="e.g., Main Entrance"
                required
              />
            </div>
            <div>
              <Label htmlFor="location">Location *</Label>
              <Input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Building A, Floor 1"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="rtspUrl">RTSP URL * (or Video Source)</Label>
            <Input
              id="rtspUrl"
              value={rtspUrl}
              onChange={(e) => setRtspUrl(e.target.value)}
              placeholder="rtsp://username:password@ip:port/stream or video URL"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Sample video will be used for demo purposes
            </p>
          </div>

          <div>
            <Label htmlFor="cameraType">Camera Type</Label>
            <Select value={cameraType} onValueChange={setCameraType}>
              <SelectTrigger>
                <SelectValue placeholder="Select camera type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="indoor">Indoor</SelectItem>
                <SelectItem value="outdoor">Outdoor</SelectItem>
                <SelectItem value="ptz">PTZ Camera</SelectItem>
                <SelectItem value="dome">Dome Camera</SelectItem>
                <SelectItem value="bullet">Bullet Camera</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            <Camera className="h-4 w-4 mr-2" />
            Add Camera with Motion Detection
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
