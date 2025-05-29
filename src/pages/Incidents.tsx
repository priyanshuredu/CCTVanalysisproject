
import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { IncidentFilters } from '../components/incidents/IncidentFilters';
import { IncidentTable } from '../components/incidents/IncidentTable';
import { StatCard } from '../components/dashboard/StatCard';
import { AlertCircle, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const Incidents = () => {
  const [filters, setFilters] = useState({
    status: 'all',
    threatLevel: 'all',
    location: '',
    dateFrom: undefined,
    dateTo: undefined,
  });

  const mockIncidents = [
    {
      id: "INC-8721",
      title: "Potential Theft",
      description: "Individual attempting to open car doors in parking lot",
      location: "Downtown Parking Garage",
      time: "Today, 12:34 PM",
      status: "active" as const,
      threatLevel: "medium" as const,
      cameraId: "1245",
      evidence: ["video_001.mp4", "snapshot_001.jpg"]
    },
    {
      id: "INC-8719",
      title: "Physical Altercation",
      description: "Two individuals engaged in physical confrontation",
      location: "Main St & 5th Ave",
      time: "Today, 11:20 AM",
      status: "investigating" as const,
      threatLevel: "high" as const,
      cameraId: "4312"
    },
    {
      id: "INC-8715",
      title: "Suspicious Package",
      description: "Unattended package left near building entrance",
      location: "City Hall Plaza",
      time: "Today, 10:05 AM",
      status: "resolved" as const,
      threatLevel: "low" as const,
      cameraId: "7612"
    },
    {
      id: "INC-8712",
      title: "Loitering Detected",
      description: "Group of individuals loitering near entrance for extended period",
      location: "Shopping Mall North Gate",
      time: "Yesterday, 8:45 PM",
      status: "resolved" as const,
      threatLevel: "low" as const,
      cameraId: "7612"
    },
    {
      id: "INC-8708",
      title: "Vandalism",
      description: "Property damage detected on building exterior",
      location: "Downtown Office Complex",
      time: "Yesterday, 3:22 PM",
      status: "investigating" as const,
      threatLevel: "medium" as const,
      cameraId: "1245"
    }
  ];

  const filteredIncidents = mockIncidents.filter(incident => {
    if (filters.status !== 'all' && incident.status !== filters.status) return false;
    if (filters.threatLevel !== 'all' && incident.threatLevel !== filters.threatLevel) return false;
    if (filters.location && !incident.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    return true;
  });

  const handleViewDetails = (incident: any) => {
    console.log('Viewing incident:', incident);
    // TODO: Implement incident details modal or navigation
  };

  const activeIncidents = mockIncidents.filter(i => i.status === 'active').length;
  const resolvedIncidents = mockIncidents.filter(i => i.status === 'resolved').length;
  const investigatingIncidents = mockIncidents.filter(i => i.status === 'investigating').length;
  const highThreatIncidents = mockIncidents.filter(i => i.threatLevel === 'high').length;

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Incident Management</h1>
          <p className="text-muted-foreground">Track and manage security incidents</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Active Incidents"
          value={activeIncidents.toString()}
          icon={AlertCircle}
          trend={{ value: 15, isPositive: false }}
        />
        <StatCard
          title="Under Investigation"
          value={investigatingIncidents.toString()}
          icon={Clock}
          trend={{ value: 8, isPositive: false }}
        />
        <StatCard
          title="Resolved Today"
          value={resolvedIncidents.toString()}
          icon={CheckCircle}
          trend={{ value: 25, isPositive: true }}
        />
        <StatCard
          title="High Threat"
          value={highThreatIncidents.toString()}
          icon={TrendingUp}
          trend={{ value: 12, isPositive: false }}
        />
      </div>

      <div className="space-y-6">
        <IncidentFilters
          filters={filters}
          onFilterChange={setFilters}
          onClearFilters={() => setFilters({
            status: 'all',
            threatLevel: 'all',
            location: '',
            dateFrom: undefined,
            dateTo: undefined,
          })}
        />

        <IncidentTable
          incidents={filteredIncidents}
          onViewDetails={handleViewDetails}
        />
      </div>
    </Layout>
  );
};

export default Incidents;
