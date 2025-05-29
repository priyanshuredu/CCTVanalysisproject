
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Shield, AlertTriangle, Activity } from 'lucide-react';

export function RiskAssessment() {
  const riskFactors = [
    { name: 'Physical Security', score: 85, status: 'good' },
    { name: 'Perimeter Control', score: 70, status: 'moderate' },
    { name: 'Access Control', score: 92, status: 'excellent' },
    { name: 'Surveillance Coverage', score: 78, status: 'good' },
    { name: 'Response Capability', score: 65, status: 'moderate' }
  ];

  const overallRisk = Math.round(riskFactors.reduce((sum, factor) => sum + factor.score, 0) / riskFactors.length);

  const getStatusColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getProgressColor = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Risk Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className={`text-3xl font-bold ${getStatusColor(overallRisk)}`}>
                {overallRisk}%
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Overall Security Score</p>
          </div>

          <div className="space-y-4">
            {riskFactors.map((factor) => (
              <div key={factor.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{factor.name}</span>
                  <span className={getStatusColor(factor.score)}>{factor.score}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(factor.score)}`}
                    style={{ width: `${factor.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="h-4 w-4" />
              <span>Last updated: 5 minutes ago</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
