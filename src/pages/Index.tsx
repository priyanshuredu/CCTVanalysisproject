
import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { StatCard } from '../components/dashboard/StatCard';
import { CCTVFeed } from '../components/dashboard/CCTVFeed';
import { RecentIncident } from '../components/dashboard/RecentIncident';
import { IncidentsByCategory } from '../components/dashboard/IncidentsByCategory';
import { ThreatTimeline } from '../components/dashboard/ThreatTimeline';
import { LiveAlertBanner } from '../components/dashboard/LiveAlertBanner';
import { AlertCircle, Camera, ShieldAlert, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const [showAlert, setShowAlert] = useState(true);

  // Mock data for the dashboard
  const cctvFeeds = [
    {
      id: "1245",
      name: "Downtown Main Street",
      location: "Main St & 5th Ave",
      image: "https://images.unsplash.com/photo-1618783496526-95fbe8144fa0?q=80&w=1000&h=600&auto=format&fit=crop",
      status: "alert" as const,
      threatLevel: "high" as const,
      lastDetection: "Suspicious activity - 2 mins ago"
    },
    {
      id: "4312",
      name: "Central Park West",
      location: "Central Park, West Entrance",
      image: "https://images.unsplash.com/photo-1582845512747-e42001c95638?q=80&w=1000&h=600&auto=format&fit=crop",
      status: "active" as const,
      lastDetection: "Person detection - 17 mins ago"
    },
    {
      id: "7612",
      name: "Shopping Mall Entrance",
      location: "Cityview Mall, North Gate",
      image: "https://images.unsplash.com/photo-1615273849629-9af1c5fd0ae0?q=80&w=1000&h=600&auto=format&fit=crop",
      status: "active" as const,
      lastDetection: "Vehicle detection - 4 mins ago"
    },
    {
      id: "8712",
      name: "Transit Station",
      location: "City Central Station",
      image: "https://images.unsplash.com/photo-1564184895320-df453cceb34e?q=80&w=1000&h=600&auto=format&fit=crop",
      status: "alert" as const,
      threatLevel: "medium" as const,
      lastDetection: "Loitering detected - 8 mins ago"
    }
  ];

  const recentIncidents = [
    {
      id: "INC-8721",
      title: "Potential Theft",
      description: "Individual attempting to open car doors in parking lot",
      location: "Downtown Parking Garage",
      time: "Today, 12:34 PM",
      threatLevel: "medium" as const
    },
    {
      id: "INC-8719",
      title: "Physical Altercation",
      description: "Two individuals engaged in physical confrontation",
      location: "Main St & 5th Ave",
      time: "Today, 11:20 AM",
      threatLevel: "high" as const
    },
    {
      id: "INC-8715",
      title: "Suspicious Package",
      description: "Unattended package left near building entrance",
      location: "City Hall Plaza",
      time: "Today, 10:05 AM",
      threatLevel: "low" as const
    }
  ];

  const categoryData = [
    { name: "Theft", value: 28, color: "#FF4757" },
    { name: "Trespassing", value: 22, color: "#FF8C42" },
    { name: "Vandalism", value: 17, color: "#FFCC29" },
    { name: "Loitering", value: 12, color: "#29B6F6" },
    { name: "Violence", value: 9, color: "#9747FF" }
  ];

  const timelineData = [
    { time: "00:00", "Low Risk": 4, "Medium Risk": 2, "High Risk": 0 },
    { time: "04:00", "Low Risk": 6, "Medium Risk": 3, "High Risk": 1 },
    { time: "08:00", "Low Risk": 10, "Medium Risk": 5, "High Risk": 2 },
    { time: "12:00", "Low Risk": 8, "Medium Risk": 7, "High Risk": 4 },
    { time: "16:00", "Low Risk": 12, "Medium Risk": 9, "High Risk": 3 },
    { time: "20:00", "Low Risk": 7, "Medium Risk": 4, "High Risk": 1 },
    { time: "23:59", "Low Risk": 5, "Medium Risk": 3, "High Risk": 2 }
  ];

  const liveAlert = {
    id: "INC-8721",
    title: "Potential Theft Detected",
    location: "Downtown Parking Garage",
    cameraId: "1245",
    threatLevel: "high" as const
  };

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Security Dashboard</h1>
      </div>

      {showAlert && (
        <div className="mb-6">
          <LiveAlertBanner
            incident={liveAlert}
            onDismiss={() => setShowAlert(false)}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Active Cameras"
          value="24/24"
          icon={Camera}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Incidents Today"
          value="17"
          icon={AlertCircle}
          trend={{ value: 12, isPositive: false }}
        />
        <StatCard
          title="High Risk Threats"
          value="3"
          icon={AlertTriangle}
          trend={{ value: 25, isPositive: false }}
        />
        <StatCard
          title="Avg Response Time"
          value="4.2m"
          icon={ShieldAlert}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-medium mb-3">Live CCTV Feeds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cctvFeeds.map((feed) => (
              <CCTVFeed key={feed.id} {...feed} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-3">Recent Incidents</h2>
          <div className="space-y-3">
            {recentIncidents.map((incident) => (
              <RecentIncident key={incident.id} {...incident} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IncidentsByCategory data={categoryData} />
        <ThreatTimeline data={timelineData} />
      </div>
    </Layout>
  );
};

export default Dashboard;
