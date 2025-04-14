import React from 'react';
import { Layout } from '../components/layout/Layout';

const Threats = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Threat Monitoring</h1>
      </div>

      <div className="flex items-center justify-center h-[60vh] bg-card rounded-lg">
        <div className="text-center max-w-md px-6">
          <h2 className="text-xl font-semibold mb-2">Real-time Threat Assessment</h2>
          <p className="text-muted-foreground">
            This page will provide real-time monitoring of active threats, risk analysis,
            and alert management features for security personnel.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Threats;
