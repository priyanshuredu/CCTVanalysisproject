
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { StatCard } from '../components/dashboard/StatCard';
import { ThreatMap } from '../components/threats/ThreatMap';
import { RiskAssessment } from '../components/threats/RiskAssessment';
import { RecentIncident } from '../components/dashboard/RecentIncident';
import { AlertTriangle, Shield, Target, TrendingUp } from 'lucide-react';

const Threats = () => {
  const activeThreatData = [
    {
      id: "THR-001",
      title: "Weapon Detection",
      description: "Potential weapon detected in crowd surveillance area",
      location: "Downtown Plaza",
      time: "2 minutes ago",
      threatLevel: "high" as const
    },
    {
      id: "THR-002",
      title: "Unusual Behavior",
      description: "Individual exhibiting suspicious loitering behavior",
      location: "Shopping Center Entrance",
      time: "8 minutes ago",
      threatLevel: "medium" as const
    },
    {
      id: "THR-003",
      title: "Perimeter Breach",
      description: "Unauthorized access attempt detected at fence line",
      location: "Warehouse District",
      time: "15 minutes ago",
      threatLevel: "high" as const
    }
  ];

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Threat Monitoring</h1>
          <p className="text-muted-foreground">Real-time threat assessment and monitoring</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Active Threats"
          value="7"
          icon={AlertTriangle}
          trend={{ value: 12, isPositive: false }}
        />
        <StatCard
          title="Risk Level"
          value="Medium"
          icon={Shield}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Monitored Zones"
          value="24/24"
          icon={Target}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Threat Score"
          value="78%"
          icon={TrendingUp}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <ThreatMap />
        </div>
        <div>
          <RiskAssessment />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-medium mb-3">Active Threats</h2>
          <div className="space-y-3">
            {activeThreatData.map((threat) => (
              <RecentIncident key={threat.id} {...threat} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-3">Threat Timeline</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-red-500 pl-4 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">High Priority Alert</span>
                <span className="text-xs text-muted-foreground">2 mins ago</span>
              </div>
              <p className="text-sm text-muted-foreground">Weapon detection at Downtown Plaza</p>
            </div>
            <div className="border-l-2 border-yellow-500 pl-4 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">Medium Priority Alert</span>
                <span className="text-xs text-muted-foreground">8 mins ago</span>
              </div>
              <p className="text-sm text-muted-foreground">Suspicious behavior detected</p>
            </div>
            <div className="border-l-2 border-green-500 pl-4 pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-sm">Threat Resolved</span>
                <span className="text-xs text-muted-foreground">25 mins ago</span>
              </div>
              <p className="text-sm text-muted-foreground">False alarm - package identified</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Threats;
