import React from 'react';
import { Layout } from '../components/layout/Layout';

const Reports = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Report Generation</h1>
      </div>

      <div className="flex items-center justify-center h-[60vh] bg-card rounded-lg">
        <div className="text-center max-w-md px-6">
          <h2 className="text-xl font-semibold mb-2">Automated Reports</h2>
          <p className="text-muted-foreground">
            This page will provide tools for generating customized reports on security incidents,
            trends, and system performance across various timeframes.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
