
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SystemConfiguration } from '../components/settings/SystemConfiguration';
import { UserManagement } from '../components/settings/UserManagement';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Database, Wifi, HardDrive, Activity, Download, Upload } from 'lucide-react';

const Settings = () => {
  const systemStats = {
    uptime: '15 days, 4 hours',
    cpuUsage: 35,
    memoryUsage: 68,
    diskUsage: 42,
    networkStatus: 'Connected',
    lastBackup: '2024-01-15 02:00 AM'
  };

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">System Settings</h1>
          <p className="text-muted-foreground">Configure system settings and manage users</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Uptime</span>
              <Badge variant="outline">{systemStats.uptime}</Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>CPU Usage</span>
                <span>{systemStats.cpuUsage}%</span>
              </div>
              <Progress value={systemStats.cpuUsage} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Memory Usage</span>
                <span>{systemStats.memoryUsage}%</span>
              </div>
              <Progress value={systemStats.memoryUsage} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Disk Usage</span>
                <span>{systemStats.diskUsage}%</span>
              </div>
              <Progress value={systemStats.diskUsage} className="h-2" />
            </div>

            <div className="pt-2 border-t">
              <div className="flex items-center gap-2 text-sm">
                <Wifi className="h-4 w-4 text-green-500" />
                <span>Network: {systemStats.networkStatus}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Database & Storage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Incidents Stored</span>
                <span>1,247</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Video Files</span>
                <span>856 GB</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Last Backup</span>
                <span>{systemStats.lastBackup}</span>
              </div>
            </div>

            <div className="pt-2 border-t space-y-2">
              <Button variant="outline" size="sm" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Backup Now
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Import Data
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HardDrive className="h-5 w-5" />
              System Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full">
                Clear Cache
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Optimize Database
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Update System
              </Button>
              <Button variant="outline" size="sm" className="w-full text-red-500 hover:text-red-600">
                System Restart
              </Button>
            </div>

            <div className="pt-2 border-t text-xs text-muted-foreground">
              <div>Version: 2.4.1</div>
              <div>Last updated: Jan 10, 2024</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SystemConfiguration />
        <UserManagement />
      </div>
    </Layout>
  );
};

export default Settings;
