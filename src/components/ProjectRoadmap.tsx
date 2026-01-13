'use client';

import React from 'react';
import { CheckCircle2, Circle, ArrowRight, Database, Layout, Map, Activity, Bell, Rocket, Lock } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type StepStatus = 'completed' | 'current' | 'upcoming';

interface Step {
  id: number;
  title: string;
  description: string;
  status: StepStatus;
  icon: React.ReactNode;
  tasks: { name: string; completed: boolean }[];
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Foundation & Backend',
    description: 'Project setup, Docker infrastructure, and Database schema.',
    status: 'completed',
    icon: <Database className="w-6 h-6" />,
    tasks: [
      { name: 'Project Initialization', completed: true },
      { name: 'Docker PostgreSQL & Redis', completed: true },
      { name: 'Prisma Schema Setup', completed: true },
      { name: 'Database Seeding', completed: true },
    ],
  },
  {
    id: 2,
    title: 'Core UI Architecture',
    description: 'Layouts, Navigation, and Design System implementation.',
    status: 'current',
    icon: <Layout className="w-6 h-6" />,
    tasks: [
      { name: 'Global Design System', completed: true },
      { name: 'App Layout (Sidebar/Header)', completed: true },
      { name: 'Dashboard Skeleton', completed: false },
    ],
  },
  {
    id: 3,
    title: 'Interactive Map Module',
    description: 'Leaflet integration and geospatial visualization.',
    status: 'upcoming',
    icon: <Map className="w-6 h-6" />,
    tasks: [
      { name: 'Map Component', completed: false },
      { name: 'District Rendering', completed: false },
      { name: 'Interactive Popups', completed: false },
    ],
  },
  {
    id: 4,
    title: 'Data Integration',
    description: 'Weather API connection and Real-time updates.',
    status: 'upcoming',
    icon: <Activity className="w-6 h-6" />,
    tasks: [
      { name: 'Weather Data Service', completed: false },
      { name: 'River Level Monitoring', completed: false },
      { name: 'Risk Assessment Engine', completed: false },
    ],
  },
  {
    id: 5,
    title: 'Alerting System',
    description: 'Real-time notifications and Dashboard widgets.',
    status: 'upcoming',
    icon: <Bell className="w-6 h-6" />,
    tasks: [
      { name: 'Alert Logic', completed: false },
      { name: 'Notifications UI', completed: false },
      { name: 'Historical Charts', completed: false },
    ],
  },
  {
    id: 6,
    title: 'Optimization',
    description: 'Caching, Performance tuning, and Deployment.',
    status: 'upcoming',
    icon: <Rocket className="w-6 h-6" />,
    tasks: [
      { name: 'Redis Caching', completed: false },
      { name: 'Production Build', completed: false },
    ],
  },
];

export default function ProjectRoadmap() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-12 font-sans selection:bg-primary/30">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Project Kickoff
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Flood Early Warning System
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A step-by-step roadmap to build a production-grade real-time disaster management platform.
            Current Phase: <span className="text-foreground font-semibold">Core UI Architecture</span>
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={cn(
                "group relative border rounded-2xl p-6 transition-all duration-300 overflow-hidden",
                step.status === 'current' 
                  ? "bg-gradient-to-br from-background to-secondary/30 border-primary/50 shadow-[0_0_30px_-15px_var(--color-primary)] ring-1 ring-primary/20" 
                  : "bg-card/50 border-border hover:border-border/80 hover:bg-card/80",
                step.status === 'upcoming' && "opacity-75 grayscale-[0.5]"
              )}
            >
              {/* Status Indicator */}
              <div className="absolute top-4 right-4">
                {step.status === 'completed' && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                {step.status === 'current' && <Activity className="w-6 h-6 text-primary animate-pulse" />}
                {step.status === 'upcoming' && <Lock className="w-5 h-5 text-muted-foreground/50" />}
              </div>

              {/* Icon & Title */}
              <div className="mb-6 space-y-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                  step.status === 'current' ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                )}>
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-3 pt-4 border-t border-border/50">
                {step.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    {task.completed ? (
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-muted-foreground/30" />
                    )}
                    <span className={cn(
                      task.completed ? "text-muted-foreground line-through decoration-border" : "text-foreground"
                    )}>
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Bar (Visual only) */}
              {step.status === 'current' && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary">
                  <div className="h-full bg-primary w-1/3 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
