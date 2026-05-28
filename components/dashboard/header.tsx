"use client";

import { useSession } from 'next-auth/react';
import { Bell, Settings as SettingsIcon, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Header() {
  const {data:session} = useSession()
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-8 py-4 flex items-center justify-between ml-64">
      

      <div className="flex items-center gap-6 ml-auto">
        <Button className="p-2 hover:bg-slate-800 rounded-lg transition-colors relative">
          <Bell className="w-5 h-5 text-slate-400 hover:text-white" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>

        <Button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
          <SettingsIcon className="w-5 h-5 text-slate-400 hover:text-white" />
        </Button>

        <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
          <div>
            <p className="text-sm font-medium text-white">
              {session?.user?.name}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
