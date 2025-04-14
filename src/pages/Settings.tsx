import React from 'react';
import { Layout } from '../components/layout/Layout';

const Settings = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">System Settings</h1>
      </div>

      <div className="flex items-center justify-center h-[60vh] bg-card rounded-lg">
        <div className="text-center max-w-md px-6">
          <h2 className="text-xl font-semibold mb-2">Configuration Panel</h2>
          <p className="text-muted-foreground">
            This page will provide access to system configuration, user management, notification settings,
            and integration options for the surveillance system.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
