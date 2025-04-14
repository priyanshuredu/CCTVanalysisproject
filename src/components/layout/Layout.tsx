import React from 'react';
import { Sidebar } from './Sidebar';
import { Toaster } from "sonner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 pl-64 overflow-y-auto">
        <div className="container mx-auto p-6">
          {children}
        </div>
      </main>
      
      <Toaster position="top-right" closeButton />
    </div>
  );
}
