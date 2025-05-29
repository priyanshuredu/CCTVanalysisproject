import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { CCTVFeed } from '../components/dashboard/CCTVFeed';
import { CameraInput } from '../components/feeds/CameraInput';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Camera, Grid, List, Plus } from 'lucide-react';
import { cn } from '../libs/utils';

const Feeds = () => {
  const [cameras, setCameras] = useState([
    {
      id: "1245",
      name: "Parkins Hospital",
      location: "Main St & 5th Ave",
      videoSrc: "src/public/videos/hospital-video.mp4",
      status: "alert" as const,
      threatLevel: "high" as const,
      lastDetection: "Person Detection"
    },
    {
      id: "4312",
      name: "Central Park West Parking",
      location: "Central Park, West Entrance",
      videoSrc: "src/public/videos/parking-video.mp4",
      status: "active" as const,
      lastDetection: "Vehicle Detection"
    },
    {
      id: "7612",
      name: "Shopping Center",
      location: "Cityview Mall, North Gate",
      videoSrc: "src/public/videos/shop-video.mp4",
      status: "active" as const,
      lastDetection: "Person Detection "
    },
    {
      id: "1261",
      name: "Downtown Main Street",
      location: "Main St & 5th Ave",
      videoSrc: "src/public/videos/street-video.mp4",
      status: "alert" as const,
      threatLevel: "high" as const,
      lastDetection: "Suspicious activity - 2 mins ago"
    },
    {
      id: "4312",
      name: "NH - 1A",
      location: "DownTown ",
      videoSrc: "src/public/videos/highway-video.mp4",
      status: "active" as const,
      lastDetection: "Car detection - 1 mins ago"
    },
    {
      id: "7612",
      name: "Shopping Mall Entrance",
      location: "Cityview Mall, North Gate",
      videoSrc: "src/public/videos/shopping-center-video.mp4",
      status: "active" as const,
      lastDetection: "Person Detection - 4 mins ago"
    }
  ]);

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAddCamera, setShowAddCamera] = useState(false);

  const handleCameraAdd = (newCamera: any) => {
    setCameras([...cameras, newCamera]);
    setShowAddCamera(false);
  };

  const activeCameras = cameras.filter(c => c.status === 'active').length;
  const alertCameras = cameras.filter(c => c.status === 'alert').length;

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">CCTV Feeds</h1>
          <p className="text-muted-foreground">Monitor all security cameras in real-time</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-green-500/20 text-green-500">
              {activeCameras} Active
            </Badge>
            <Badge variant="secondary" className="bg-red-500/20 text-red-500">
              {alertCameras} Alerts
            </Badge>
          </div>

          <div className="flex items-center border rounded-lg">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          <Button onClick={() => setShowAddCamera(!showAddCamera)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Camera
          </Button>
        </div>
      </div>

      {showAddCamera && (
        <div className="mb-6">
          <CameraInput onCameraAdd={handleCameraAdd} />
        </div>
      )}

      <div className={cn(
        "grid gap-4",
        viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
      )}>
        {cameras.map((feed) => (
          <CCTVFeed
            key={feed.id}
            {...feed}
            className={viewMode === 'list' ? 'flex flex-row items-center' : ''}
          />
        ))}
      </div>

      {cameras.length === 0 && (
        <div className="flex items-center justify-center h-[60vh] bg-card rounded-lg">
          <div className="text-center max-w-md px-6">
            <Camera className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">No Cameras Added</h2>
            <p className="text-muted-foreground mb-4">
              Add your first camera to start monitoring
            </p>
            <Button onClick={() => setShowAddCamera(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Camera
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Feeds;
