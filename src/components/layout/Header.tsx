'use client';

import { Bell, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border bg-background/95 backdrop-blur px-6 shadow-sm supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-muted-foreground hover:text-foreground">
          <Menu className="h-5 w-5" />
        </button>
        {/* Breadcrumb replacement for now */}
        <h2 className="text-lg font-semibold text-foreground">Overview</h2>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search districts..."
            className="h-9 w-64 rounded-md border border-input bg-transparent pl-9 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:ring-1 focus:ring-ring"
          />
        </div>

        {/* Notifications */}
        <button className="relative ml-auto flex-shrink-0 p-2 text-muted-foreground hover:text-foreground focus:outline-none">
          <span className="sr-only">View notifications</span>
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
        </button>
      </div>
    </header>
  );
}
