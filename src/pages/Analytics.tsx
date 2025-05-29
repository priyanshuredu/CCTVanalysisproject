
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { StatCard } from '../components/dashboard/StatCard';
import { IncidentsByCategory } from '../components/dashboard/IncidentsByCategory';
import { ThreatTimeline } from '../components/dashboard/ThreatTimeline';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, TrendingUp, Users, Clock } from 'lucide-react';

const Analytics = () => {
  const hourlyData = [
    { hour: '00:00', incidents: 2 },
    { hour: '02:00', incidents: 1 },
    { hour: '04:00', incidents: 0 },
    { hour: '06:00', incidents: 3 },
    { hour: '08:00', incidents: 8 },
    { hour: '10:00', incidents: 12 },
    { hour: '12:00', incidents: 15 },
    { hour: '14:00', incidents: 18 },
    { hour: '16:00', incidents: 22 },
    { hour: '18:00', incidents: 16 },
    { hour: '20:00', incidents: 10 },
    { hour: '22:00', incidents: 6 }
  ];

  const locationData = [
    { name: 'Downtown', value: 35, color: '#FF4757' },
    { name: 'Shopping Centers', value: 25, color: '#FF8C42' },
    { name: 'Residential', value: 20, color: '#FFCC29' },
    { name: 'Industrial', value: 12, color: '#29B6F6' },
    { name: 'Parks', value: 8, color: '#9747FF' }
  ];

  const weeklyTrends = [
    { day: 'Mon', incidents: 45, resolved: 42 },
    { day: 'Tue', incidents: 52, resolved: 48 },
    { day: 'Wed', incidents: 38, resolved: 35 },
    { day: 'Thu', incidents: 61, resolved: 58 },
    { day: 'Fri', incidents: 73, resolved: 65 },
    { day: 'Sat', incidents: 29, resolved: 28 },
    { day: 'Sun', incidents: 34, resolved: 32 }
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

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive security analytics and insights</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Incidents"
          value="1,247"
          icon={Activity}
          trend={{ value: 8, isPositive: false }}
        />
        <StatCard
          title="Resolution Rate"
          value="94.2%"
          icon={TrendingUp}
          trend={{ value: 3, isPositive: true }}
        />
        <StatCard
          title="People Detected"
          value="8,542"
          icon={Users}
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Avg Response"
          value="3.8m"
          icon={Clock}
          trend={{ value: 12, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>24-Hour Incident Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Bar dataKey="incidents" fill="#29B6F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Incidents by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={locationData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {locationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Bar dataKey="incidents" fill="#FF4757" name="Incidents" />
                <Bar dataKey="resolved" fill="#29B6F6" name="Resolved" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <IncidentsByCategory data={categoryData} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <ThreatTimeline data={timelineData} />
      </div>
    </Layout>
  );
};

export default Analytics;
