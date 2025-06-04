
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../libs/utils';
import { 
  Home, 
  AlertCircle, 
  Database, 
  Layout, 
  LineChart, 
  Settings, 
  Camera, 
  ShieldAlert
} from 'lucide-react';

type NavItem = {
  title: string;
  icon: React.ElementType;
  href: string;
};

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    icon: Home,
    href: '/',
  },
  {
    title: 'CCTV Feeds',
    icon: Camera,
    href: '/feeds',
  },
  {
    title: 'Incidents',
    icon: AlertCircle,
    href: '/incidents',
  },
  {
    title: 'Threat Monitoring',
    icon: ShieldAlert,
    href: '/threats',
  },
  {
    title: 'Analytics',
    icon: LineChart,
    href: '/analytics',
  },
  {
    title: 'Reports',
    icon: Database,
    href: '/reports',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export function Sidebar() {
  const location = useLocation();
  
  return (
    <div className="h-screen w-64 flex flex-col bg-sidebar fixed overflow-y-auto">
      <div className="p-4 flex items-center gap-3 border-b border-sidebar-border">
        <h1 className="text-lg font-bold">SurveilleX</h1>
      </div>
      
      <div className="flex-1 py-6">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.title}</span>
                
                {item.title === 'Incidents' && (
                  <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-threat-high text-xs text-white animate-pulse-alert">
                    3
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-cctv-accent flex items-center justify-center text-primary-foreground font-semibold">
            U
          </div>
          <div>
            <p className="text-sm font-medium">User0321</p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}

