
import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { ReportGenerator } from '../components/reports/ReportGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Download, FileText, Calendar, Clock } from 'lucide-react';

const Reports = () => {
  const recentReports = [
    {
      id: 'RPT-001',
      name: 'Weekly Security Summary',
      type: 'Weekly Analysis',
      dateGenerated: '2024-01-15',
      status: 'completed',
      size: '2.4 MB'
    },
    {
      id: 'RPT-002',
      name: 'Incident Analysis Report',
      type: 'Incident Report',
      dateGenerated: '2024-01-14',
      status: 'completed',
      size: '1.8 MB'
    },
    {
      id: 'RPT-003',
      name: 'Monthly Threat Assessment',
      type: 'Threat Assessment',
      dateGenerated: '2024-01-13',
      status: 'processing',
      size: '--'
    },
    {
      id: 'RPT-004',
      name: 'System Performance Report',
      type: 'Performance',
      dateGenerated: '2024-01-12',
      status: 'completed',
      size: '3.1 MB'
    }
  ];

  const scheduledReports = [
    {
      id: 'SCH-001',
      name: 'Daily Incident Summary',
      frequency: 'Daily at 8:00 AM',
      nextRun: '2024-01-16 08:00',
      enabled: true
    },
    {
      id: 'SCH-002',
      name: 'Weekly Analytics Report',
      frequency: 'Weekly on Monday',
      nextRun: '2024-01-22 09:00',
      enabled: true
    },
    {
      id: 'SCH-003',
      name: 'Monthly Executive Summary',
      frequency: 'Monthly on 1st',
      nextRun: '2024-02-01 10:00',
      enabled: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-500';
      case 'processing':
        return 'bg-yellow-500/20 text-yellow-500';
      case 'failed':
        return 'bg-red-500/20 text-red-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Report Generation</h1>
          <p className="text-muted-foreground">Generate and manage security reports</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <ReportGenerator />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">{report.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{report.type}</span>
                          <span>•</span>
                          <span>{report.dateGenerated}</span>
                          <span>•</span>
                          <span>{report.size}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                      {report.status === 'completed' && (
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">{report.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{report.frequency}</span>
                          <span>•</span>
                          <span>Next: {report.nextRun}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant={report.enabled ? "default" : "secondary"}>
                        {report.enabled ? 'Enabled' : 'Disabled'}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Configure
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
