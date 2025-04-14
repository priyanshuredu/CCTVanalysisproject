import React from 'react';
import { Layout } from '../components/layout/Layout';

const Incidents = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Incident Management</h1>
      </div>

      <div className="flex items-center justify-center h-[60vh] bg-card rounded-lg">
        <div className="text-center max-w-md px-6">
          <h2 className="text-xl font-semibold mb-2">Incident Database</h2>
          <p className="text-muted-foreground">
            This page will contain the comprehensive incident database, with filtering, sorting, and detailed
            incident analysis capabilities.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Incidents;
