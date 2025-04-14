import React from 'react';
import { Layout } from '../components/layout/Layout';

const Analytics = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
      </div>

      <div className="flex items-center justify-center h-[60vh] bg-card rounded-lg">
        <div className="text-center max-w-md px-6">
          <h2 className="text-xl font-semibold mb-2">Advanced Analytics</h2>
          <p className="text-muted-foreground">
            This page will provide comprehensive analytics and data visualization tools for
            security trends, patterns, and performance metrics.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
