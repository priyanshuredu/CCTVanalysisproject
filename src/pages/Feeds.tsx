import React from 'react';
import { Layout } from '../components/layout/Layout';

const Feeds = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">CCTV Feeds</h1>
      </div>

      <div className="flex items-center justify-center h-[60vh] bg-card rounded-lg">
        <div className="text-center max-w-md px-6">
          <h2 className="text-xl font-semibold mb-2">CCTV Feed Management</h2>
          <p className="text-muted-foreground">
            This page will contain all CCTV feed monitoring capabilities, including live streams, camera controls,
            and video playback features.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Feeds;
