
import React from 'react';
import { cn } from '../../libs/utils';
import { Badge } from '../ui/badge';

type ThreatLevel = 'low' | 'medium' | 'high';

interface ThreatLevelBadgeProps {
  level: ThreatLevel;
  className?: string;
}

export function ThreatLevelBadge({ level, className }: ThreatLevelBadgeProps) {
  const getBadgeColor = () => {
    switch (level) {
      case 'low':
        return 'bg-threat-low/20 text-threat-low border-threat-low/30';
      case 'medium':
        return 'bg-threat-medium/20 text-threat-medium border-threat-medium/30';
      case 'high':
        return 'bg-threat-high/20 text-threat-high border-threat-high/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getLabel = () => {
    switch (level) {
      case 'low':
        return 'Low Risk';
      case 'medium':
        return 'Medium Risk';
      case 'high':
        return 'High Risk';
      default:
        return 'Unknown';
    }
  };

  const getPulseAnimation = () => {
    return level === 'high' ? 'animate-pulse-alert' : '';
  };

  return (
    <Badge className={cn(
      "border font-medium",
      getBadgeColor(),
      getPulseAnimation(),
      className
    )}>
      {getLabel()}
    </Badge>
  );
}

