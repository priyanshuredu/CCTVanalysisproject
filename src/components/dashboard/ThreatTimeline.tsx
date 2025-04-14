import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface TimelineData {
  time: string;
  'Low Risk': number;
  'Medium Risk': number;
  'High Risk': number;
}

interface ThreatTimelineProps {
  data: TimelineData[];
  className?: string;
}

export function ThreatTimeline({ data, className }: ThreatTimelineProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-0">
        <CardTitle className="text-base">Threat Timeline (Last 24 Hours)</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis
                dataKey="time"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line
                type="monotone"
                dataKey="Low Risk"
                stroke="#FFCC29"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="Medium Risk"
                stroke="#FF8C42"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="High Risk"
                stroke="#FF4757"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
