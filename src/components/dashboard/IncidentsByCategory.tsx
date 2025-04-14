import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

interface IncidentCategory {
  name: string;
  value: number;
  color: string;
}

interface IncidentsByCategoryProps {
  data: IncidentCategory[];
  className?: string;
}

export function IncidentsByCategory({ data, className }: IncidentsByCategoryProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-0">
        <CardTitle className="text-base">Incidents by Category</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value} incidents`, '']}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{
                  fontSize: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
